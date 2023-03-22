import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Input from './Input';
import Select from './Select';
import Errors from './Errors';
import { roles, languages, countries, initialValues } from './Constants'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from './Firebase'
import SignUpError from './SignUpError';
import { useRouter } from 'next/router';


export default function SignUpForm() {
    const [errorMsgs, setErrorMsgs] = useState([]);

    const [diffErrorMsg, setDiffErrorMsg] = useState(false);

    const [signupError, setSignupError] = useState("");

    const router = useRouter()

    const signupSchema = Yup.object().shape({
        firstName: Yup.string().min(1, 'Should Not be Empty').max(40, 'First name is too long (maximum is 40 characters)').required('First name'),
        lastName: Yup.string().max(40, 'Last name is too long (maximum is 40 characters)').required('Last name'),
        email: Yup.string().email('Invalid email address').required('E-mail'),
        companyName: Yup.string().min(1, 'Should Not be Empty'),
        role: Yup.string().required('Role'),
        location: Yup.string().required('Country/Region'),
        dev_language: Yup.string().required('Primary development language'),
        password: Yup.string().required('Password')
            .min(6, 'Password must have at least 6 characters')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol'),
    });



    const onSubmit = (values, action) => {
        setErrorMsgs([]);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {                
                action.setSubmitting(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: `${values.firstName} ${values.lastName}`
                })
                router.push("/home")
            })
            .catch((err) => {
                console.log(err)
                setSignupError(err.message)
                action.setSubmitting(false);
            })
    }



    return (

        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={signupSchema}
        >
            {(formik) => {
                const handleError = () => {
                    setErrorMsgs([])
                    const { firstName, lastName, email, role, location, dev_language, password } = formik.errors;
                    const len = Object.keys(formik.errors).length === 0;
                    console.log(errorMsgs)

                    setDiffErrorMsg(false)
                    if (firstName === "First name" || len) setErrorMsgs((err) => [...err, "First name"]);
                    if (lastName === "Last name" || len) setErrorMsgs((err) => [...err, "Last name"]);
                    if (email === "E-mail" || len) setErrorMsgs((err) => [...err, "E-mail"]);
                    if (role === "Role" || len) setErrorMsgs((err) => [...err, "Role"]);
                    if (location === "Country/Region" || len) setErrorMsgs((err) => [...err, 'Country/Region']);
                    if (dev_language === "Primary development language" || len) setErrorMsgs((err) => [...err, "Primary development language"]);
                    if (password === "Password" || len) setErrorMsgs((err) => [...err, "Password"]);
                    console.log(errorMsgs)


                    if (firstName == "First name is too long (maximum is 40 characters)" && errorMsgs.length != 0) {
                        setErrorMsgs((err) => [firstName]);
                        setDiffErrorMsg(true);
                        return;
                    }

                    if (lastName == "Last name is too long (maximum is 40 characters)" && errorMsgs.length != 0) {
                        setErrorMsgs((err) => [lastName]);
                        setDiffErrorMsg(true);
                        return;
                    }

                    if (password != undefined && password != "Password" && Object.keys(formik.errors).length == 1) {
                        setErrorMsgs((err) => [password]);
                        setDiffErrorMsg(true);
                        return;
                    }

                }

                return (
                    <div className='lg:float flex flex-col lg:mt-[-3px] lg:mr-[-30px]' >
                        {errorMsgs.length == 0 ? <div></div> : <Errors isAllFilled={diffErrorMsg} errorMessages={errorMsgs} />}
                        {signupError && <SignUpError signupError={signupError} />}
                        <div className="bg-white p-4 lg:p-[30px] m-[-20px] mt-[-5px] lg:m-0 rounded-md custom_shadow lg lg:w-[362px] ">

                            <Form >
                                <Input type="text" name="firstName" label='First name' placeholder="First name" isRequired={true} />
                                <Input type="text" name="lastName" label='Last name' placeholder="Last name" isRequired={true} />
                                <Input type="email" name="email" label='Email Address' placeholder="Email Address" isRequired={true} />
                                <Input type="text" name="companyName" label='Company name' placeholder="Company name" isRequired={false} />
                                <Select options={roles} name="role" label="Role" isRequired={true} placeholder='Role' />
                                <Select options={countries} name="location" label="Country/Region" isRequired={true} placeholder="Country/Region" />
                                <Select options={languages} name="dev_language" label="Primary development language" isRequired={true} placeholder="Select a language" />
                                <Input type="password" name="password" label='Password' placeholder="Password" isRequired={true} />
                                <button className="bg-[#1869CB] font-input w-full border-[1px] rounded-[4px] hover:bg-[#0650aa] text-center text-white p-4 mt-1 mb-4 font-bold cursor-pointer text-[13px]" type="submit" onClick={handleError} disabled={formik.isSubmitting} >{formik.isSubmitting ? "SENDING..." : "CREATE AN ACCOUNT"}</button>
                            </Form>
                            <div className="text-[13px] font-sans text-text_color leading-[1.5] antialiased">
                                <p>
                                    Signing up signifies that you have read and agree to the <a className="text-[#1869CB] underline" href="https://www.heroku.com/policy" >Terms of Service</a> and our &nbsp;
                                    <a className="text-[#1869CB] underline" href="https://www.salesforce.com/company/privacy/" >Privacy Policy</a>.
                                </p>
                                <a className="text-[#1869CB] underline" href="https://www.heroku.com/#" >Cookie Preferances</a>
                            </div>
                        </div>
                    </div>
                )
            }
            }
        </Formik>
    )
}
