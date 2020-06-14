import React from 'react'
import axios from 'axios'
import Create from "./createForm"
import RenderCustomComponent from './renderElements/render-component'
import GoogleLogout from 'react-google-login'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: this.props.userData,
            data: [],
            render_home: false,
            form_data: {},
            active_item: null
        }
    }

    componentDidMount() {
        // const url = "http://localhost:3001/" + this.state.userData.googleId
        const url = "http://localhost:3001/101204339514709441887/"
        axios.get(url).then((res) => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        const Navbar = (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="." onClick={(event) => {
                            event.preventDefault()
                            this.setState({
                                render_home: true,
                                form_data: {},
                                active_item: null
                            })
                        }}>Home</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="." onClick={(event) => {
                            event.preventDefault()
                            this.setState({
                                render_home: false
                            })
                        }}>Create Form</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="." onClick={() => { this.props.logout() }}><span className="glyphicon glyphicon-log-in"></span>
                            <GoogleLogout
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={() => {
                                    // alert("logout")
                                }} /></a>
                        </li>
                    </ul>
                </div>
            </nav>)

        const Forms = (this.state.render_home ?
            <div>
                <div className="list-group col-sm-2">
                    {this.state.data.map((ele, index) =>
                        <a href="." key={index}
                            className={this.state.active_item === index ? "list-group-item active" : "list-group-item"}
                            onClick={(e) => {
                                e.preventDefault()
                                this.setState({
                                    form_data: ele,
                                    active_item: index
                                })
                            }}>{ele["formName"]}</a>
                    )}
                </div>
                {Object.keys(this.state.form_data).length !== 0 &&
                    <div className="col-sm-8 jumbotron">
                        <h2 >{this.state.form_data["formName"]}</h2>
                        <div>{this.state.form_data["formDesc"]}</div>
                        <form>
                            {this.state.form_data["formData"].map(ele => <RenderCustomComponent data={ele} />)}
                            <input type="submit" value="submit" className="btn btn-success" />
                        </form>
                    </div>}
            </div>
            : <Create userId={this.state.userData.googleId} />)

        return (
            <div>
                {Navbar}
                {Forms}
            </div>
        )
    }
}

export default Home