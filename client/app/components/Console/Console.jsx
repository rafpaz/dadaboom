import * as React from 'react';
import {
	SortingState, EditingState, PagingState,
	IntegratedPaging, IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
	Grid,
	Table, TableHeaderRow, TableEditRow, TableEditColumn,
	PagingPanel, DragDropProvider, TableColumnReordering,
} from '@devexpress/dx-react-grid-material-ui';
import Paper from 'material-ui/Paper';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {TableCell} from 'material-ui/Table';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {withStyles} from 'material-ui/styles';
import globalSalesValues from './availableData';
import 'whatwg-fetch';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import moment from 'moment';
import $ from 'jquery';
import axios from 'axios';

const availableValues = {
	product: globalSalesValues.product,
	region: globalSalesValues.region,
	customer: globalSalesValues.customer,
};

const styles = theme => ({
	lookupEditCell: {
		paddingTop: theme.spacing.unit * 0.875,
		paddingRight: theme.spacing.unit,
		paddingLeft: theme.spacing.unit,
	},
	dialog: {
		width: 'calc(100% - 16px)',
	},
	inputRoot: {
		width: '100%',
	},
});

const AddButton = ({onExecute}) => (
	<div style={{textAlign: 'center'}}>
		<Button
			color="primary"
			onClick={onExecute}
			title="Create new row"
		>
			New
		</Button>
	</div>
);

const EditButton = ({onExecute}) => (
	<IconButton onClick={onExecute} title="Edit row">
		<EditIcon/>
	</IconButton>
);

const DeleteButton = ({onExecute}) => (
	<IconButton onClick={onExecute} title="Delete row">
		<DeleteIcon/>
	</IconButton>
);

const CommitButton = ({onExecute}) => (
	<IconButton onClick={onExecute} title="Save changes">
		<SaveIcon/>
	</IconButton>
);

const CancelButton = ({onExecute}) => (
	<IconButton color="secondary" onClick={onExecute} title="Cancel changes">
		<CancelIcon/>
	</IconButton>
);

const commandComponents = {
	add: AddButton,
	edit: EditButton,
	delete: DeleteButton,
	commit: CommitButton,
	cancel: CancelButton,
};

const Command = ({id, onExecute}) => {
	const CommandButton = commandComponents[id];
	return (
		<CommandButton
			onExecute={onExecute}
		/>
	);
};

const LookupEditCellBase = ({availableColumnValues, value, onValueChange, classes,}) => (
	<TableCell
		className={classes.lookupEditCell}
	>
		<Select
			value={value}
			onChange={event => onValueChange(event.target.value)}
			input={
				<Input
					classes={{root: classes.inputRoot}}
				/>
			}
		>
			{availableColumnValues.map(item => (
				<MenuItem key={item} value={item}>{item}</MenuItem>
			))}
		</Select>
	</TableCell>
);
export const LookupEditCell = withStyles(styles, {name: 'Console'})(LookupEditCellBase);

const Cell = (props) => {
	return <Table.Cell {...props} />;
};

const EditCell = (props) => {
	const availableColumnValues = availableValues[props.column.name];
	if (availableColumnValues) {
		return <LookupEditCell {...props} availableColumnValues={availableColumnValues} />;
	}
	return <TableEditRow.Cell {...props} />;
};

const getRowId = row => row._id;

const DateFormatter = ({ value }) =>
	moment(value).format("DD/MM/YYYY");

const DateTypeProvider = props => (
	<DataTypeProvider
		formatterComponent={DateFormatter}
		{...props}
	/>
);

