import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Wrapper } from './styled';
import Card from '../../../components/Card';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        >
            <img src={'./images/img/next.png'} alt="" />
        </div>
    );
}
  
function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}>
            <img src={'./images/img/prev.png'} alt="" />
        </div>
    );
}

const Banner = ({bannerImgs}) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Wrapper>
            <Slider
                {...settings}
            >
                                {
                bannerImgs?.slice(0, 20).map( ( slot , key ) => {
                    return (
                            <Card key={key} text={false} size={'lg'} banner={slot.CdnUrl} lazyImg height={506}/>
                        )
                    })
                }
            </Slider>
        </Wrapper>
        
    )
}

export default Banner