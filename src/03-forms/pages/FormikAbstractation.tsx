import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyCheckBox, MySelect, MyTextInput } from '../components';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                    lastName: Yup.string().max(10, 'Debe de tener 10 caracteres').required('Requerido'),
                    email: Yup.string().email('debe ser un email valido').required('Requerido'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().required('Requerido').notOneOf(['it-jr'], 'Esta opción no es permitida')
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="Jhon" />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="Doe" />

                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder="Jhon Doe"
                                type="email" />



                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>


                            <MyCheckBox label="Terms & Conditions" name="terms" />


                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}
