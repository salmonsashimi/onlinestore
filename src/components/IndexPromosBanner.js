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
            name: 'New Arrivals!',
            icon: 'yellow'
        },
        {
            name: 'Buy 2 get 50% off!',
            icon: 'blue'
        },
        {
            name: 'Daily sales',
            icon: 'blue'
        }
    ]
}
export default IndexPromosBanner;