import React from 'react'
// import about image
import aboutImg from "../imgs/portfolio2.jpg"

export default function About() {
  return (
    <section className="about pt-3 ">
    <div className="container">
    
        <h2 className="section-title text-center fw-bold mt-5 mb-5 fs-2 text-uppercase fw-bold">
            Qui somme nous
        </h2>
        <div className="row align-items-center justify-content-center gap-3 gap-md-0">
            <div className="col-md-6 about-img  ">
                <img src={aboutImg} alt="" className="img-fluid "/>
            </div>
            <div className="col-md-6 about-text ">
                <h3 className="fw-bold mb-4">Nous somme Costra</h3>
                <p className="fs-6 lh-3  mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                <p className="fs-6 lh-3">sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
                
            </div>
        </div>
    </div>
</section>
  )
}
