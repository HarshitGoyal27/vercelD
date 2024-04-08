import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { DEV_PUBLIC_URL } from "../../../configs/auth";
import Chip from "@mui/material/Chip";
import leadershipimg from "../../assets/images/Leadership/Leaderimg.webp";
import Image from "next/image";
import {LeadershipText} from "../../constants/texts";
//import leadershipStyles from "./../../styles/leadershipStyles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Leadership(){
    return (
        <>
            <Image
                style={{
                    width: "100vw",
                    height: "40vh",
                    flexShrink: "0",
                }}
                src={leadershipimg}
                alt="OUR LEADERSHIP"
                />
            <div>
                <p style={{
                    fontFamily:'Geogrotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
                    fontSize: '2.2rem',
                    fontWeight: '300',
                    lineHeight:'2.8rem',
                    width:'70vw',
                    marginLeft:'auto',
                    marginRight:'auto',
                    textAlign:'center',
                }}>
                    {LeadershipText.LeadershipContent}
                </p>
                <p style={{
                    fontFamily:'Geogrotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
                    fontSize: '2.2rem',
                    fontWeight: '500',
                    lineHeight:'2.8rem',
                    width:'70vw',
                    textAlign:'left',
                    marginLeft:'8vw'
                }}>
                    Meet our Board of Directors
                </p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Card sx={{ maxWidth: 500, maxHeight: 1000 ,marginBottom:'10px'}}>
                
                    <CardContent>
                    <h3>
                        DIRECTOR IMAGE
                    </h3>
                    <div>
                        DIRECTOR CONTENT
                    </div>
                    </CardContent>
                
            </Card>
            <Card sx={{ maxWidth: 500, maxHeight: 1000 ,marginBottom:'10px'}}>
                
                    <CardContent>
                    <h3>
                        DIRECTOR IMAGE
                    </h3>
                    <div>
                        DIRECTOR CONTENT
                    </div>
                    </CardContent>
                
            </Card>
            <Card sx={{ maxWidth: 500, maxHeight: 1000 ,marginBottom:'10px'}}>
                
                    <CardContent>
                    <h3>
                        DIRECTOR IMAGE
                    </h3>
                    <div>
                        DIRECTOR CONTENT
                    </div>
                    </CardContent>
                
            </Card>
            </div>
        </>
    )
}