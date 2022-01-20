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
            name: 'GOING OUT?',
            text: 'Fancy plans, fancy fits!',
            imgUrl: 'https://picsum.photos/id/342/350/300'


        },
        {
            name: 'Streetwear brands',
            text: 'Logo lovers unite!',
            imgUrl: 'https://picsum.photos/id/343/350/300'
        },
        {
            name: 'Bling up',
            text: 'Style it up!',
            imgUrl: 'https://picsum.photos/id/341/350/300'
        }
    ]
}

export default IndexPromosBanner;