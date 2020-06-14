import React from 'react'
import { renderEnum } from '../createForm'
import RenderInputText from './render-inputText'
import RenderTextArea from './render-textArea'
import RenderCheckBox from './render-checkBox'
import RenderDropDown from './render-dropDown'
import RenderDateTime from './render-dateTime'

function RenderCustomComponent(props) {
    switch (props.data.typeId) {
        case renderEnum.textBox:
            return <RenderInputText data={props.data} value={props.value} onChange={props.onChange} />
        case renderEnum.textArea:
            return <RenderTextArea data={props.data} value={props.value} onChange={props.onChange} />
        case renderEnum.checkBox:
            return <RenderCheckBox data={props.data} value={props.value} onChange={props.onChange} />
        case renderEnum.dropDown:
            return <RenderDropDown data={props.data} value={props.value} onChange={props.onChange} />
        case renderEnum.dateTime:
            return <RenderDateTime data={props.data} value={props.value} onChange={props.onChange} />
        case renderEnum.multiCheckBox:
            return <h2>NULL</h2>
        default:
            return <h2>NULL</h2>
    }
}

export default RenderCustomComponent