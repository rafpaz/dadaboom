import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import PostContent from '../Post/PostContent';
import EditorContainer from './EditorContainer';
import 'react-toastify/dist/ReactToastify.min.css';
import { PCButton, PCSection } from './postConsoleStyle';


class PostConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: null,
    };
    this.onContentChange = this.onContentChange.bind(this);
    this.onUpdateClicked = this.onUpdateClicked.bind(this);
  }

  async componentDidMount() {
    const postData = await this.getPostData();
    this.setState({
      postData: postData.data || {},
    });
  }

  onContentChange(data) {
    const { postData } = this.state;
    this.setState({
      postData: { ...postData, content: data },
    });
  }

  async onUpdateClicked() {
    try {
      const updateObj = {};
      const { postData } = this.state;
      updateObj[postData._id] = { content: postData.content };
      const result = await axios.post('/api/posts/updatePost', updateObj);
      toast(`${result && result.status === 200 ? 'Success' : 'Error'}`);
    } catch (err) {
      toast('Error');
    }
  }

  async getPostData() {
    try {
      await axios.get('/api/auth/isAuthorized');
      const { match } = this.props;
      return await axios.get(`/api/posts/${match.params.id}`);
    } catch (error) {
      const { history } = this.props;
      if (error.response.status === 401) history.push('/login');
      return null;
    }
  }

  render() {
    const { postData } = this.state;
    return (
      postData && (
      <div>
        <PCSection>
          <PCButton
            type="button"
            className="btn btn-info pc-btn"
            onClick={() => { window.location = '/console'; }}
          >
         Back To Console
          </PCButton>
          <div className="pc-editor-area">
            <EditorContainer
              initialValue={postData.content}
              onContentChange={this.onContentChange}
            />
          </div>
          <PCButton
            type="button"
            className="btn btn-info pc-btn"
            onClick={this.onUpdateClicked}
          >
         Update
          </PCButton>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
        </PCSection>
        <PCSection>
          <PostContent
            _id={postData._id}
            date={postData.date}
            content={postData.content}
            title={postData.title}
            isAdmin
          />
        </PCSection>
      </div>
      ));
  }
}

export default PostConsole;
