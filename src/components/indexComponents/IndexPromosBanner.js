import Promo from './Promo';

const IndexPromosBanner = (props) => (
    <div className=' container'>
        <div className='indexPromosBanner'>
            {props.promos.map((promo) => <Promo key={promo.name} promo={promo} />)}
        </div>
    </div>
)


IndexPromosBanner.defaultProps = {
    promos: [
        {
            name: 'SHOP MEN',
            imgUrl: 'https://picsum.photos/id/343/350/300'
        },
        {
            name: 'SHOP WOMEN',
            imgUrl: 'https://picsum.photos/id/342/350/300'
        },
        {
            name: 'SHOP KIDS',
            imgUrl: 'https://picsum.photos/id/341/350/300'
        }
    ]
}

export default IndexPromosBanner;