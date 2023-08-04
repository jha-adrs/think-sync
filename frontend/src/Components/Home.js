/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../logo.svg'
import './Home.css'
const Home = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <h1>Your thoughts, in the cloud</h1>
              <h2>Note taking with the cloud</h2>
            </div>
          </div>
          <div className="text-center">
            <a href="#about" className="btn btn-outline-success btn-get-started ">Get Started</a>
          </div>

          <div className="row icon-boxes">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="ri-stack-line"></i></div>
                <h4 className="title"><a href="">Free</a></h4>
                <p className="description">Get started with cloud-synced notes for free and quick 👌 </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="ri-palette-line"></i></div>
                <h4 className="title"><a href="">Cloud Safe</a></h4>
                <p className="description">Your notes are safe. With cloud sync enabled by default 😉 </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
              <div className="icon-box">
                <div className="icon"><i className="ri-fingerprint-line"></i></div>
                <h4 className="title"><a href="">Safe & Simple</a></h4>
                <p className="description">Safety is our top pritority. Your notes will be SAFE 🔒</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon-box">
                <div className="icon"><i className="ri-command-line"></i></div>
                <h4 className="title"><a href=""> Android & iOS </a></h4>
                <p className="description">We are working on an Android app to enable seamless access to your notes 📱</p>
              </div>
            </div>

            

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
