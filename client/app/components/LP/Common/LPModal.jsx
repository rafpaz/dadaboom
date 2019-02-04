import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const StyledP = styled.p`
  text-align: center;
  direction: rtl;
  font-size: 1.5rem;
`;

class LPModal extends Component {
  state = {
    showModal: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({ showModal: newProps.showModal });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <Modal id="lp-modal" show={showModal} onHide={this.handleClose}>
        <Modal.Body>
          <StyledP>הטופס נשלח בהצלחה!</StyledP>
          <StyledP>הנכם מועברים לאתר שלי...</StyledP>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LPModal;
