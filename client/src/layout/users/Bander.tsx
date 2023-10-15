import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Bander:React.FC<{}> = () => {

  return (
    <>
 <div
  id="carouselExampleIndicators"
  className="carousel slide mt-14"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.canifa.com/Simiconnector/BannerSlider/e/o/eoss-topbanner-destop-2880x960.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">
      <img src="https://media.canifa.com/Simiconnector/BannerSlider/f/l/flash-sale-topbanner-destop-2880x960_2_.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.canifa.com/Simiconnector/BannerSlider/e/o/eoss-topbanner-destop-2880x960.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    
    </>
   
  )
}

export default Bander
