// Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, useMediaQuery } from '@mui/material';
import { navLinks } from '@/constants/commonStyle';
import CustomButton from '@/components/atoms/button';
import css from "../../../styles/best.module.css";
import Image from 'next/image';
import { useRouter } from "next/router";
const Navbar: React.FC = () => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(max-width: 960px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const handleSignInButton = () => {
    router.push('/signin')
  };



  return (

    <div id={css.navbarContainer}>
      <Box component="div" >
        <Link href="/">
          <Image
            src="/HomePageImages/SkillsCapitalLogo.png"
            width={200}
            height={60}
            alt="WorldImg"
          />
        </Link>
      </Box>
      <Link href="/" style={navLinks}>
        Home
      </Link>
      <Link href="/hire-developers" style={navLinks}>
        Hire Developers
      </Link>
      <Link href="/contact-us" style={navLinks}>
        Contact Us 
      </Link>
      {/* <Link href="/talent-pool" style={navLinks}>
        Talent Pool
      </Link>
      <Link href="/vetting" style={navLinks}>
        Vetting
      </Link>
      <Link href="/about" style={navLinks}>
        About
      </Link>
      <CustomButton label='SignIn/SignUp' disabled={false} onClick={handleSignInButton} buttonStyle={{ margin: '15px' }} /> */}

    </div>

  );
};

export default Navbar;
