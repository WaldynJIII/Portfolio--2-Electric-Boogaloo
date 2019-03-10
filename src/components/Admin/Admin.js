
import React, { Component } from 'react';
import { connect } from 'react-redux';




class AdminForm extends Component {
    state = {
        formData: {
            title: '',
            description: '',
            thumbnail: '',
            github: '',
            website: '',
            date_completed: '',
            tag_id: '',
        }
    }
    yeetProject = (event) => {
        event.preventDefault()
       
            this.props.dispatch({ type: 'YEET_PROJECT', payload: this.state.formData });
    }

handleChangeFor=(key)=>(event)=>{
    this.setState({
        ...this.state,
        formData: {...this.state.formData,
        [key]: event.target.value,
    }
    })
}
removeFromList=(event)=>{
this.props.dispatch({type: 'REMOVE', payload: event.target.value})
}

    render() {
        console.log(this.state.formData)
        return (
            <div>
                <form onSubmit={this.yeetProject}>
                    <input onChange={this.handleChangeFor('thumbnail')} type="text" placeholder="thumbnail" />
                    <input onChange={this.handleChangeFor('title')} type="text" placeholder="title" />
                    <input onChange={this.handleChangeFor('website')} type="text" placeholder="website" />
                    <input onChange={this.handleChangeFor('github')} type="text" placeholder="github" />
                    <input onChange={this.handleChangeFor('date_completed')} type="date" placeholder="date" /> <br />
                    <input onChange={this.handleChangeFor('description')} type="text" placeholder="Description" /> <br></br>



                    <div onChange={this.handleChangeFor('tag_id')}>
                    <div>
                    <label>
                        <input
                            type="radio"
                            value='1'
                            name="React"
                        />
                        React
                </label>
                        </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value='2'
                            name="jQuery"
                        />
                        jQuery
                </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value='3'
                            name="Node"
                        />
                        Node
                </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value='4'
                            name="SQL"
                        />
                        SQL
                </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value='5'
                            name="Redux"
                        />
                        Redux
                </label>
                </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value='6'
                                name="HTML"
                            />
                            HTML
                </label>
                    </div>
                    </div>

            

               






                    <input  type="submit" value="Next" />

                </form>
                <table className="admin-table">

                    <tbody>
                        {this.props.reduxStore.projects.map((project, i) => {
                            return (
                                <tr>
                                    <td value={project.id}>{project.id} {project.title}</td><td>{project.date_completed}</td><td>{project.name}</td><button value={project.id} onClick={this.removeFromList}>Remove From List</button><td></td>
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