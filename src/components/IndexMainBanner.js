import React, { useEffect } from 'react';
class IndexMainBanner extends React.Component {
    constructor(props) {
        super(props)

        this.carouselRef = React.createRef();
        this.rotateCarousel = this.rotateCarousel.bind(this);

    }


    rotateCarousel() {
        console.log('hello')
        let totalDisplays = this.carouselRef.current.childNodes.length;

        for (let i = 0; i < totalDisplays; i++) {
            this.carouselRef.current.childNodes[i].style.display = 'none';
        }
        console.log(this.carouselRef.current.childNodes[0])
        console.log(this.carouselRef.current.childNodes[1])
        this.carouselRef.current.childNodes[2].style.display = 'none';
    }

    componentDidMount() {
        this.rotateCarousel();
    }


    render() {
        return (
            <div className='indexMainBanner container'>
                <div className='carousel' ref={this.carouselRef}>
                    {this.props.banners.map(banner => (
                        <div className='carouselDisplay'>
                            <img src={banner.imgSrc} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
// const IndexMainBanner = (props) => {

//     const [banner, setBanner] = useState(0);


//     const rotateCarousel = () => {
//         console.log('hello')
//         const totalBanners = props.banners;
//         // const slides = document.getElementsByClassName('carouselDisplay')
//         console.log(slides);

//         for (let i = 0; i < totalBanners.length; i++) {
//             console.log('thisistotalbanners', totalBanners);
//         }

//     };


//     rotateCarousel();

//     // var slideIndex = 0;
//     // showSlides();

//     // function showSlides() {
//     //     var i;
//     //     var slides = document.getElementsByClassName("carouselDisplay");
//     //     for (i = 0; i < slides.length; i++) {
//     //         slides[i].style.display = "none";
//     //     }
//     //     slideIndex++;
//     //     if (slideIndex > slides.length) { slideIndex = 1 }
//     //     slides[slideIndex - 1].style.display = "block";
//     //     setTimeout(showSlides, 2000); // Change image every 2 seconds
//     // }



//     // return (
//     //     <div className='indexMainBanner container'>
//     //         <div className='carousel'>

//     //             {props.banners.map(banner => (
//     //                 <div className='carouselDisplay'>
//     //                     <img src={banner.imgSrc} />
//     //                 </div>
//     //             ))}

//     //             <a className='carouselPreviousButton'>prev</a>
//     //             <a className='carouselNextButton'>next</a>
//     //         </div>
//     //     </div>
//     // )
// }


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