import profile from "../../images/fenley.jpeg"
const HeaderBody = (props) =>{
    return(
        <div className = {`header ${props.dark ? `dark-mode`: ``}`}>
                <div className = "social-media-container">
                    <div className = "social-media-item">
                            <a href = "https://linkedin.com/in/fenley-jude-viky-menelas-856598193/" target = "_blank">
                                <i className = "fab fa-linkedin"></i>
                            </a></div>
                    <div className = "social-media-item"><a href =  "https://github.com/Fley27" target = "_blank"><i className = "fab fa-github"></i></a></div>
                    <div className = "social-media-item">
                        <a href = "https://twitter.com/FenleyMenelas" target = "_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className = "text-zone-container">
                    <div className = "text-zone-title">Hi, I'm <span className = "important">Fenley</span></div>
                    <div className = "text-zone-subtitle"><span className = "important_">Web & Mobile</span> Software Developer</div>
                    <div className = "text-zone-description">
                        High level experience in building modern, fast and scalable websites & applications. 
                    </div>
                    <div className = "buttons">
                        <button onClick = {()=> window.location.href = "#about"} className = "button-header-contact">
                            About me
                        </button>
                        <button onClick = {()=> window.location.href = "#contact"} className = "button-header-contact">
                            Contact me
                        </button>
                    </div>
                    <div className = "mouse-down-container">
                        <div className = "mouse-down-icon">
                            <i className="fas fa-angle-down"></i>
                            <i className="fas fa-angle-down"></i>
                            <i className="fas fa-angle-down"></i>
                            <i className="fas fa-angle-down"></i>
                        </div>
                        <div className = "mouse-down-text">Scroll down</div>
                    </div>
                </div>
                <div className = "image">
                    <div className = "image-header-container">
                        <div className = "image-container-">
                            <img 
                                className = "image-header-image"
                                src = {profile}
                                alt = "profile"
                            />
                        </div>
                    </div>
                </div>
                <div className = "overlay"></div>
            </div>
    )
}

export default HeaderBody