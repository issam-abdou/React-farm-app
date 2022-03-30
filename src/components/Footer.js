import React from 'react'

export default function Footer() {
  return (
    <footer className="pt-5 pb-5 text-black-50">
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
                <div className="footer__info">
                    <a href="/">
                        <img src="imgs/logo.png" alt="" className="mb-4" />
                    </a>
                    <p className="mb-5">
                        Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus
                    </p>
                    <div>
                         
                        <div className="copyright">
                            &copy; 2022 - <span className="fw-bold">Construction</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-3">
                <div className="footer__links">
                    <h5 className="text-black">Links</h5>
                    <ul className="list-unstyled lh-lg">
                            <li>Home</li>
                            <li>Our Services</li>
                            <li>Portfolio</li>
                            <li>Testimonials</li>
                            <li>Support</li>
                            <li>Terms and Condition</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-3">
                <div className="footer__about">
                    <h5 className="text-black">About Us</h5>
                    <ul className="list-unstyled lh-lg">
                        <li>Sign In</li>
                        <li>Register</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <div className="footer__contacts">
                    <h5 className="text-capitalize black">contact us</h5>
                    <p className="mt-3 mb-3">Get in touch with us via mail phone.We are waiting for your call or message</p>
                    <a href="/" className="btn  main-btn rounded-pill pe-3 ps-3 mt-5  w-100">construction@gmail.com</a>
                    <ul className="footer__icons list-unstyled d-flex mt-5 gap-4 justify-content-center justify-content-md-start">
                        <li>
                            <a href="/" className="">
                                <i className="fa-brands fa-facebook fa-lg  facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="">
                                <i className="fa-brands fa-twitter fa-lg  twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="  ">
                                <i className="fa-brands fa-linkedin fa-lg  linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className=" ">
                                <i className="fa-brands fa-youtube fa-lg  youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
