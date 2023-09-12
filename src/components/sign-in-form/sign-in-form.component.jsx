import { useState } from "react";

import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/fitebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ButtonContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert('Incorect password');
                    break;
                case "auth/user-not-found":
                    alert('Incorect email');
                    break;
                default:
                    console.log(error);
            }
        }
    }



    const handleChange = e => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label={"Password"}
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <ButtonContainer>
                    <Button type="submit">Sign in</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Google sign in</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;