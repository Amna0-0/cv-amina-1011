import "./Header.css"
import ProfilePic from "../Images/pfp.png"
import "./About.js"
import "./Objectives.js"
import "./Experience.js"
function Header(){
    function HandleClick2() {
        alert("Thank you for hiring me");
    }
    function HandleClick() {
        alert("Thank you for downloading my cv");
    }
    return(
        <header
            className="header-container">
                <div className="left-headerside">
            <img src={ProfilePic} alt="Amnatasleem" className="Profile-pic"/>
            <h1>AMINA TASLEEM</h1>
            <p>Graphic designer and web developer</p>
            <button onClick={HandleClick}>Download CV</button>
            <br></br>
            <button onClick={HandleClick2}>Hire me</button>
            </div>
            <div className="right-headerside">
                <h3>CONTACT AND INFO</h3>
                <p>age             20</p> 
                <p>Email address   amna2005@gmail.com</p> 
                <p>phone           12344567890</p>
                <p>address         home  </p>
            </div>
</header>
    );
}
export default Header;
