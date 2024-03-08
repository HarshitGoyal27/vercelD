import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import css from "../../../styles/jobs.module.css";
import JobProfileCarausel from '@/components/molecules/JobProfileCarausel';
import { DEV_PUBLIC_APIURL } from '../../../../configs/auth';
import axios from 'axios';
const Skillsprofiles = (props:any) => {
    const { page_data } = props;
    return (
        <div>
            <div style={{ marginLeft: "150px" }}>
                <Link href="/">
                    <Image
                        src="/HomePageImages/SkillsCapitalLogo.png"
                        width={200}
                        height={60}
                        alt="WorldImg"
                    />
                </Link>
            </div>
            <section className={css.headingContainer} >
                <div className={css.content}>
                    <div className={css.heading}>Remote {page_data.Skill} jobs</div>
                    <div className={css.headingDesc}>{page_data.Description}</div>
                    <Button variant="contained" style={{ width: "300px", height: "50px" }}>Apply as {page_data.Skill}</Button>
                </div>
                <div>
                    <Image
                        src="/HomePageImages/remoteDeveloper.jpg"
                        width={500}
                        height={400}
                        alt="WorldImg"
                    />
                </div>
            </section>
            <section className={css.clients}>
                <div>Find remote software jobs with hundreds of skillscapital clients</div>
                <div className={css.clientImages}>
                    <Image
                        height={30}
                        width={100}
                        style={{ margin: "0px 10px" }}
                        src={`/HireDevImages/Company${1}.png`}
                        alt={`Image 1`}
                    />
                    <Image
                        height={30}
                        width={100}
                        style={{ margin: "0px 10px" }}
                        src={`/HireDevImages/Company${2}.png`}
                        alt={`Image 2`}
                    />
                    <Image
                        height={25}
                        width={100}
                        style={{ margin: "0px 10px" }}
                        src={`/HireDevImages/Company${3}.png`}
                        alt={`Image 3`}
                    />
                    <Image
                        height={25}
                        width={100}
                        style={{ margin: "0px 10px" }}
                        src={`/HireDevImages/Company${4}.png`}
                        alt={`Image 4`}
                    />

                </div>
            </section>
            <section className={css.jobdesc}>
                <div className={css.jobdescContent} >
                    <div className={css.jobdescHeading}>Job description</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
                        <div className={css.flexgap1}>
                            <div className={css.jobrespon}>Job responsibilities</div>
                            <div className={css.jobresponContent} >
                            {/* <FiberManualRecordIcon sx={{ fontSize: "10px" }} */}
                                <div>  {page_data.Preferred_Skills[0]}</div>
                                <div>{page_data.Preferred_Skills[1]}</div>
                                <div> {page_data.Preferred_Skills[2]}</div>
                                <div> {page_data.Preferred_Skills[3]}</div>
                                <div> {page_data.Preferred_Skills[4]}</div>
                            </div>
                        </div>
                        <div className={css.flexgap1}>
                            <div className={css.jobrespon}>Minimum requirements</div>
                            <div className={css.jobresponContent} >
                                <div>  {page_data.Requirements[0]}</div>
                                <div> {page_data.Requirements[1]}</div>
                                <div> {page_data.Requirements[2]}</div>
                                <div> {page_data.Requirements[3]}</div>
                                <div> {page_data.Requirements[4]}</div>
                            </div>
                        </div>
                        <div className={css.flexgap1}>
                            <div className={css.jobrespon}>Preferred skills</div>
                            <div className={css.jobresponContent} >
                                <div> {page_data.Roles[0]}</div>
                                <div> {page_data.Roles[1]}</div>
                                <div> {page_data.Roles[2]}</div>
                                <div> {page_data.Roles[3]}</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <div>
                        <JobProfileCarausel />
                    </div>
                    <div className={css.container}>
                        <div className={css.iconsContainer}>
                            <div style={{ fontSize: "18px" }}>Based on your skills</div>
                            <div className={css.skillsIcons}>
                                <div className={css.iconBox}><Image src="/JobsPageImages/css.png" alt="css" height={20} width={20} /><span>css</span> </div>
                                <div className={css.iconBox}><Image src="/JobsPageImages/python.png" alt="css" height={20} width={20} /><span>python</span></div>
                                <div className={css.iconBox}><Image src="/JobsPageImages/html.png" alt="css" height={20} width={20} /><span>html</span></div>
                                <div className={css.iconBox}><Image src="/JobsPageImages/sql.png" alt="css" height={20} width={20} /><span>sql</span></div>
                            </div>
                        </div>
                        <div className={css.iconsContainer}>
                            <div style={{ fontSize: "18px" }}>Based on your role</div>
                            <div className={css.skillsIcons}>
                                <div className={css.iconBox}><Image src="/JobsPageImages/mobile.png" alt="css" height={20} width={20} /><span>Mobile</span> </div>
                                <div className={css.iconBox}><Image src="/JobsPageImages/devops.png" alt="css" height={20} width={20} /><span>DevOps</span></div>
                                <div className={css.iconBox}><Image src="/JobsPageImages/fullstack.png" alt="css" height={20} width={20} /><span>Fullstack</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.joinSkills} >
                <div className={css.jobdescHeading}>Why join Skillscapital?</div>
                <div style={{ display: "flex", gap: "50px" }}>
                    <div className={css.flexgap}>
                        <div className={css.whyjoinImages}><Image src="/JobsPageImages/elite.jpg" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Elite Jobs</div>
                        <div className={css.whyjoinContent}>Turing developers earn better than market pay in most countries, working with top US companies.</div>
                    </div>
                    <div className={css.flexgap}>
                        <div className={css.whyjoinImages}><Image src="/JobsPageImages/growth.jpg" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Career Growth</div>
                        <div className={css.whyjoinContent}>Grow rapidly by working on challenging technical and business problems on the latest technologies.</div>
                    </div>
                    <div className={css.flexgap}>
                        <div className={css.whyjoinImages}><Image src="/JobsPageImages/support.jpg" alt="css" height={200} width={200} /></div>
                        <div className={css.jobrespon}>Developer success support</div>
                        <div className={css.whyjoinContent}>While matched, enjoy 24/7 developer success support.</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context:any){
      const responseData = await axios.get(`${DEV_PUBLIC_APIURL}${context.query.skills}`)
      
      const page_data = responseData.data.data
    return {
        props:{page_data},
    }
}

export default Skillsprofiles;