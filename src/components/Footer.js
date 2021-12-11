import FooterSection from './FooterSection';

const Footer = (props) => (
    <div className='footer'>
        {props.sections.map((section) => (
            <FooterSection sectionName={section.name} sectionLinks={section.links} />
        ))}
    </div>
)

Footer.defaultProps = {
    sections: [
        {
            name: 'Customer Service',
            links: [
                'Help Center',
                'Track Order',
                'Delivery Returns',
                'Contact Us'
            ]
        },
        {
            name: 'About Us',
            links: [
                'About Us',
                'Careers',
                'Corporate Responsibility',
                'Terms & Conditions'
            ]
        }
    ]
}

export default Footer;