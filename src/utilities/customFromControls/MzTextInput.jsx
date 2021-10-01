import React from 'react'
import { FormField, Label } from 'semantic-ui-react';
import { useField } from 'formik'

export default function MzTextInput({ ...props }) {
    //console.log(props)

    const [field, meta] = useField(props);
    //console.log(field)
    
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing bas color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    )
}