class Console extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			columns: [
				{name: 'title', title: 'Title'},
				{name: 'date', title: 'Date'},
				{name: 'tags', title: 'Tags'},
				{name: 'category', title: 'Category'},
				// {name: 'content', title: 'Content'},
				// {name: 'latestPosts', title: 'Latest Posts'},
				// {name: 'comments', title: 'Comments'},
				{name: 'url', title: 'Url'},
				{name: 'image', title: 'Image'},
				{name: 'description', title: 'Description'},
				{name: 'editPage', title: 'Edit Page'}
			],
			rows: [],
			tableColumnExtensions: [
			],
			sorting: [],
			editingRowIds: [],
			addedRows: [],
			rowChanges: {},
			currentPage: 0,
			deletingRows: [],
			pageSize: 0,
			pageSizes: [5, 10, 0],
			columnOrder: ['title', 'date', 'tags', 'category', 'latestPosts', 'comments', 'content', 'editPage'],
			dateColumns: ['date']
		};
		this.changeSorting = sorting => this.setState({ sorting });
		this.changeEditingRowIds = editingRowIds => this.setState({ editingRowIds });
		this.changeAddedRows = addedRows => this.setState({
			addedRows: addedRows.map(row => (Object.keys(row).length ? row : {
				title: "Temp Title",
				tags: "Temp Tags",
				date: new Date().toISOString().split('T')[0],
				latestPosts: "Temp latest posts",
				comments: "Temp comment",
				content: "Temp content",
			})),
		});
		this.changeRowChanges = rowChanges => this.setState({ rowChanges });
		this.changeCurrentPage = currentPage => this.setState({ currentPage });
		this.changePageSize = pageSize => this.setState({ pageSize });
		this.commitChanges = this.commitChanges.bind(this);
		this.cancelDelete = () => this.setState({ deletingRows: [] });
		this.deleteRows = this.deleteRows.bind(this);
		this.changeColumnOrder = (order) => {
			this.setState({ columnOrder: order });
		};
		this.logout = this.logout.bind(this);

		// this.addExampleData();
	}

	async deleteRows(){
		const rows = this.state.rows.slice();
		this.state.deletingRows.forEach((rowId) => {
			const index = rows.findIndex(row => row._id === rowId);
			if (index > -1) {
				rows.splice(index, 1);
			}
		});
		if(this.state.deletingRows.length > 0) {
			let result = await fetch('/api/posts/' + this.state.deletingRows[0], {method: 'DELETE'});
			if (result && result.status == 200) {
				let json = await result.json();
				console.log("Successfully delete post")
			} else {
				console.log("Failed to delete row: " + this.state.deletingRows[0]);
			}
		}
		this.setState({ rows, deletingRows: [] });
	};

	async commitChanges(commitData){
		let { rows } = this.state;
		const { added, changed, deleted } = commitData;
		if (added) {
			const startingAddedId = await this.commitNewRow(added);
			rows = [
				...rows,
				...added.map((row) => ({
					id: startingAddedId._id,
					...row,
				})),
			];
		}
		if (changed) {
			rows = rows.map(row => (changed[row._id] ? { ...row, ...changed[row._id] } : row));
			this.commitExistingRow(changed);
		}
		this.setState({ rows, deletingRows: deleted || this.state.deletingRows });
	}

	async commitNewRow(added){
		try{
			const result = await axios.post('/api/posts/newPost', added);
			if (result && result.status === 200){
				return result.data;
			} else{
				console.log("ERROR!");
			}
		} catch(err){
			console.log("ERROR!!!");
		}
	}

	async commitExistingRow(changed){
		try{
			const result = await axios.post('/api/posts/updatePost', changed);
			if (result && result.status === 200){
				return result.data;
			} else{
				console.log("ERROR!");
			}
		} catch(err){
			console.log("ERROR!!!");
		}
	}

	async componentWillMount(){
		await this.setRowsData();
	}

	static async addExampleData(){
		let postData = {
			title: "Test Tile2",
			tags: "drums, bla, dada",
			comments: "Test Comment2",
			latestPosts: "Test Latest Posts2",
			content: "Test Content2",
		};
		let bla = await fetch('/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		});
		let blaJson = await bla.json();
		console.log(bla);
		console.log(blaJson);
	}

	async setRowsData(){
		try {
			await axios.get('/api/auth/isAuthorized');
			const posts = await axios.get('/api/posts');
			this.setState({rows: posts.data});
			this.populateLinkColumn();
		} catch(error) {
			if(error.response.status === 401)
				this.props.history.push("/login");
		}
	}

	populateLinkColumn(){
		let linkCells = $(`tbody td:nth-child(${this.state.columns.length + 1})`);
		for (let i = 0; i < linkCells.length; i++) {
			let cell = linkCells[i];
			const href = "/postConsole/" + this.state.rows[i]._id;
			const linkElem = "<a href='" + href + "'>Post Console</a>";
			$(cell).append(linkElem);
		}
	}

	logout(){
		localStorage.removeItem('jwtToken');
		this.props.history.push('/');
	}

	render() {
		const {classes} = this.props;
		const {
			rows,
			columns,
			tableColumnExtensions,
			sorting,
			editingRowIds,
			addedRows,
			rowChanges,
			currentPage,
			deletingRows,
			pageSize,
			pageSizes,
			columnOrder,
			dateColumns
		} = this.state;
		return (
			<Paper>
				<Grid
					rows={rows}
					columns={columns}
					getRowId={getRowId}
				>
					<SortingState
						sorting={sorting}
						onSortingChange={this.changeSorting}
					/>
					<PagingState
						currentPage={currentPage}
						onCurrentPageChange={this.changeCurrentPage}
						pageSize={pageSize}
						onPageSizeChange={this.changePageSize}
					/>

					<IntegratedSorting />
					<IntegratedPaging />

					<EditingState
						editingRowIds={editingRowIds}
						onEditingRowIdsChange={this.changeEditingRowIds}
						rowChanges={rowChanges}
						onRowChangesChange={this.changeRowChanges}
						addedRows={addedRows}
						onAddedRowsChange={this.changeAddedRows}
						onCommitChanges={this.commitChanges}
					/>

					<DragDropProvider />

					<DateTypeProvider
						for={dateColumns}
					/>

					<Table
						columnExtensions={tableColumnExtensions}
						cellComponent={Cell}
					/>

					<TableColumnReordering
						order={columnOrder}
						onOrderChange={this.changeColumnOrder}
					/>

					<TableHeaderRow showSortingControls />
					<TableEditRow
						cellComponent={EditCell}
					/>
					<TableEditColumn
						width={120}
						showAddCommand={!addedRows.length}
						showEditCommand
						showDeleteCommand
						commandComponent={Command}
					/>
					<PagingPanel
						pageSizes={pageSizes}
					/>
				</Grid>

				<Dialog
					open={!!deletingRows.length}
					onClose={this.cancelDelete}
					classes={{ paper: classes.dialog }}
				>
					<DialogTitle>Delete Row</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Are you sure to delete the following row?
						</DialogContentText>
						<Paper>
							<Grid
								rows={rows.filter(row => deletingRows.indexOf(row._id) > -1)}
								columns={columns}
							>
								<Table
									columnExtensions={tableColumnExtensions}
									cellComponent={Cell}
								/>
								<TableHeaderRow />
							</Grid>
						</Paper>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.cancelDelete} color="primary">Cancel</Button>
						<Button onClick={this.deleteRows} color="secondary">Delete</Button>
					</DialogActions>
				</Dialog>
				<div className="btn" onClick={this.logout}>Log Out</div>
			</Paper>
		);
	}
}

Console.propTypes = {};

export default withStyles(styles, { name: 'Console' })(Console);
