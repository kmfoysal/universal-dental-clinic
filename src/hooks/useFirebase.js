import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../components/Firebase/firebaseInitialization";


firebaseAuthentication();

const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const[isLogin, setIsLogin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const signInWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        // .catch(error =>{
        //     setError(error.message);
        // })
        }

    const logOut = ()=>{
       
        signOut(auth)
        .then(() => {
            setUser({});
          }).catch((error) => {
            setError(error);
          });

    }    

        useEffect(()=>{
            onAuthStateChanged(auth, user=>{
                if(user){
                    setUser(user);
                }
            })
        },[])


        const handleSignUp = event =>{
            console.log(email, password)
            event.preventDefault();
            
            // Password Validation 
        
            if(!/.{8}/.test(password)){
              setError('Password Must Be 8 Character long');
              return;
            }
            else if(!/(?=.*[A-Z])/.test(password)){
              setError('Password Must Be 1 capital letter');
              return;
            }
            else if(!/(?=.*[0-9])/.test(password)){
              setError('Password Must Be 1 digit');
              return;
            }
            else if(!/(?=.*[a-z])/.test(password)){
              setError('Password Must Be 1 lowercase');
              return;
            }
        
            setError('');
        
            ////////////////////////////////
        
            const createNewUser = (email, password)=>{
              createUserWithEmailAndPassword(auth, email, password)
            .then(result =>{
              const user = result.user;
              console.log(user);
              verifyEmail();
            }).catch(error=>{
              setError(error.message);
            })
            }
        
            const loginUser = (email,password)=>{
              signInWithEmailAndPassword(auth, email, password)
              .then(result =>{
                const user = result.user;
                console.log(user);
              }).catch(error=>{
                setError(error.message);
              })
            }
             
            isLogin ? loginUser(email,password):createNewUser(email,password)
        
          }
        
          const handleEmail = e => {
            setEmail(e.target.value);
          }
        
          const handlePassword = e => {
            setpassword(e.target.value);
          }
        
          const toggleLogin = e=>{
            setIsLogin(e.target.checked);
          }
        
          const verifyEmail = ()=>{
            sendEmailVerification(auth.currentUser)
            .then((result)=>{
                console.log(email);
            })
          }
        
          const handleResetPassword = ()=>{
            sendPasswordResetEmail(auth, email)
            .then(()=>{
        
            })
            .catch(error=>{
              setError(error.message)
            })
          }

    return {user, error, signInWithGoogle, logOut,handleSignUp, handleResetPassword, handleEmail,handlePassword,toggleLogin,isLogin }
}

export default useFirebase;