import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
function Signup() {
    return (
        <div className=''>
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10 col-md-8 col-lg-6 col-xl-5">
                                <div className="card" style={{ borderRadius: "15px" }}>

                                    <div className="card-body p-3">
                                        <h2 className=" text-center mb-5 authheadline">Signup&#33; and let's begin</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form3Example1cg">Name</label>
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Enter name'/>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form3Example3cg">Email</label>

                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter your e-mail'/>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form3Example4cg">Password</label>
                                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Enter a password' />

                                            </div>

                                            

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-success btn-block btn-lg btn-block gradient-custom-4 text-body"><span className="btntext">Register</span></button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have an account already? <Link href="#!" to='/login'
                                                className="fw-bold text-body"><u>Login here</u></Link></p>

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

export default Signup
