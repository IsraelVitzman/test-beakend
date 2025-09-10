
import "./logo.css"
import headInstegrm from '../../assets/img/headInstagram.png'
import logoInstegrm from '../../assets/img/logoInstegram.png'
function Logo(){
    return(
    <div className="logo">
        <img id="logoInstegrm" src={logoInstegrm} alt="" />
        <img id="headInstegrm" src={headInstegrm} alt="logoInstegrm" />
     </div>
    )
}
export default Logo