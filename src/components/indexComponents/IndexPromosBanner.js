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
            imgUrl: ''
        },
        {
            name: 'SHOP WOMEN',
            imgUrl: ''
        },
        {
            name: 'SHOP KIDS',
            imgUrl: ''
        }
    ]
}

export default IndexPromosBanner;