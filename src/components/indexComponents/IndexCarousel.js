import { useState } from 'react';

const IndexCarouselItem = (props) => (
    <div className='indexCarouselItem'>
        <img src={props.img} />

    </div>
)


const IndexCarousel = (props) => {

    const [activeItem, setActiveItem] = useState(0);

    const updateItem = (newItem) => {
        if (newItem < 0) {
            newItem = 0;
        } else if (newItem >= React.Children.count(children)) {
            newItem = React.Children.count(children) - 1;
        }

        setActiveItem(newItem)
    }

    return (
        <div className='indexCarousel'>
            <div className='indexCarousel__inner' style={{ transform: `translate(-${activeItem * 100}%)` }}>
                {props.banners.map((banner) => (
                    <IndexCarouselItem img={banner.imgSrc} />
                ))}

            </div>

        </div>
    )
}




// import React, { useEffect } from 'react';
// class IndexCarousel extends React.Component {
//     constructor(props) {
//         super(props)

//         this.carouselRef = React.createRef();
//         this.rotateCarousel = this.rotateCarousel.bind(this);

//     }


//     rotateCarousel() {
//         let totalDisplays = this.carouselRef.current.childNodes.length;
//         let displayIndex = 0;
//         for (let i = 0; i < totalDisplays; i++) {
//             this.carouselRef.current.childNodes[i].style.display = 'none';
//         }
//         displayIndex++;
//         if (displayIndex >= totalDisplays) {
//             displayIndex = 0;
//         }

//         this.carouselRef.current.childNodes[displayIndex].style.display = 'block';
//         setTimeout(this.rotateCarousel, 2000);

//     }

//     componentDidMount() {
//         this.rotateCarousel();
//     }


//     render() {
//         return (
//             <div className='indexMainBanner container'>
//                 <div className='carousel' ref={this.carouselRef}>
//                     {this.props.banners.map(banner => (
//                         <div className='carouselDisplay'>
//                             <img src={banner.imgSrc} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         )
//     }
// }
// const IndexMainBanner = (props) => {

//     const [banner, setBanner] = useState(0);

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