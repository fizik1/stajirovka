import logo from "../../imgs/Ellipse10.png"
import icon from '../../icons/Stroke1.png'

function Profil() {
    return(
        <div className="profil">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="texts">
                <h2>Shahob Berdiqulov</h2>
                <p>online</p>
            </div>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
        </div>
    )
}

export default Profil;