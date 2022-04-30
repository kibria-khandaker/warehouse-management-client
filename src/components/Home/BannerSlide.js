import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

const BannerSlide = ({ fruits }) => {
    // console.log(fruits);
    return (
        <Carousel className='HomeSlider'>
            {
                fruits.map(fruit => (
                    <Carousel.Item
                    interval={2000}
                        key={fruit._id}
                        style={{ backgroundImage: `url(${fruit.img})` }}
                        className='sliderBgImg myBrandBgColor' >
                        <Carousel.Caption>
                            <h3 className=' text-uppercase'> {fruit.name} </h3>
                            <p>{fruit.shortDesc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )).slice(0,6)
            }
        </Carousel>
    );
};

export default BannerSlide;