import { FooterBar } from "../styled"; 
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <FooterBar>
      <SocialIcons>
        <IconLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#E1306C"
        >
          <FaInstagram />
        </IconLink>
        <IconLink
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#1DA1F2"
        >
          <FaTwitter />
        </IconLink>
        <IconLink
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          hoverColor="#1877F2"
        >
          <FaFacebook />
        </IconLink>
      </SocialIcons>
      <p>&copy; George 2025. Todos los derechos reservados.</p>


    </FooterBar>
  );
}
export default Footer;