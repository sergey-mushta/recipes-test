import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class ModalCommon extends Component {

    static defaultProps = { }


    render() {
        const handleClose = () => {

        }


        return (
            <Modal {...this.props}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalCommon;
