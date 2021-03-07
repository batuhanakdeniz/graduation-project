import React from 'react'
import ChakraInput from './ChakraInput'
import ChakraRadio from './ChakraRadio'
import ChakraSelect from './ChakraSelect'
import ChakraTextArea from './ChakraTextArea'
import CheckboxButtons from './CheckboxButtons'
import ChakraCheckbox from './ChakraCheckbox'
import DatePicker from './DatePicker'
import Input from './Input'
import RadioButtons from './RadioButtons'
import Select from './Select'
import TextArea from './TextArea'

export default function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input  {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxButtons {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        case 'chakrainput':
            return <ChakraInput {...rest} />
        case 'chakraselect':
            return <ChakraSelect {...rest} />
        case 'chakratextarea':
            return <ChakraTextArea {...rest} />
        case 'chakraradio':
            return <ChakraRadio {...rest} />
        case 'chakracheckbox':
            return <ChakraCheckbox {...rest} />
        default:
            return null
    }
}
