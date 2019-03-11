import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
class ProjectList extends Component{


render(){
    if(project.website=''){
        return (<Card className="item-card">

            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={project.description}
                    className="item-img"
                    height="240"
                    image={project.thumbnail}
                    title={project.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                    <Typography component="p">
                        {project.description}
                    </Typography>

                    <Router>
                        <Button>
                            <Link to="route" target="_blank" onClick={(event) => { event.preventDefault(); window.open(this.makeHref(project.website)); }} />
                        </Button>
                    </Router>
                    <Typography component="p">
                        <Router>
                            <Button>
                                {project.github}<a target={project.github}><Link></Link></a>
                            </Button>
                        </Router>
                    </Typography>
                    <Typography component="p">
                        {project.date_completed}
                    </Typography>
                    {project.name}




                </CardContent>
            </CardActionArea>

        </Card>)
    }
}







}