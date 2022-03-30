import React from 'react'

export default function Contact() {
  return (
    <section className="contact pt-4 p b-4">
            <div className="container">
                <h2 className="section-title text-center fw-bold mt-5 mb-5 fs-2 text-uppercase ">
                    Contactez nous
                </h2>
                <div className="row">
                    <div className="contact__form col-md-6">
                        <form >
                            <div className="row  ">
                                <div className="mb-3 col-md-6">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label for="exampleInputname" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="exampleInputname" placeholder="Nom"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputsubject" className="form-label">Sujet</label>
                                    <input type="text" className="form-control" id="exampleInputsubject" placeholder="Sujet"/>
                                </div>
                                <div className="form-outline mb-3">
                                    <label for="floatingTextarea2"  className="form-label" >Message</label>
                                    <textarea className="form-control" placeholder="Message" id="floatingTextarea2" ></textarea> {/* Add style : style="height: 200px" */}
                                </div>
                            </div>
                            <button type="submit" className="btn form-btn">Submit</button>
                        </form>
                    </div>
                    <div className="contact__map  d-flex align-items-center justify-content-center col-md-6">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.146720969728!2d6.700868614677614!3d36.26021670560908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1727cbbb6af1b%3A0xbea05703c5a087b0!2sBoulvard%201600%20logts%2C%20El%20Khroub!5e0!3m2!1sfr!2sdz!4v1648370321495!5m2!1sfr!2sdz" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe> */}
                    </div>
                </div>
                
            </div>
        </section>
  )
}
