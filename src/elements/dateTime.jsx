import React from 'react'

class DateTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textboxName: this.props.textboxName,
            minDate: this.props.minDate,
            maxDate: this.props.maxDate,
            isRequired: this.props.isRequired
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.textboxName.value === "") {
            alert("textbox name is required")
            return
        }
        this.props.handleSubmit({
            type: "date-time",
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
                <h2>Date</h2>
                <div className="form-group">
                    <label>label name</label>
                    <input type="text" name="textboxName" className="form-control" value={this.state.textboxName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>min date</label>
                    <input type="date" name="minDate" className="form-control" value={this.state.minDate} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>max date</label>
                    <input type="date" name="maxDate" className="form-control" value={this.state.maxDate} onChange={this.handleChange} />
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

export default DateTime