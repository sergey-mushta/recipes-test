import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {hideModal} from "../../redux/actions/"

class ModalCommon extends Component {
    static defaultProps = {
        show: false,
        isForm: false,
        titleText: '[TITLE]',
        bodyText: '[BODY]',
        closeBtnText: '[CLOSE]',
        confirmBtnText: '[CONFIRM]',
        closeBtnVariant: 'secondary',
        confirmBtnVariant: 'danger',
        closeHandler: (props) => { props.hideModal(); },
        confirmHandler: () => { },
        formSubmitHandler: (e,props) => { e.preventDefault() },
    }

    render() {
        const innerContent = (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.titleText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.bodyText}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={this.props.closeBtnVariant} onClick={() => this.props.closeHandler(this.props)}>
                        {this.props.closeBtnText}
                    </Button>
                    { this.props.confirmBtnText !== '' &&
                        <Button variant={this.props.confirmBtnVariant}
                                onClick={() => this.props.confirmHandler(this.props)}
                                type={this.props.isForm ? 'submit' : 'button'}>
                            {this.props.confirmBtnText}
                        </Button>
                    }
                </Modal.Footer>
            </>
        );

        return (
            <Modal
                   show={this.props.show}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   onHide={() => this.props.closeHandler(this.props)}>
                {this.props.isForm ?
                    <form onSubmit={(e) => this.props.formSubmitHandler(e, this.props)}>{innerContent}</form>
                :
                    innerContent
                }
            </Modal>
        );
    }
}

export default connect((state) => ({ ...state.modalData, currentFormValues: state.currentFormValues }),{ hideModal })(ModalCommon)
