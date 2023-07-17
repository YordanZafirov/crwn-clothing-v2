import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/fitebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return ( 
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google
            </button>
        </div>
     );
}
 
export default SignIn;