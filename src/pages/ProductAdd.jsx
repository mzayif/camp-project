import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, FormField, Label } from 'semantic-ui-react';
import MzTextInput from '../utilities/customFromControls/MzTextInput';

export default function ProductAdd() {

    const initialValues = { productName: "", unitePrice: 10 };
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorumludur."),
        unitePrice: Yup.number().required("Ürün adeti zorunludur.")
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}

                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form className="ui form" >
                    <MzTextInput name="productName" placeholder="Ürün adı" />
                    <MzTextInput name="unitePrice" placeholder="Ürün fiyatı" />
                    <Button color="green" type="submit" > Kaydet </Button>
                </Form>
            </Formik>
        </div>
    )
}
