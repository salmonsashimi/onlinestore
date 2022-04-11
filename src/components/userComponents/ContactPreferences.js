import { AiOutlineTag, AiOutlineStar } from 'react-icons/ai';
import { BsMegaphone } from 'react-icons/bs';

const ContactPreferences = () => (
    <div className='contactPreferences'>
        <h3 className='contactPreferences__header'>Content Types</h3>
        <p>Select the options below to update your contact preferences.</p>
        <div className='contactPreferences__option'>
            <div className='contactPreferences__option-text'>
                <AiOutlineTag />
                <h3>Discounts and Sales</h3>
                <p>Be first in line to know the latest offers!</p>
            </div>
            <div className='contactPreferences__option-checkboxes'>
                <div className='contactPreferneces__option-checkbox'>
                    <input type='checkbox' for='email' /><label id='email' name='email'>Email</label>
                </div>
                <div className='contactPreferneces__option-checkbox'>
                    <input type='checkbox' for='text' /><label id='text' name='text'>Text</label>
                </div>
            </div>
        </div>
        <div className='contactPreferences__option'>
            <div className='contactPreferences__option-text'>
                <BsMegaphone />
                <h3>New Stuff</h3>
                <p>Get up to date with the latest trends and newest drops.</p>
            </div>
            <div className='contactPreferences__option-checkboxes'>
                <div className='contactPreferneces__option-checkbox'>
                    <input type='checkbox' for='email' /><label id='email' name='email'>Email</label>
                </div>
                <div className='contactPreferneces__option-checkbox'>
                    <input type='checkbox' for='text' /><label id='text' name='text'>Text</label>
                </div>
            </div>
        </div>
        <div className='contactPreferences__option'>
            <div className='contactPreferences__option-text'>
                <AiOutlineStar />
                <h3>Your Exclusives</h3>
                <p>Get an exclusive catalog unique to your fashion sense.</p>
            </div>
            <div className='contactPreferences__option-checkboxes'>
                <div className='contactPreferneces__option-checkbox'>
                    <input type='checkbox' for='email' /><label id='email' name='email'>Email</label>
                </div>
                <div className='contactPreferneces__option-checkbox'>
                    <input type='checkbox' for='text' /><label id='text' name='text'>Text</label>
                </div>
            </div>
        </div>

    </div>
)

export default ContactPreferences;