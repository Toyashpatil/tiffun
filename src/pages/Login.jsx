import React, { useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid)
        navigate('/')
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  }, [])

  const handleClick = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className='main   overflow-hidden '>
      <div className='h-[100vh] w-[100vw] flex items-center justify-center '>
        <div className=' main_morph bg-yellow-500 h-[20%] rounded-xl w-[50%] flex items-center justify-center '>
          <div className='bg-white p-2 rounded-3xl flex-wrap flex items-center justify-center '>
            <button onClick={handleClick} className='text-xl'>Login</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login