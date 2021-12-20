const IndexMainBanner = (props) => {





    return (
        <div className='indexMainBanner container'>
            <div className='carousel'>

                {props.banners.map(banner => (
                    <div className='carouselDisplay'>
                        <img src={banner.imgSrc} />
                    </div>
                ))}

                <a className='carouselPreviousButton'></a>
                <a className='carouselNextButton'></a>
            </div>
        </div>
    )
}


IndexMainBanner.defaultProps = {
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
export default IndexMainBanner;