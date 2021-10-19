import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle, handleSignUp,isLogin,handleEmail,handlePassword,toggleLogin,handleResetPassword,error} = useAuth();
    
    return (
        <div className='container py-5'>
            {/* <div className="row w-50 mx-auto">
                <h2 className='text-primary text-center mb-4'>Please Login</h2> 
                <div className="form-floating mb-3"> 
                    <input onBlur={handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput" className='px-4'>Email address</label>
                </div>
                <div className="form-floating mb-4">
                    <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword" className='px-4'>Password</label>
                </div>
                <div>
                <p className='text-danger'>{error}</p>
               </div>
                <div className='d-flex justify-content-between'>
                    <button onSubmit={handleSignUp} className='btn btn-success btn-lg'>LOGIN</button>
                    <Link to='/registration'>New User ?</Link>
                    <Link  to='/'>Forgot Password ?</Link>
                </div>
               <button onClick={signInWithGoogle} className='btn btn-danger btn-lg mt-4 w-100'>Signin With Google</button>
            </div> */}


        <form className='w-50 mx-auto' onSubmit={handleSignUp}>
          <h2 className='text-4xl font-semibold text-center text-purple-500 mb-8'>Please {isLogin ? 'Login' : "Signup"}</h2>
          <div className="form-floating mb-3"> 
              <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail" placeholder='Please Enter Your Email'/>
              <label htmlFor="floatingInput" className='px-4'>Email address</label>
           </div>
          <div className="form-floating mb-3">
              <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword" placeholder='Please Enter Your Password'/>
              <label htmlFor="floatingPassword" className='px-4'>Password</label>    
          </div>
          <div className='d-flex mb-4'>
          <div className="form-check me-3">
            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
            <label className="form-check-label" htmlFor="gridCheck1">
              Do you have account ?
            </label>
          </div>
          <a href="" onClick={handleResetPassword}>{isLogin ? 'Reset Password' : ""}</a>
          </div>
          <div>
            <p className='text-danger'>{error}</p>
          </div>
          <button type="submit" className="btn btn-lg btn-primary me-3">{isLogin ? 'Login':'Signup'}</button>

              <br/>
              <button onClick={signInWithGoogle} className='btn btn-danger btn-lg mt-4 w-100'>Signin With Google</button>
            </form>
        </div>
    );
};

export default Login;