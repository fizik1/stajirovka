import logo from '../../imgs/Logo.png'
import icon from '../../icons/Stroke1.png'
import i_phone from '../../icons/phone.png'
import i_comment from '../../icons/Comment.png'
import i_log_out from '../../icons/Log_out.png'

function Nav() {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='path2'>
                <ul>
                    <li>Tour</li>
                    <li>About</li>
                    <li>Help center</li>
                    <li>Currency 
                        <select>
                            <option value="usd" key="">( USD ) $</option>
                        </select>
                    </li>
                    <li>Language 
                        <select>
                            <option value="en" key="">English</option>
                        </select>
                    </li>
                </ul>
                <button className='phone_btn'>
                    <p>+998990000000</p>
                    <p>24/7</p>
                    <img className='phone' src={i_phone} alt="" />
                </button>
                <button><img src={i_comment} alt="" /></button>
                <button><img src={i_log_out} alt="" /></button>
            </div>
        </div>
    
    )
}

export default Nav;