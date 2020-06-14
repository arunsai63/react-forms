import React from 'react'

class InputText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textboxName: this.props.textboxName,
            minLength: this.props.minLength,
            maxLength: this.props.maxLength,
            isRequired: this.props.isRequired,
            inputType: this.props.inputType === undefined ? "text" : this.props.inputType,
            regex: this.props.regex
        }
    }

    handleSubmit = (event) => {
        // console.log(JSON.stringify(this.state))
        event.preventDefault()
        if (event.target.textboxName.value === "") {
            alert("textbox name is required")
            return
        }
        this.props.handleSubmit({
            type: "text-box",
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
                <h2>Text Box</h2>
                <div className="form-group">
                    <label>textbox name</label>
                    <input type="text" name="textboxName" className="form-control" value={this.state.textboxName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>textbox type</label>
                    <select name="inputType" value={this.state.inputType} onChange={this.handleChange} className="form-control">
                        <option value="text" default>text</option>
                        <option value="number">number</option>
                        <option value="email">email</option>
                        <option value="regex">regex</option>
                    </select>
                </div>
                {this.state.inputType === "regex" &&
                    <div className="form-group">
                        <label>regex</label>
                        <input type="text" name="regex" className="form-control" value={this.state.regex} onChange={this.handleChange} />
                    </div>}
                {(this.state.inputType === "text" || this.state.inputType === "number") &&
                    <div className="form-group">
                        <label>min length </label>
                        <input name="minLength" type="number" className="form-control" value={this.state.minLength} onChange={this.handleChange} />
                    </div>}
                {(this.state.inputType === "text" || this.state.inputType === "number") &&
                    <div className="form-group">
                        <label>max length </label>
                        <input name="maxLength" type="number" className="form-control" value={this.state.maxLength} onChange={this.handleChange} />
                    </div>}
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

export default InputText