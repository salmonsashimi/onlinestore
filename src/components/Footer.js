import FooterSection from './FooterSection';
import FooterSocialMedia from './FooterSocialMedia';
import FooterBar from './FooterBar';

const Footer = (props) => (
    <div className='footer'>
        <div className='container footer__container'>
            {props.sections.map((section) => (
                <FooterSection sectionName={section.name} sectionLinks={section.links} />
            ))}
            <FooterSocialMedia />
        </div>
        <FooterBar />
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