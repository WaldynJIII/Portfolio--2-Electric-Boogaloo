
import React, { Component } from 'react';
import { connect } from 'react-redux';



import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';


class AdminForm extends Component {
    state = {
        formDatat: {
            title: '',
            description: '',
            thumbnail: '',
            github: '',
            website: '',
            date: '',

        }
    }


handleChangeFor()


    render() {
        return (
            <div>
                <form onSubmit={this.addCustomer}>
                    <input onChange={this.changeThumbnail} type="text" placeholder="thumbnail" />
                    <input onChange={this.changeName} type="text" placeholder="title" />
                    <input onChange={this.changeWebsite} type="text" placeholder="website" />
                    <input onChange={this.changeGithub} type="text" placeholder="github" />
                    <input onChange={this.changeDate_completed} type="date" placeholder="date" /> <br />
                    <input onChange={this.changeDescription} type="text" placeholder="Description" /> <br></br>




                    <select onClick={this.tagChange} className="category">
                        <option />
                        <option onClick={this.tagChange} value="1">React</option>
                        <option value="2">jQuery</option>
                        <option value="3">SQL</option>
                        <option value="4">HTML</option>
                        <option value="5">ReduX</option>
                        <option value="6">Node</option>

                    </select>






                    <input onClick={this.yeetProject} type="submit" value="Next" />

                </form>
                <table className="admin-table">

                    <tbody>
                        {this.props.reduxStore.projects.map((project, i) => {
                            return (
                                <tr>
                                    <td>{project.id} {project.name}</td><td>{project.date_completed}</td><td>{project.tag_id}</td><button value={project.id} onClick={this.removeFromList}>Remove From List</button><td></td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(AdminForm);