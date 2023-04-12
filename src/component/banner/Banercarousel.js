import React from 'react'
import classes from './Bannercarousel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banercarousel = ({ img }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplayspeed: 3000
    };
    console.log(img);
    return (
        <div className={classes.Banercarousel}>
            <Slider {...settings}>
                <div className={classes.BannerCarouselImage}>
                    <img className={classes.slickarrow} src={img} />
                </div>
            </Slider>
        </div>
    )
}

export default Banercarousel
