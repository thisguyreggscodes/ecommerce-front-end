import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';
import IconButton from '@mui/material/IconButton';

import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';

function Login() {
    
    const navigate = useNavigate ();
    //reactjs v6 and firebase v9 compatible only...

    const [email, setEmail] = useState ('');

    const [password, setPassword] =useState ('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword (email, password)
            .then(auth => {
               navigate ('/') 
            })
            .catch(error => alert(error.message))

        //yep fancy advanced firebase login sheesh
    }
     
    const register = e => {
        e.preventDefault();

        auth 
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                // successfully creates new user with email and password sheeeesh
                console.log(auth);

            if (auth) {
                 navigate('/')

            }
            })
            .catch (error => alert(error.message))

        //yep fancy advanced firebase register sheesh
    }

    //show password functionality below!!

    const [values, setValues] = React.useState ({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues ({ ...values, showPassword: !values.showPassword });
    
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues ({...values, [prop]: event.target.value});

    };

  return (
    <div className='login'>
        <Link to='/'>
            <img className="login_logo"
             alt="" src={require('./velascocycles.png')}
        
        />
        </Link>

        <div className='login_container'>
            <h1>Sign In</h1>

              <form>

                <h5>Email</h5>

                <input type='text' value={email} onChange=
                    { e => setEmail ( e.target.value ) } />

                <h5>Password
                <input type='password' value={password} onChange=
                    { e => setPassword ( e.target.value ) }

                        onChange={handlePasswordChange(password)}
                        value={values.password}

                        />
                        endAndornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword} >
                            {values.showPassword ? <VisibilityIcon/>: <VisibilityOffIcon/>}
                            
                            </IconButton>
                            </InputAdornment>
                        }

                        />
                        </h5>

                <button type='submit' onClick={signIn}
                className='login_signInButton'>Sign In</button>
            </form>
             
             <p>
                By signing-in you agree to our store's conditions of
                use and sale. Please consult with our representatives
                about your data privacy. Happy Shopping!
             </p>

             <button onClick={register}
             className='login_registerButton'>Create your account</button>

        </div>

    </div>
  )
}

export default Login 
