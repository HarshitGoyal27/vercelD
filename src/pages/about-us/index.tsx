import Navbar from "@/components/molecules/navbar";
import React from "react";
import aboutPageStyles from "./../../styles/aboutPageStyles.module.css";
import {
  AboutUsText,
} from "@/constants/texts";
import Image from "next/image";
import talentPoolStyles from "./../../styles/talentPoolStyles.module.css";
import HireDevSectionWithImageAndIcon from "@/components/molecules/HireDevSectionWithImageAndIcon";
import FotterComponent from "@/components/molecules/Fotter";
import leadershipimg from "../../assets/images/Leadership/Leaderimg.webp";
import hireDevStyles from "../../styles/hireDevStyles.module.css";


export default function About(){
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
            <div style={{ 
                marginLeft:'auto',
                marginRight:'auto',
                width:'20vw',
                textAlign:'center',
                fontFamily:'Geogrotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
                fontSize: '2.2rem',
                fontWeight: '500',
                lineHeight:'2.8rem',
            }}>
                <p>
                    Why SkillsCapital?
                </p>
            </div>
            <div style={{display:'flex',width:'70vw',marginLeft:'auto',marginRight:'auto',flexWrap:'wrap',justifyContent:'space-around'}}>
                <div className="first">Content</div>
                <div className="first">Content</div>
                <div className="first">Content</div>
                <div className="first">Content</div>
                <div className="first">Content</div>
                <div className="first">Content</div>
            </div>
            <div style={{backgroundColor:'#1E2866',width:'100%',height:'70vh'}}>
                <p style={{
                textAlign:'center',
                fontFamily:'Geogrotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
                fontSize: '2.2rem',
                fontWeight: '500',
                lineHeight:'2.8rem',
                color:'white',
                marginBottom:'20vh'
                }}
                >Our Mission & Vision</p>
                <div style={{display:'flex',width:'70vw',marginLeft:'auto',marginRight:'auto',justifyContent:'space-between'}}>
                    <div className="second">Content</div>
                    <div className="second">Content</div>
                    <div className="second">Content</div>
                </div>
            </div>
            <div style={{display:'flex',marginTop:'10vh',marginLeft:'40px'}}>
                <div style={{ textAlign:'center',
                fontFamily:'Geogrotesque, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
                fontSize: '2.2rem',
                fontWeight: '500',
                lineHeight:'2.8rem',}}>Our Values
                <p>Content...</p>
                </div>
                <div style={{display:'flex',width:'70vw',marginLeft:'auto',marginRight:'auto',justifyContent:'space-between',flexWrap:'wrap'}}>
                    <div className="second">Content</div>
                    <div className="second">Content</div>
                    <div className="second">Content</div>
                    <div className="second">Content</div>
                    <div className="second">Content</div>
                    <div className="second">Content</div>
                </div>
            </div>
            <p style={{marginLeft:'auto',marginRight:'auto',width:'15vw',marginTop:'25vh',fontSize:'1.5rem'}}>OUR CLIENTS</p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image 
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_1.png`}
                  alt="Logo"
                  height={90}
                  width={260}
                  style={{marginTop:"0px", borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_2.jpg`}
                  alt="Logo"
                  height={90}
                  width={160}
                  style={{marginTop:"0px", borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_3.jpg`}
                  alt="Logo"
                  height={80}
                  width={160}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_4.jpeg`}
                  alt="Logo"
                  height={90}
                  width={180}
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_5.jpg`}
                  alt="Logo"
                  height={80}
                  width={270}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_6.png`}
                  alt="Logo"
                  height={60}
                  width={240}
                  style={{borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_7.jpg`}
                  alt="Logo"
                  height={80}
                  width={170}
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_8.jpeg`}
                  alt="Logo"
                  height={70}
                  width={250}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_9.jpg`}
                  alt="Logo"
                  height={50}
                  width={230}
                  style={{marginTop:"27px"}}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_10.jpeg`}
                  alt="Logo"
                  height={80}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_11.jpg`}
                  alt="Logo"
                  height={80}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              
              <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px",height:"100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_13.jpg`}
                  alt="Logo"
                  height={50}
                  width={240}
                  style={{marginTop:"30px", borderRadius: "10px" }}
                />
              </div>


            </div>
            <style jsx>
                {`
                    .first{
                        width:20vw;
                        height:25vh;
                        background-color:#F2EFEA;
                        margin-bottom:1vw;
                        box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }
                    .second{
                        width:20vw;
                        height:25vh;
                        background-color:#1E2866;
                        margin-bottom:1vw;
                        box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }
                `}
            </style>
        </>
    )
}