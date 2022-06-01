import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../UI/Loader'
import { loginWithEmailAndPassword, signupWithEmailPassword } from '../../actions/auth'

const AuthIndex = ({ path }) => {
    const [details, setDetails] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {      
      return () => {
        return ()=>{                 // cleanup code for unwanted memory leaks
            setLoader(false);
            setDetails({
                email:'',
                password:''
            })
        }
      }
    }, [])
    

    const handleSubmission = (e) => {
        e.preventDefault();
        // console.log(details);
        if (path === 'signup') {
            setLoader(true);
            dispatch(signupWithEmailPassword(details, (data) => {
                if (data.error) {
                    console.log(data.error);
                    alert(data?.response?.data?.error?.message || 'Some error occured');
                }
                else {
                    console.log('Successfully signed up');
                    navigate('/');
                }
                setLoader(false);
            }));
        }
        else if (path === 'login') {
            setLoader(true);
            dispatch(loginWithEmailAndPassword(details, (data) => {
                if (data.error) {
                    console.log(data.error);
                    alert(data?.response?.data?.error?.message || 'Some error occured');
                }
                else {
                    console.log('Successfully logged in');
                    navigate('/');
                }
                setLoader(false);
            }));
        }
    }

    return (
        <>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink to={"/signup"}><h3>Signup</h3></NavLink>
                    </div>
                    <form autoComplete={"off"} onSubmit={handleSubmission}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                value={details.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {path === 'login' ? 'Login' : 'Signup'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {loader && <Loader />}
        </>
    )
}

export default AuthIndex

// eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0ZTc2NDk3ZGE3Y2ZhOWNjMDkwZDcwZTIyNDQ2YTc0YjVjNTBhYTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGVsbG8td29ybGQtNTJkYmIiLCJhdWQiOiJoZWxsby13b3JsZC01MmRiYiIsImF1dGhfdGltZSI6MTY1NDA1NDM4NiwidXNlcl9pZCI6IkxERWsyZzNqRkdXMFVodlhvOVA1bGV2SkYybTEiLCJzdWIiOiJMREVrMmczakZHVzBVaHZYbzlQNWxldkpGMm0xIiwiaWF0IjoxNjU0MDU0Mzg2LCJleHAiOjE2NTQwNTc5ODYsImVtYWlsIjoic29udUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic29udUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.f0_YkHvsrGCAAnrzLO1XtwyUkhlk1abPWqtzCjRlWzu5pxSOKQCyza2eNd1tFw-JhHAvH6g-O3sl-J49itQZS-2Q2P60yEuEOAB2CkSZiYX2d24Y76G1qfvye0oL7uwz7K47T_jJDR22EWr_26G7ENYUB8d0g_cHEXBU19FjWWBmUDXTIWKWM6whsrUEszLk84kbVnN86hefBpPCH3HcFCA5fm6LvjY0bnYWS1ySiyUEOsUIY_MJajGOj0m7f2-xt88kXiAG4QqqXya-_h1nR4BWG96FvxP18sz9foNYr34XJttEaVeJAn3vRsxygUZRm_B-OaIN4mSasFtv0GMqMA"