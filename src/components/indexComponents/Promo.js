export default (props) => (
    <div className='promo'>
        <img src={props.promo.imgUrl}></img>
        <h3 className='promo__title'>{props.promo.name}</h3>
        <p className='promo__text'>{props.promo.text}</p>
    </div>
)