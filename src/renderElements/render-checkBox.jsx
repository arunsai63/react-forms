import React from 'react'

class RenderCheckBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // value: this.props.value
        }
    }

    render() {
        return (
            <div className="checkbox">
                <label><input type="checkbox"
                    defaultChecked={this.props.data.isRequired}
                    checked={this.props.value}
                    onChange={this.props.onChange} />{this.props.data.textboxName}</label>
            </div>
        )
    }
}

export default RenderCheckBox