"use client"
import Image from "next/image";
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from "react";
// import * as mammoth from 'mammoth';
import mammoth from 'mammoth';
import style from "../../styles/resumeJobScoreStyle.module.css"
import { DEV_PUBLIC_URL, SCORE_URL } from "../../../configs/auth";
interface type {
    name: string,
    resume: string,
    urls:string[]
}
interface output {
    name: string,
    percent: string,
    
}
export async function convertDocxToText(docxFilePath: string): Promise<string> {
    const result = await mammoth.extractRawText({ path: docxFilePath });
    return result.value; // Extracted text
}

export default function Home() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [text, setText] = useState<{ resume: [], jobDesc: string }>({ resume: [], jobDesc: "" });
    const [resumeArray, setResumeArray] = useState<type[]>([]);
    const [job, setJob] = useState<string>("");
    const [data, setdata] = useState<output[]>()
    const handleRemove = () => {
        setSelectedFile(null);
    };
    const handleResumeChange = async (event: ChangeEvent<HTMLInputElement>) => {

        const files = event.target.files;

        if (files) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const name = file.name;
                if (file) {
                    const reader = new FileReader();
                    reader.onload = async (e) => {
                        if (e.target?.result instanceof ArrayBuffer) {
                            const arrayBuffer = e.target.result;
                            const result = await mammoth.extractRawText({ arrayBuffer });
                            const urls = extractUrls(result.value);
                            const resumeObj = { name: name, resume: result.value,urls:urls };
                            
                            setResumeArray(prev => [...prev, resumeObj]);
                        }
                    };
                    reader.readAsArrayBuffer(file);
                }
            }
        }

    };
    const extractUrls = (text: string): string[] => {
        const regex = /\bhttps?:\/\/\S+/gi;
        return text.match(regex) || [];
    };
    const handleJobChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                if (e.target?.result instanceof ArrayBuffer) {
                    const arrayBuffer = e.target.result;
                    console.log("job");
                    const result = await mammoth.extractRawText({ arrayBuffer });
                    setJob(result.value)
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };
    useEffect(() => {
        // console.log("r", resumeArray);
        console.log("j", resumeArray)
    }, [resumeArray])
    const handleScoreUpload = async () => {
        try {
            // const linkedinInfo = await axios.post(`${DEV_PUBLIC_URL}linkedin/candidates`, { resumeArray: resumeArray});
            const resp = await axios.post(SCORE_URL, { resumeArray: resumeArray, job: job });
            console.log('resp', resp.data.data);
            setdata(resp.data.data);
        } catch (err) {
            console.log(err);
        }


    }
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <main style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1400px" }}>
                <div id={style.formContainer}>
                    <div id={style.mobileboxfile}>
                        <label htmlFor="resumeinputTag">

                            {!selectedFile && (<div className={style.drag} >
                                {/* <Image src="/xls.png" alt="el" height={48} width={55} /> */}
                                <span>Drop your resume or</span> <span style={{ color: "blue" }}>browse</span></div>)}
                            {selectedFile && (
                                <div className={style.drag} >
                                    <Image src="/xls.png" alt="el" height={48} width={55} />
                                    <p>Uploaded File: {selectedFile.name} </p>
                                    <button type='button' onClick={handleRemove} style={{ color: "blue" }}>Remove</button>
                                </div>
                            )}
                            <input id='resumeinputTag' style={{ display: "none" }} type="file" multiple name="resume" onChange={handleResumeChange} />
                        </label>
                        <button type='submit' id={style.button}  >Upload Resume</button>
                    </div>
                </div>
                <div className={style.formContainer} >
                    <div className={style.mobileboxfile} >
                        <label htmlFor="jobinputTag">

                            {!selectedFile && (<div className={style.drag}>
                                {/* <Image src="/xls.png" alt="el" height={48} width={55} /> */}
                                <span>Drop your Job description or</span> <span style={{ color: "blue" }}>browse</span></div>)}
                            {selectedFile && (
                                <div className={style.drag} >
                                    <Image src="/xls.png" alt="el" height={48} width={55} />
                                    <p>Uploaded File: {selectedFile.name} </p>
                                    <button type='button' onClick={handleRemove} style={{ color: "blue" }}>Remove</button>
                                </div>
                            )}
                            <input id='jobinputTag' style={{ display: "none" }} type="file" name="jobDesc" onChange={handleJobChange} />
                        </label>
                        <button type='submit' id={style.button}  >Upload Job Description</button>
                    </div>
                    
                </div>
                
            </main>
            <button type='submit' id={style.buttonfind} onClick={handleScoreUpload} >Find score</button>
            <div style={{width:"1300px", margin:"auto"}}>
            {data && <div style={{ backgroundColor: " rgb(243, 242, 242)", borderRadius: "8px", width: "90%" }}>
                <table style={{ padding: "15px", borderCollapse: 'separate', borderSpacing: '0 10px', width: "100%" }}>
                    <thead>
                        <tr>
                            <td>SI No.</td>
                            <td>File name</td>
                            <td style={{ width: "50%" }}>Score</td>
                        </tr>
                    </thead>

                    
                    {data?.map((item, index) => (
                        <tbody id='field' key={index}>
                            {Object.entries(item).map(([key, value]) => (
                                
                                <tr key={index} style={{ borderRadius: '15px', height: "50px", backgroundColor: "white" }}>
                                <td>{index}</td>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                            ))}
                        </tbody>
                    ))}
                </table>
            </div>}
            </div>

        </div>
    );
}
