import React from 'react';
import "./LoadingSpinner.css";
import {connect} from "react-redux";

let LoadingSpinner = ({ loading }) => (
    loading ?
        <div className="loader">Loading...</div>
            :
        null
);

const mapStateToProps = (state) => ({loading: state.loading})
LoadingSpinner = connect(mapStateToProps,null)(LoadingSpinner)
export default LoadingSpinner;