import React from 'react'
// import product imgaes
import product1 from "../imgs/product-1.webp"
import product2 from "../imgs/product-1.webp"
import product3 from "../imgs/product-1.webp"
import product4 from "../imgs/product-1.webp"

export default function Products() {
  return (
    <section className="section-products pt-4 pb-4" id="products">
            <div className="container">
                <h2 className="section-title text-center fw-bold mt-5 mb-5 fs-2 text-uppercase ">
                    nos produits
                </h2>
                    <div className="row mt-4 justify-content-center align-items-center">
                            
                            
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product1} alt="" className="img-fluid" />
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                                <a href='../../public/files/test.txt' download ="issam">download Catalogue</a>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product2} alt="" className="img-fluid" />
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product3} alt="" className="img-fluid" />
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product4} alt="" className="img-fluid" />
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                        </div>
                                </div>
                            </div>

                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product1} alt="" className="img-fluid" />
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product2} alt="" className="img-fluid" />
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product3} alt="" className="img-fluid" />
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-1" className="single-product ">
                                        <div className="product-img">
                                                <img src={product4} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="part-2 text-md-start">
                                                <h3 className="product-title fw-bold">Product Title</h3>
                                                <a href="/" className="product-details">Details</a>
                                        </div>
                                </div>
                            </div>
                    </div>
            </div>
        </section>
  )
}
