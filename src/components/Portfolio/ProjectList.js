import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Linkify from 'react-linkify'
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
class ProjectList extends Component{


render(){
    if(this.props.project.website=""){
        return (<Card className="item-card">

            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={this.props.project.description}
                    className="item-img"
                    height="240"
                    image={this.props.project.thumbnail}
                    title={this.props.project.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.project.title}
                    </Typography>
                    <Typography component="p">
                        {this.props.project.description}
                    </Typography>

                    <Typography component="p">
                        <Linkify>
                               Github: {this.props.project.github}
                            </Linkify>
                        
                    </Typography>
                    <Typography component="p">
                        {this.props.project.date_completed}
                    </Typography>
                    {this.props.project.name}




                </CardContent>
            </CardActionArea>

        </Card>)
    }
        else{
        return (
            <Card className="item-card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={this.props.project.description}
                        className="item-img"
                        height="240"
                        image={this.props.project.thumbnail}
                        title={this.props.project.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.project.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.project.description}
                        </Typography>

                    <Linkify>
                        Website: {this.props.project.website}
                    </Linkify>

                        <Typography component="p">
                            <Linkify>
                                Github: {this.props.project.github}
                            </Linkify>

                        </Typography>
                        <Typography component="p">
                            {this.props.project.date_completed}
                        </Typography>
                        {this.props.project.name}




                    </CardContent>
                </CardActionArea>

            </Card>)
        
    }
}







}
export default ProjectList