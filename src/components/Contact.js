import React from 'react'
import Map from "./Map"

export default function Contact() {
  return (
    <section className="contact pt-4 p b-4" id="contact">
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
                        <Map/>
                    </div>
                </div>
                
            </div>
        </section>
  )
}
