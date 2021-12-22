import React, { useState } from 'react';

const IndexCarouselItem = (props) => (
    <div className='indexCarouselItem'>
        <img src={props.img} />

    </div>
)


const IndexCarousel = (props) => {

    const [activeBanner, setActiveBanner] = useState(0);

    const updateBanner = (newBanner) => {
        if (newBanner < 0) {
            newBanner = 0;
        } else if (newBanner >= props.banners.length) {
            newBanner = props.banners.length - 1;
        }

        setActiveBanner(newBanner)
    }

    return (
        <div className='indexCarousel container'>
            <div className='indexCarousel__inner' style={{ transform: `translate(-${activeBanner * 100}%)` }}>
                {props.banners.map((banner) => (
                    <IndexCarouselItem img={banner.imgSrc} key={banner.imgSrc} />
                ))}

            </div>
            <div>
                <button onClick={() => { updateBanner(activeBanner - 1) }}>prev </button>
                <button onClick={() => { updateBanner(activeBanner + 1) }}>next </button>
            </div >

        </div >
    )
}



IndexCarousel.defaultProps = {
    banners:
        [
            {
                imgSrc: 'https://picsum.photos/id/1011/1200/600'
            },
            {
                imgSrc: 'https://picsum.photos/id/590/1200/600'

            },
            {
                imgSrc: 'https://picsum.photos/id/177/1200/600'

            }]
}
export default IndexCarousel;