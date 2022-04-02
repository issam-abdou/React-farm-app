import React from "react"


export default function Hero(){
    
    return (
        <section className="hero text-center pt-5 pb-5 text-white d-flex align-items-center justify-content-center ">
            <div className="hero__content">
                <p className="text-uppercase">10 years of experience</p>
                <h1 className="text-uppercase fw-bold">construction services</h1>
                <div className="hero__btns d-flex justify-content-center gap-3 flex-column flex-md-row">
                    <a className=" ps-2 pe-2 fw-bold nav-btn text-center pt-2 pb-2 text-white align-self-center mt-3" href="/">Contactez Nous</a>
                </div>
            </div>
        </section>
    )
}