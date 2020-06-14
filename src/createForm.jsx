import React from 'react'
import RenderCustomComponent from './renderElements/render-component'
import axios from 'axios'
import InputText from "./elements/inputText"
import TextArea from './elements/textArea'
import CheckBox from './elements/checkBox'
import DropDown from './elements/dropDown'
import DateTime from './elements/dateTime'

export const renderEnum = {
    default: 0,
    textBox: 1,
    checkBox: 2,
    textArea: 3,
    dropDown: 4,
    multiCheckBox: 5,
    dateTime: 6
}

class Create extends React.Component {
    constructor(props) {
        super(props)
        this.formName = React.createRef()
        this.formDesc = React.createRef()
        this.editElementIndex = null
        this.state = {
            elements: [],
            render: renderEnum.default
        }
    }

    pushElement = (ele) => {
        if (ele.index === this.state.elements.length) {
            this.setState({
                render: renderEnum.default,
                elements: this.state.elements.concat(ele)
            })
        }
        else {
            let temp = this.state.elements.slice()
            temp[ele.index] = ele
            this.setState({
                render: renderEnum.default,
                elements: temp
            })
        }
    }

    editElement = (element, index) => {
        this.editElementIndex = index
        this.setState({
            render: element.typeId
        })
    }

    removeElement = (index) => {
        let temp = this.state.elements.slice()
        temp.splice(index, 1)
        this.setState({
            elements: temp
        })
    }

    handleSubmit = () => {
        if (this.formName.current.value === "") {
            alert("form name is required")
            return
        }
        else if (this.formDesc.current.value === "") {
            alert("form description is required")
            return
        }
        else if (this.state.elements.length === 0) {
            alert("form should have atleast 1 feild")
            return
        }
        // const url = "http://localhost:3001/" + this.props.userId
        const url = "http://localhost:3001/101204339514709441887/"
        axios.post(url, {
            formName: this.formName.current.value,
            formDesc: this.formDesc.current.value,
            formData: this.state.elements
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                // alert("success")
                this.formName.current.value = ""
                this.formDesc.current.value = ""
                this.setState({
                    elements: [],
                    render: renderEnum.default
                })
            }
        })
    }

    render() {
        let inputFeildElement
        const props = (this.editElementIndex === null
            ? {
                handleSubmit: this.pushElement,
                index: this.state.elements.length,
                typeId: this.state.render
            }
            : {
                handleSubmit: this.pushElement,
                ...this.state.elements[this.editElementIndex],
                index: this.editElementIndex,
                typeId: this.state.render
            })
        switch (this.state.render) {
            case renderEnum.default:
                break
            case renderEnum.textBox:
                inputFeildElement = <InputText {...props} />
                break
            case renderEnum.checkBox:
                inputFeildElement = <CheckBox {...props} />
                break
            case renderEnum.textArea:
                inputFeildElement = <TextArea {...props} />
                break
            case renderEnum.dropDown:
                inputFeildElement = <DropDown {...props} />
                break
            case renderEnum.multiCheckBox:
                inputFeildElement = <h1>multiCheckBox</h1>
                break
            case renderEnum.dateTime:
                inputFeildElement = <DateTime {...props} />
                break
            default:
                // alert("default")
                break
        }
        this.editElementIndex = null
        return (
            <div>
                <div className="col-sm-3 h-100">
                    <div className="btn-group">
                        {/* <button onClick={() => { this.setState({ render: renderEnum.textBox }) }} className="btn btn-primary col-sm-12">TEXT BOX</button><br />
                        <button onClick={() => { this.setState({ render: renderEnum.textArea }) }} className="btn btn-primary col-sm-12">TEXT AREA</button><br />
                        <button onClick={() => { this.setState({ render: renderEnum.checkBox }) }} className="btn btn-primary col-sm-12">CHECK BOX</button><br />
                        <button onClick={() => { this.setState({ render: renderEnum.multiCheckBox }) }} className="btn btn-primary col-sm-12">MULTI CHECK BOX</button><br />
                        <button onClick={() => { this.setState({ render: renderEnum.dropDown }) }} className="btn btn-primary col-sm-12">DROP DOWN</button><br />
                        <button onClick={() => { this.setState({ render: renderEnum.dateTime }) }} className="btn btn-primary col-sm-12">DATE TIME</button> */}
                        {Object.keys(renderEnum).map(element =>
                            element !== "default" &&
                            <button onClick={() => {
                                this.setState({
                                    render: renderEnum[element]
                                })
                            }} className="btn btn-primary col-sm-12">{element.replace(/([A-Z])/g, ' $1').toUpperCase()}</button>
                        )}
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <label >Form name - </label>
                        <input type="text" ref={this.formName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label >Form description - </label>
                        <textarea ref={this.formDesc} className="form-control" />
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-success" >Save Form</button>
                </div>
                <div className="col-sm-3 h-100">
                    {inputFeildElement}
                </div>
                <div className="col-sm-3 h-100">
                    {this.state.elements.length !== 0 ?
                        <form >
                            <h2>Your Form</h2>
                            {this.state.elements.map((element, index) => {
                                return (<div key={index}>
                                    <RenderCustomComponent data={element} />
                                    <button className="btn btn-primary" onClick={() => { this.editElement(element, index) }} type="button">EDIT</button>
                                    <button className="btn btn-danger" onClick={() => { this.removeElement(index) }} type="button">DELETE</button>
                                </div>)
                            })}
                            <br />
                            <input type="submit" className="btn btn-success" onClick={(e) => { e.preventDefault() }} />
                        </form>
                        : <h3>form is empty</h3>}
                </div>
            </div>
        )
    }
}

export default Create