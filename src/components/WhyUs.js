import React from 'react'

export default function WhyUs() {
  return (
    <section className="why-us pt-3 pb-3" id="why-us">
            <div className="container">
                <h2 className="section-title text-center fw-bold mt-5 mb-5 fs-2 text-uppercase ">
                    Pourquoi Nous
                </h2>
                <div className="row justify-content-center gap-5">
                    <div className="col-lg-3  text-center rounded">
                        <div className="wu-card">
                            <i className="fa-solid fa-leaf mb-3"></i>
                            <h4 className="fw-bold mb-3 fs-5 fw-bold">WE DELIVER QUALITY</h4>
                            <p className="text-black-50 lh-2 mx-auto">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                        </div>
                    </div>
                    <div className="col-lg-3  text-center rounded">
                        <div className="wu-card">
                            <i className="fa-solid fa-award mb-3"></i>
                            <h4 className="fw-bold mb-3 fs-5 fw-bold">PROFESSIONAL SERVICES</h4>
                            <p className="text-black-50 lh-2 mx-auto">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                        </div>
                    </div>
                    <div className="col-lg-3  text-center rounded">
                        <div className="wu-card">
                            <i className="fa-solid fa-user-group mb-3"></i>
                            <h4 className="fw-bold mb-3 fs-5 fw-bold">WE ARE PASIONATE</h4>
                            <p className="text-black-50 lh-2 mx-auto">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
