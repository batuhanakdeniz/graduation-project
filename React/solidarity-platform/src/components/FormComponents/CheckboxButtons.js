import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export default function CheckboxButtons(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest} >
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                        type='checkbox'
                                        id={option.value}
                                        {...field}
                                        key={option.value}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

