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