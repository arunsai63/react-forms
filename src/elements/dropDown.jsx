import React from 'react'

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textboxName: this.props.textboxName,
            options: this.props.options,
            isRequired: this.props.isRequired
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.textboxName.value === "") {
            alert("label name is required")
            return
        }
        if (this.state.options === undefined) {
            alert("minimum 1 option is required")
            return
        }
        this.props.handleSubmit({
            type: "drop-down",
            typeId: this.props.typeId,
            index: this.props.index,
            ...this.state
        })
    }

    handleChange = (e) => {
        if (e.target.name === "options") {
            this.setState({
                options: e.target.value.split("\n")
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        let value = this.state.options === undefined ? "" : this.state.options.join("\n")
        return (
            <form onSubmit={(event) => { this.handleSubmit(event) }}>
                <h2>DROP DOWN</h2>
                <div className="form-group">
                    <label>label name</label>
                    <input type="text" name="textboxName" className="form-control" value={this.state.textboxName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>enter the options<h6>(each option in a new line)</h6></label>
                    <textarea name="options" className="form-control" value={value} onChange={this.handleChange} />
                </div>
                <div className="checkbox">
                    <label> <input type="checkbox" name="isRequired" checked={this.state.isRequired}
                        onChange={(e) => { this.setState({ isRequired: e.target.checked }) }} /> isRequired </label>
                </div>
                <br />
                <input type="submit" onClick={this.handleClick} value="done" className="btn btn-success" />
                <input type="reset" value="reset" className="btn btn-primary" />
            </form>
        )
    }
}

export default DropDown