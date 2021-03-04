import React from 'react'
import { Field } from 'formik'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Checkbox,
    CheckboxGroup,
    Stack
} from '@chakra-ui/react'


function ChakraCheckbox(props) {
    const { label, name, options, ...rest } = props
    return (
        <Field name={name}>
            {
                ({ field, form }) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name} >{label}</FormLabel>
                        <CheckboxGroup id={name} {...rest} >
                            <Stack spacing={20} direction="row">
                                {
                                    options.map(option => {
                                        return (
                                            <Checkbox
                                                id={option.value}
                                                key={option.value}
                                                {...field}
                                                value={option.value}
                                                colorScheme={option.color}
                                            >
                                                {option.key}
                                            </Checkbox>
                                        )
                                    })
                                }
                            </Stack>
                        </CheckboxGroup>
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                }
            }
        </Field >
    )
}

export default ChakraCheckbox