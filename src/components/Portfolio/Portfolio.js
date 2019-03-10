import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

class Portfolio extends Component{



render(){
    return(
        <div></div>
    )
}
}
    const mapReduxStoreToProps = (reduxStore) => ({
        reduxStore: reduxStore
    })
    export default connect(mapReduxStoreToProps)(Portfolio);