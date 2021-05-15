import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import {FooterContainer, FooterSubscription, FooterSubHeading, 
FooterSubText, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinksTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    You Have Chosen the Best Place to Get Your Essentials and Your Custormers!
                </FooterSubHeading>
                <FooterSubText>
                </FooterSubText>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to='/working'>How it Works</FooterLink>
                        <FooterLink to='/terms'>Terms of Service</FooterLink>
                        <FooterLink to='/'>Our Pharmacies</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to='/sendmessage'>epharmacyservices@gmail.com</FooterLink>
                        <FooterLink to='/'>0711234567</FooterLink>
                        <FooterLink to='/'>Our Main Branch</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to={'//www.facebook.com/E-Pharmacy-108009184658099'} target = "_blank">Facebook</FooterLink>
                        <FooterLink to={'//www.instagram.com'} target = "_blank">Instagram</FooterLink>
                        <FooterLink to={'//www.youtube.com/watch?v=pcXJZ79xHQM'} target = "_blank">Youtube</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to ="/">
                        <SocialIcon/> E-Pharmacy
                     </SocialLogo>
                     <WebsiteRights>E-Pharmacy c 2021</WebsiteRights>
                     <SocialIcons>
                         <SocialIconLink href={'//www.facebook.com/E-Pharmacy-108009184658099'} target = "_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                         <SocialIconLink href={'//www.instagram.com'} target = "_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                         <SocialIconLink href={'//www.youtube.com/watch?v=pcXJZ79xHQM'} target = "_blank" aria-label="Youtube" rel="noopener noreferrer"><FaYoutube /></SocialIconLink>
                     </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
