import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className=''>
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10 col-md-8 col-lg-6 col-xl-5">
                                <div className="card" style={{ borderRadius: "15px" }}>

                                    <div className="card-body p-3">
                                        <h2 className=" text-center mb-5 authheadline">Welcome back!</h2>
                        
                                        <form>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form3Example3cg">Email</label>

                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter your e-mail'/>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form3Example4cg">Password</label>
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Enter a password' />

                                            </div>


                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-success btn-block btn-lg btn-block gradient-custom-4 text-body"><span className="btntext">Submit</span></button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Don't have an account yet? <Link href="#!" to='/signup'
                                                className="fw-bold text-body"><u>Signup</u></Link></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
