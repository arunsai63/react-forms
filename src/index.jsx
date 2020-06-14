import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import GoogleLogin from 'react-google-login'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: true,
            userData: {}
        }
    }

    isSuccess = (res) => {
        // console.log(res)
        this.setState({
            isAuthenticated: true,
            userData: res.profileObj
        })
    }

    isFailed = (res) => {
        console.log(res)
    }

    render() {
        if (!this.state.isAuthenticated) {
            return (<GoogleLogin
                clientId="124887081285-5libqq6e4o97m3el6ha0rub3m1ambg99.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.isSuccess}
                onFailure={this.isFailed}
                cookiePolicy={'single_host_origin'}
            />)
        }
        else {
            return (
                <Home userData={this.state.userData} logout={() => {
                    this.setState({isAuthenticated: false})
                }}/>
            )
        }
    }
}

ReactDOM.render(<Login />, document.getElementById("root"))