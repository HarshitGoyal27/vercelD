import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { DEV_PUBLIC_URL } from "../../../configs/auth";
import Chip from "@mui/material/Chip";
import leadershipimg from "../../assets/images/Leadership/Leaderimg.webp";
import vince from "../../assets/images/Leadership/vince.jpeg";
import dan from "../../assets/images/Leadership/dan.jpeg";
import william from "../../assets/images/Leadership/William Shin.jpeg";
import uwe from "../../assets/images/Leadership/uwe.jpg";
import fedrico from "../../assets/images/Leadership/fedrico.jpeg";
import christope from "../../assets/images/Leadership/Christophe.jpeg";
import olaf from "../../assets/images/Leadership/Olaf Rabe.jpg";
import pradeep from "../../assets/images/Leadership/Pradeep Kumar Singh.jpeg";
import kamal from "../../assets/images/Leadership/kamal.jpeg";
import Abhishek from "../../assets/images/Leadership/abhishek.jpeg";
import rajiv from "../../assets/images/Leadership/Rajiv Talwar.jpeg";
import atul from "../../assets/images/Leadership/atul.jpg";
import ashish from "../../assets/images/Leadership/Ashish Jadhav.jpg";
import pawan from "../../assets/images/Leadership/pawangupta.jpg"

import Image from "next/image";
import {LeadershipText} from "../../constants/texts";
//import leadershipStyles from "./../../styles/leadershipStyles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActions';

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
            <p className="para">Meet Our Executive Team</p>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                flexWrap:'wrap',
                alignItems:'center',
                marginLeft:'4vw',
                marginRight:'4vw',
                marginTop:'10vh',
                marginBottom:'10vh',
            }}>
                <Card sx={{ width: 350, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={vince}
                        alt="Vince's Photo"
                        height={200}
                        width={350}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Vince</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Executive VP (Strategy)</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>MBA - Wharton Business School</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-IBM, PwC, Deloitte, JPM, Hewlett Packard</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 350, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={dan}
                        alt="Vince's Photo"
                        height={200}
                        width={350}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Dan Schwartz</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Executive VP (Sales)</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>MBA - Loyola University, Maryland</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Trilogy, Ignite Technologies, Gensym, ARINC Inc.</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 350, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={william}
                        alt="Vince's Photo"
                        height={200}
                        width={350}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>William Shin</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Executive VP (Transformation)</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>MS Operations Research - University of California, Berkley</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Hewlett Packard, Infosys, DXC Technology, PwC, IBM</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <p className="para">Meet Our Execution Team</p>
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                flexWrap:'wrap',
                alignItems:'center',
                marginLeft:'4vw',
                marginRight:'4vw',
                marginTop:'10vh',
                marginBottom:'10vh'
            }}>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={uwe}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Uwe Utecht</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Innovation</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>Phd Neural Computer Science - Berlin Technical University</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Siemens, NDR, BBC Technologies</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={fedrico}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Dan Schwartz</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Federico</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>Master Degree - La Salle Int. Graduate School, Spain,</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Everis U.K, Accenture</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={christope}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Christopher</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Transformation</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>MBA - London Business School</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Hewlett Packard, Infosys, DXC Technology, PwC, IBM</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={olaf}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Olaf Rabe</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Sales</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>MBA - University of Hamburg</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Trilogy, Aurea, DuPoint</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                flexWrap:'wrap',
                alignItems:'center',
                marginLeft:'4vw',
                marginRight:'4vw',
                marginTop:'10vh',
                marginBottom:'10vh'
            }}>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={pradeep}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Pradeep Singh</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Engineering</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>B.Tech Computer Science - IIT Delhi</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>B.Tech Computer Science - IIT Delhi</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={kamal}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Kamal Sharma</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Delivery</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>B.Tech Computer Science - IIT Delhi</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Polaris, SCA, Click Software</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={vince}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Charu Agarwal</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director HR</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>BBA - CCS University</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Eximat Group</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={Abhishek}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Abhishek Jain</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Projects</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>B.Tech - NIT Kurushetra</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Wipro, TCS, Ramco Infotech</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                flexWrap:'wrap',
                alignItems:'center',
                marginLeft:'4vw',
                marginRight:'4vw',
                marginTop:'10vh',
                marginBottom:'10vh'
            }}>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={rajiv}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Rajiv Talwar</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director L&D</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>MBA - IMT Ghaziabad</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Telenor India, Bharti Airtel</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={pawan}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Pawan Gupta</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Technology</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>MBA London Business School</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Trilogy, Accenture, IBM, Hewlett Packard, Siemens</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={atul}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Atul Jain</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Director Operations</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>SMP - IIM Ahemadabad</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-GE Capital, Acrotend, TCS</div>
                        </div>
                    </CardContent>
                </Card>
                <Card sx={{ width: 300, height:400, marginBottom: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src={ashish}
                        alt="Vince's Photo"
                        height={200}
                        width={300}
                        style={{ borderRadius: '10px 10px 0 0' ,objectFit:'contain'}} // Ensuring the image fills the container without stretching
                    />
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>Ashish Jadhav</h2>
                            <div style={{ marginBottom: '5px', fontSize: '1rem' }}>Technology Lead</div>
                            <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>B Tech - IIT Delhi</div>
                            <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>Ex-Trident, London Strategy & Consulting Group</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <style jsx>{`
                .para{
                    margin-left:8vw;
                    font-size:1.5rem;
                }
            `}</style>
        </>
    )
}