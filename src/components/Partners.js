import React from 'react'
// import clients images
import client1 from "../imgs/client1.png"
import client2 from "../imgs/client2.png"
import client3 from "../imgs/client3.png"
import client4 from "../imgs/client4.png"
import client5 from "../imgs/client5.png"
import client6 from "../imgs/client6.png"
// Add slack js 
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Partners() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
  return (
    <section class="partners pt-4 pb-4">
    <div class="container">
        <h2 class="section-title text-center fw-bold mt-5 mb-5 fs-2 text-uppercase ">
            nos partenairs
        </h2>
        {/* <div class="row align-items-center justify-content-center mt-5 mb-3 text-center gap-4 ">
            
            <div class="col-md-4 col-lg-3 ">

                <div class="partner-img">
                    <img src={client1} alt="" class="img-fluid"/>
                </div>
            </div>
            
            <div class="col-md-4 col-lg-3">
                <div class="partner-img">
                    <img src={client2} alt=""/>
                </div>
            </div>
            
            <div class="col-md-4 col-lg-3">
                <div class="partner-img">
                    <img src={client3} alt=""/>
                </div>
            </div>
            
            <div class="col-md-4 col-lg-3">
                <div class="partner-img">
                    <img src={client4} alt=""/>
                </div>
            </div>
            
            <div class="col-md-4 col-lg-3">
                <div class="partner-img">
                    <img src={client5} alt=""/>
                </div>
            </div>
            
            <div class="col-md-4 col-lg-3">
                <div class="partner-img">
                    <img src={client6} alt=""/>
                </div>
            </div>
        </div> */}

        <div>
        <Slider {...settings} className= "pt-5 pb-5">
        <div class="partner-img">
            <img src={client1} alt="" className="w-50 m-auto"/>
        </div>
        <div class="partner-img">
            <img src={client2} alt="" className="w-50 m-auto"/>
        </div>
        <div class="partner-img">
            <img src={client3} alt="" className="w-50 m-auto"/>
        </div>
        <div class="partner-img">
            <img src={client4} alt="" className="w-50 m-auto"/>
        </div>
        <div class="partner-img">
            <img src={client5} alt="" className="w-50 m-auto"/>
        </div>
        <div class="partner-img">
            <img src={client6} alt="" className="w-50 m-auto"/>
        </div>
        </Slider>
      </div>
   


    </div>
</section>
  )
}
