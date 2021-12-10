import Link from 'next/link';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';

const Icons = () => (
    <div>
        <Link href='/user'><FaUserAlt size='1.5em' className='icons' /></Link>
        <Link href='/cart'><FaShoppingCart size='1.5em' className='icons' /></Link>
    </div>
)

export default Icons;