import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/pollyramaselele'},
    { icon: <FaGithub />, path: 'https://github.com/polly-r'},
    { icon: <FaInstagram />, path: 'https://www.instagram.com/pollyr.e/'},
]

const Social = ({ containerStyles, iconStyles, }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
};


export default Social;