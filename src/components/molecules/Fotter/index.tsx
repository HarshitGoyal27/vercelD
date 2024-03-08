// components/Footer.js

import React from "react";
import css from "./../../../styles/best.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import { FooterPageText } from "@/constants/texts";

const FotterComponent = () => {
  return (
    <footer className={css.footer}>
      {/* 1st Division */}
      <div className={css.division1}>
        <div>
          <p>Skills Capital</p>
        </div>
        <div  >
          <a href="#" className={css.socialIcon}>
            <TwitterIcon sx={{ color: "white" }} />
          </a>
          <a href="#" className={css.socialIcon}>
            <FacebookIcon sx={{ color: "white" }} />
          </a>
          <a href="#" className={css.socialIcon}>
            <InstagramIcon sx={{ color: "white" }} />
          </a>
          <a href="https://www.linkedin.com/company/skillscapital/" target="_blank" className={css.socialIcon}>
            <LinkedInIcon sx={{ color: "white" }} />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>

      {/* 2nd Division */}
      <div className={css.division}>
        <h4>Pages</h4>
        <li>
          <Link href="/"  >
            Home
          </Link>
        </li>

        <li>
          <Link href="/hire-developers"  >
            Hire Developers
          </Link>
        </li>
        <li>
          <Link href="/contact-us"  >
            Contact Us
          </Link>
        </li>
        {/* <li>
          <Link href="/talent-pool" >
            Talent Pool
          </Link>
        </li>
        <li>
          <Link href="/vetting"  >
            Vetting
          </Link>
        </li>
        <li>
          <Link href="/about" >
            About
          </Link>
        </li> */}
      </div>

      {/* 3rd Division */}
      <div className={css.division}>
        <h4>Services</h4>

        <li>
          <Link href="/talent-pool#faq" >
            {FooterPageText.servicesPoint1}
          </Link>
        </li>
        <p>{FooterPageText.servicesPoint2}</p>
        <p>{FooterPageText.servicesPoint3}</p>
      </div>
      {/* 4th Division */}
      <div className={css.division}>
        <h4>Contact</h4>
        <p>{FooterPageText.phone}</p>
        <p>{FooterPageText.email}</p>
        <div>Address: <div style={{ fontSize: "11px" }}><div>{FooterPageText.address1}</div>
          <div>{FooterPageText.address2}</div></div>
        </div>
      </div>
    </footer>
  );
};

export default FotterComponent;
