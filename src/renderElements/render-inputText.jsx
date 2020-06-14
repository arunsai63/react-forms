import React from 'react'

class RenderInputText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // regex: this.props.regex
        }
    }

    // checkRegex(text) {
    //     return new RegExp(this.state.regex).test(text)
    // }

    render() {
        return (
            <div className="form-group">
                <label>{this.props.data.textboxName}</label>
                <input type={this.props.data.inputType !== "regex" ? this.props.data.inputType : "text"}
                    className="form-control"
                    minLength={this.props.data.inputType === "text" && this.props.data.minLength}
                    maxLength={this.props.data.inputType === "text" && this.props.data.maxLength}
                    min={this.props.data.inputType === "number" && this.props.data.minLength}
                    max={this.props.data.inputType === "number" && this.props.data.maxLength}
                    required={this.props.data.isRequired}
                    pattern={this.props.data.regex}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default RenderInputText