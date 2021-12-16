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
            name: 'promo1',
            icon: 'yellow'
        },
        {
            name: 'promo2',
            icon: 'blue'
        },
        {
            name: 'promo3',
            icon: 'blue'
        }
    ]
}
export default IndexPromosBanner;