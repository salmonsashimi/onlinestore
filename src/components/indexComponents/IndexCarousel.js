import React, { useEffect, useState } from 'react';

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
            newBanner = 0;
        }

        setActiveBanner(newBanner)
    }


    const goToBanner = (bannerNum) => {
        setActiveBanner(bannerNum - 1);
    }


    useEffect(() => {
        const autoCycle = setInterval(() => {
            updateBanner(activeBanner + 1)
        }, 1000)

        return () => {
            if (autoCycle) {
                clearInterval(autoCycle);
            }
        }
    });


    return (
        <div className='indexCarousel container'>
            <div className='indexCarousel__inner' style={{ transform: `translate(-${activeBanner * 100}%)` }}>
                {props.banners.map((banner) => (
                    <IndexCarouselItem img={banner.imgSrc} key={banner.num} />
                ))}
            </div>
            <div className='indexCarousel__bannerButtons'>
                {props.banners.map(banner => (
                    <button
                        className={`indexCarousel__bannerButton ${activeBanner + 1 === banner.num ? "indexCarousel__bannerButton-active" : ""}`}
                        onClick={() => { goToBanner(banner.num) }} key={banner.num} num={banner.num}
                    ></button>
                ))}
            </div>
            <button className='indexCarousel__buttonLeft' onClick={() => { updateBanner(activeBanner - 1) }}>&lt;</button>
            <button className='indexCarousel__buttonRight' onClick={() => { updateBanner(activeBanner + 1) }}>&gt; </button>
        </div >
    )
}



IndexCarousel.defaultProps = {
    banners:
        [
            {
                num: 1,
                imgSrc: 'https://picsum.photos/id/1011/1200/600'
            },
            {
                num: 2,
                imgSrc: 'https://picsum.photos/id/590/1200/600'

            },
            {
                num: 3,
                imgSrc: 'https://picsum.photos/id/177/1200/600'

            }]
}
export default IndexCarousel;