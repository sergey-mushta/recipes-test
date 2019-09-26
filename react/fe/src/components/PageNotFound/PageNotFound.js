import React from 'react';
import Alert from "react-bootstrap/Alert";
import Breadcrumbs from "../Breadcrumbs";

export default (props) => (
    <>
        <Breadcrumbs {...props.match} />
        <Alert variant="danger">
            Page not found!
        </Alert>
    </>
);