import React from 'react';
import "./LoadingSpinner.css";
import {connect} from "react-redux";

export default connect((state) => ({loading: state.loading}),null)(({ loading }) => (
    loading ?
        <div className="loader">Loading...</div>
        :
        null
));