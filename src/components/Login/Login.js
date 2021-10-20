import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle, handleSignUp,isLogin,handleEmail,handlePassword,toggleLogin,handleResetPassword,error} = useAuth();

    // For redirect expected page 
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = (event) =>{
        event.preventDefault();
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_url)
        })
    }
    
    return (
        <div className='container py-5'>

        <form className='lg:w-2/4 mx-auto bg-white p-8 rounded-xl shadow-2xl mt-5' onSubmit={handleSignUp}>
          <h2 className='text-4xl font-semibold text-center text-purple-500 mb-8'>Please {isLogin ? 'Login' : "Signup"}</h2>
          <div className="form-floating mb-3"> 
              <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail" placeholder='Please Enter Your Email'/>
              <label htmlFor="floatingInput" className='px-4'>Email address</label>
           </div>
          <div className="form-floating mb-3">
              <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword" placeholder='Please Enter Your Password'/>
              <label htmlFor="floatingPassword" className='px-4'>Password</label>    
          </div>
          <div className='d-flex justify-between items-center mb-4 lg:flex-row flex-col'>
          <div className="form-check me-3">
            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
            <label className="form-check-label" htmlFor="gridCheck1">
              Do you have account ?
            </label>
          </div>
          <Link to="" onClick={handleResetPassword}>{isLogin ? 'Reset Password' : ""}</Link>
          <button type="submit" className='py-3 px-10 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 lg:mt-0 mt-2'>{isLogin ? 'Login':'Signup'}</button>
          </div>
          <div>
            <p className='text-danger'>{error}</p>
          </div>

          <button onClick={handleGoogleLogin} className='btn btn-danger btn-lg mt-2 w-100'>Signin With Google</button>
          
        </form>
        </div>
    );
};

export default Login;