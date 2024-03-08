import React from 'react'
import { HomePageText } from "../../../constants/texts";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import homePageStyle from "../../../styles/homePageStyles.module.css";


const CompaniesCarausel = () => {
  const settings: any = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ width: "1200px", display: "flex", flexDirection: "column", marginTop: "100px" }}>
      <Slider {...settings}>
        {
          HomePageText.companiesCarauselContent.map((item, index) => (
            <div key={index}>
              <div className={homePageStyle.quoteText}>{item}</div>
            </div>
          ))
        }
      </Slider>

    </div>
  )
}

export default CompaniesCarausel
