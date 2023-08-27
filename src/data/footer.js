import {
  logoFacebook,
  logoInstagram,
  logoPinterest,
  logoTwitter,
  logoYoutube,
} from "ionicons/icons";

const footerNavLinks = [
  {
    to: "/about",
    text: "Our Content",
  },
  {
    to: "/locations",
    text: "Locations",
  },
  {
    to: "/contact",
    text: "Contact",
  },
];

const footerSocialLinks = [
  {
    href: "https://www.facebook.com/",
    logo: logoFacebook,
  },
  {
    href: "https://www.youtube.com/",
    logo: logoYoutube,
  },
  {
    href: "https://twitter.com/",
    logo: logoTwitter,
  },
  {
    href: "https://in.pinterest.com/",
    logo: logoPinterest,
  },
  {
    href: "https://www.instagram.com/",
    logo: logoInstagram,
  },
];

export { footerNavLinks, footerSocialLinks };
