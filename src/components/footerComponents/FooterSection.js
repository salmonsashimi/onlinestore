const FooterSection = (props) => (
    <div>
        <h3 className='footerSection__name'>
            {props.sectionName}
        </h3>
        {props.sectionLinks.map((link) => (
            <p className='footerSection__link' key={link}>{link}</p>
        ))}
    </div>
)

export default FooterSection;