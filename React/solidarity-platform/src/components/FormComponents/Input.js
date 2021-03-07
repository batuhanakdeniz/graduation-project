import React from 'react'
import { ErrorMessage, Field } from 'formik'
import './TextError'
import TextError from './TextError'

export default function Input(props) {
    const { label, name, ...rest } = props
    return (
        <div className="form-control">
            <label htmlFor={name} >{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
