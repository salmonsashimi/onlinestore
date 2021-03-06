import useTextInput from '../hooks/useFormState';

const FooterSocialMedia = () => {
    const [text, setText] = useTextInput();

    return (
        <div>
            <p className='footerSection__app'>Download mobile app here</p>

            <h3 className='footerSection__name'>Subscribe to our mailing list</h3>
            <form>
                <input className='footerSection__email-input' onChange={setText} value={text} placeholder='example@example.com'></input>
                <button className='footerSection__email-button'>+</button>
            </form>
        </div>
    )
}

export default FooterSocialMedia;