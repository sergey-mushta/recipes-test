import React from 'react';
import Alert from "react-bootstrap/Alert";
import {connect} from "react-redux";

export default connect((state) => ({ errorGlobalMsg: state.errorGlobalMsg}),null)(({ errorGlobalMsg }) => (
    <Alert variant="danger">
        Something gone wrong: {errorGlobalMsg}
    </Alert>
));