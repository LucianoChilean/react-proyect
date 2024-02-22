import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik components</h1>

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
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field as="select" name="jobType" >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />


                            <label >
                                <Field type="checkbox" name="terms" />
                                Terms and conditions</label>
                            <ErrorMessage name="terms" component="span" />


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
