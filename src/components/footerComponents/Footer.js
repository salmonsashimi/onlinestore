import FooterSection from './FooterSection';
import FooterSocialMedia from './FooterSocialMedia';
import FooterBar from './FooterBar';

const Footer = (props) => (
    <div className='footer'>
        <div className='container footer__container'>
            {props.sections.map((section) => (
                <FooterSection sectionName={section.name} sectionLinks={section.links} key={section.name} />
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
                'Payment Methods',
                'Contact Us',
                'FAQ'
            ]
        },
        {
            name: 'About Us',
            links: [
                'About Us',
                'Affiliate Program',
                'Careers',
                'Corporate Responsibility',
                'Terms & Conditions',
                'Privacy Policy',
            ]
        },
        {
            name: 'Follow Us',
            links: [
                'Facebook',
                'Instagram',
                'Youtube'
            ]
        }
    ]
}

export default Footer;