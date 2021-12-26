import useTextInput from '../hooks/useFormState';


const FooterSocialMedia = () => {
    const [text, setText] = useTextInput();

    return (
        <div>
            <p>Download mobile app here</p>

            <h3 className='footerSection__name'>Subscribe to our mailing list</h3>
            <form>
                <input onChange={(e) => { setText(e.target.value) }} value={text}></input>
                <button>Subscribe</button>
            </form>
        </div>
    )
}

export default FooterSocialMedia;