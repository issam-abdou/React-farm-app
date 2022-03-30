import React from 'react'
import logo from "../imgs/logo.png"
export default function Header() {
  return (
<header>
    <div className="top__nav  ">
        <div className="container pt-2 pb-2">
            <div className="row text-center text-md-start justify-content-md-between ">
                <ul className="list-unstyled text-black d-flex flex-column flex-lg-row  col-md-8 mb-0 gap-2 gap-md-3 mb-2 mb-md-0">
                    <li><a href="/" className="text-black"><i className="fa fa-phone"></i> 1234 - 5678 - 9012</a></li>
                    <li><a href="/" className="text-black"><i className="fa fa-envelope"></i> support@Construct.com</a></li>
                </ul>
                <ul className="d-flex list-unstyled gap-4 col-md-4 justify-content-md-end justify-content-center mb-0">
                    <li><a href="/" className="text-black"><i className="fa-brands fa-facebook "></i></a></li>
                    <li><a href="/" className="text-black"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="/" className="text-black"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>			
            </div>
        </div>
    </div>
    
    <nav className="navbar navbar-expand-lg  text-white">
        <div className="container ">
          <a className="navbar-brand" href="/">
              <img src={logo} alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto gap-2 mt-3 mt-md-0 pb-4 pb-md-0">
              <a className="nav-link active" aria-current="page" href="/">Acceuil</a>
              <a className="nav-link " href="/">Qui somme nous</a>
              <a className="nav-link " href="/">Pourquoi nous</a>
              <a className="nav-link" href="/">Nos Produits</a>
              <a className="nav-link ps-2 pe-2 fw-bold nav-btn text-center" href="/">Contactez nous</a>

            </div>
          </div>
        </div>
    </nav>
</header>

  )
}


