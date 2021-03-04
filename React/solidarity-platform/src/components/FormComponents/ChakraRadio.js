import React from 'react'
import { Field } from 'formik'
import {
    Radio,
    FormControl,
    FormLabel,
    FormErrorMessage,
    RadioGroup
} from '@chakra-ui/react'


function ChakraRadio(props) {
    const { label, name, options, ...rest } = props
    const [value, setValue] = React.useState("")
    return (
        <Field name={name}>
            {
                ({ field, form }) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name} >{label}</FormLabel>
                        <RadioGroup onChange={setValue(value)} value={value} id={name} {...rest} {...field}>
                            {
                                options.map(option => {
                                    return (
                                        <Radio
                                            id={option.value}
                                            key={option.value}
                                            {...field}
                                            value={option.value}
                                        >
                                            {option.value}
                                        </Radio>
                                    )
                                })
                            }
                        </RadioGroup>
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                }
            }
        </Field >
    )
}

export default ChakraRadio