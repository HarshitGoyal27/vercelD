import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import theinfoImage from "../../assets/images/20_theinformationImage.svg";
import fastCompanyImage from "../../assets/images/21_fastCompanyImage.svg";
import tcImage from "../../assets/images/17_tcImage.svg";
import forebsImage from "../../assets/images/18_forebsImage.svg";
import I_icon from "../../assets/images/19_IiconImage.svg";
import css from "../../styles/signin.module.css";
import Link from 'next/link';
import { HireDeveloperPageText } from '@/constants/texts';
import { Button, InputAdornment, TextField,IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
interface User_info{
    Email:string;
    password:string;
}
const SigninPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userInfo, setUserInfo] = useState<User_info>({
        Email:"",
        password:""
    });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setUserInfo({...userInfo, Email:e.target.value});
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setUserInfo({...userInfo, password:e.target.value});
  }
  useEffect(()=>{
    console.log(userInfo);
  },[userInfo])
    return (
        <div style={{ display: "flex" }}>
            <div className={css.logoContainer}>
                <div >
                    <Link href="/">
                        <Image
                            src="/HomePageImages/SkillsCapitalLogo.png"
                            width={200}
                            height={60}
                            alt="WorldImg"
                        />
                    </Link>
                </div>
                <div className={css.heading}>Work full-time with top componies</div>
                <div className={css.subheading}>We are backed by engineering executives and investors of</div>
                <div className={css.allLogo}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "-9px",
                        }}
                    >
                        <Image
                            style={{
                                width: "20.07px",
                                height: "20.07px",
                                flexShrink: "0",
                            }}
                            src={I_icon}
                            alt=""
                        />
                        <Image
                            style={{
                                width: "125.908px",
                                height: "23.262px",
                                flexShrink: "0",
                            }}
                            src={theinfoImage}
                            alt=""
                        />
                    </div>

                    <Image
                        style={{
                            width: "32px",
                            height: "31px",
                            flexShrink: "0",
                        }}
                        src={tcImage}
                        alt=""
                    />
                    <Image
                        style={{
                            width: "82.214px",
                            height: "25.94px",
                            flexShrink: "0",
                        }}
                        src={fastCompanyImage}
                        alt=""
                    />
                    <Image
                        style={{ width: "68px", height: "25px", flexShrink: "0" }}
                        src={forebsImage}
                        alt=""
                    />
                    {HireDeveloperPageText.BottomImagesIconsArray.map(
                        (source, index) => (
                            <Image
                                height={25}
                                width={100}
                                style={{ margin: "0px 10px" }}
                                key={index}
                                src={`/HireDevImages/Company${index + 1}.png`}
                                alt={`Image ${index}`}
                            />
                        )
                    )}
                </div>
            </div>
            <div className={css.formContainer}>
                <div>
                    <div>
                        <div style={{ fontSize: "28px" }}>
                            Sign in
                        </div>
                        <div className={css.register}>or <Link style={{ color: "#212121", fontSize: "16px", textDecoration: "none" }} href='/subreq'>create another account</Link> </div>
                    </div>
                    <div >
                        <form className={css.forma} action="">
                            <div>
                            <label htmlFor="Email">Email</label>
                            <TextField
                                size="small"
                                placeholder="Email"
                                name="Email"
                                value={userInfo.Email}
                                onChange={handleEmail}
                                fullWidth
                                margin="normal"
                                style={{ marginTop: "5px" }}
                            />
                            </div>
                            <div>
                            <label htmlFor="password">Password</label>
                            <TextField
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                value={userInfo.password}
                                onChange={handlePassword}
                                fullWidth
                                margin="normal"
                                style={{ marginTop: "5px"  }}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          edge="end"
                                        >
                                          {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                            </div>
                            <Button type="submit" variant="contained" color="primary">Sign in</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninPage
