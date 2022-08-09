import "./SocialMedia.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
			<a href="https://www.facebook.com/snir.yosefof"><BsFacebook size={42}/></a>
			<a href="https://www.linkedin.com/in/snir-yosefof/"><BsLinkedin size={42}/></a>
			<a href="https://www.instagram.com/sniryosefof/"><BsInstagram size={42}/></a>
			<a href="https://github.com/SnirYosefof"> <BsGithub size={42}/></a>
        </div>
    );
}

export default SocialMedia;
