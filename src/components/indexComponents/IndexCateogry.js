export default (props) => (
    <div className='indexCategory'>
        <img className='indexCategory__image' src={props.category.img} />
        <h1 className='indexCategory__name'>{props.category.name}</h1>
    </div>
)