import React from 'react'

class RenderDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // options: this.props.data.options,
            // value: this.props.data.options[0]
        }
    }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.data.textboxName}</label>
                <select className="form-control"
                    required={this.props.data.isRequired}>
                    {this.props.data.options.map(element =>
                        <option value={element}>{element}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default RenderDropDown