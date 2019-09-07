import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {hideModal} from "../../redux/actions/"


class ModalCommon extends Component {

    static defaultProps = {
        titleText: '[TITLE]',
        bodyText: '[BODY]',
        closeBtnText: '[CLOSE]',
        confirmBtnText: '[CONFIRM]',
        closeBtnVariant: 'secondary',
        confirmBtnVariant: 'danger',
        closeHandler: (props) => { props.hideModal(); },
        confirmHandler: (props) => { props.hideModal(); },
    }

    render() {
        return (
            <Modal
                   show={this.props.show}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   onHide={() => this.props.closeHandler(this.props)}>
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
                    <Button variant={this.props.confirmBtnVariant} onClick={() => this.props.confirmHandler(this.props)}>
                        {this.props.confirmBtnText}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({ ...state.modalData });
const mapDispatchToProps = { hideModal: hideModal };

ModalCommon = connect(mapStateToProps,mapDispatchToProps)(ModalCommon);
export default ModalCommon;
