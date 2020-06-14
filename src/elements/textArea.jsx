import React from 'react'

class TextArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textboxName: this.props.textboxName,
            maxLength: this.props.maxLength,
            isRequired: this.props.isRequired
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.textboxName.value === "") {
            alert("textarea name is required")
            return
        }
        this.props.handleSubmit({
            type: "text-area",
            typeId: this.props.typeId,
            index: this.props.index,
            ...this.state
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(event) => { this.handleSubmit(event) }}>
                <h2>Text Area</h2>
                <div className="form-group">
                    <label>text area name</label>
                    <input type="text" name="textboxName" className="form-control" value={this.state.textboxName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>max length </label>
                    <input type="text" name="maxLength" className="form-control" value={this.state.maxLength} onChange={this.handleChange} />
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

export default TextArea