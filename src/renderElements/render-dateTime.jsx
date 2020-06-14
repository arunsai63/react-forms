import React from 'react'

class RenderDateTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // minDate: this.props.minDate,
            // maxDate: this.props.maxDate
        }
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.data.textboxName}</label>
                <input type="date"
                    className="form-control"
                    min={this.props.data.minDate}
                    max={this.props.data.maxDate}
                    required={this.props.data.isRequired}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    />
            </div>
        )
    }
}

export default RenderDateTime