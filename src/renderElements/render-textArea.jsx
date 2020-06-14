import React from 'react'

class RenderTextArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // value: this.props.value
        }
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.data.textboxName}</label>
                <textarea
                    className="form-control" 
                    maxLength={this.props.data.maxLength}
                    required={this.props.data.isRequired}
                    value={this.props.value}
                    onChange={this.props.onChange} />
            </div>
        )
    }
}

export default RenderTextArea