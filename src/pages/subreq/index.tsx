import React, { useState } from 'react';
import Stepone from "../../components/subreq/step1";
import Steptwo from '../../components/subreq/step2';
import Stepthree from '../../components/subreq/step3';
import Stepfour from '../../components/subreq/step4';
import Thankyou from '../../components/subreq/thankyou';
import dayjs, { Dayjs } from 'dayjs';
import Layout from '@/components/layout';
interface ClientInfo {
    Skills:string[];
    Name: string;
    Email: string;
    workEmail:string;
    Company_name: string;
    contact_number: string;
    meetingDate:string|null;
    Current_Timezone:string|null;
    workType:string;
    yearOfExp:number | number[];
}
const SubreqPage = () => {
    // const {selectedId,setSelectedId} = useGlobalContext();
    const [ClientData, setClientData] = useState<ClientInfo>({
        Skills:[],
        Name: "",
        Email: "",
        workEmail:"",
        Company_name: "",
        contact_number: "",
        meetingDate:null,
        Current_Timezone:'',
        workType:"",
        yearOfExp:0,
    })
    const [errors, setErrors] = useState({
        workEmail: '',
        contact_number: '',
        Email:''
      });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setClientData({ ...ClientData, [name]: value });
        console.log("profiles->", ClientData);
        validateField(name, value);
    };
    const validateField = (fieldName:string, value:string) => {
        let errorMessage = '';
    
        switch (fieldName) {
          case 'workEmail':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            errorMessage = !value.match(emailRegex) ? 'Invalid email address' : '';
            break;
            case 'Email':
            const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            errorMessage = !value.match(emailRe) ? 'Invalid email address' : '';
            break;
          case 'contact_number':
            const phoneRegex = /^[0-9]{10}$/;
            errorMessage = !value.match(phoneRegex) ? 'Invalid phone number (10 digits)' : '';
            break;
          default:
            break;
        }
    
        setErrors({ ...errors, [fieldName]: errorMessage });
      };
    const handleTimeZone = (event: React.ChangeEvent<{}>, value: string | null) => {
        if(value==="none"){
            setClientData({...ClientData,Current_Timezone:""});
        }else{
            setClientData({...ClientData, Current_Timezone:value});
        }
        console.log("profiles->", ClientData);
        
      }
      const [steps, setSteps] = useState(1);
 
        const handleNextStep = () => {
            setSteps((prevSteps) => prevSteps + 1);
        };
        const handledateTime=(data:Dayjs)=>{
            const currentDate: Dayjs = dayjs();
            const futureDate: Dayjs = currentDate.add(1, 'day');
            const formattedDate: string = futureDate.format('YYYY-MM-DDTHH:mm:ss');
            const newDate = `${formattedDate}+05:30`
            setClientData({ ...ClientData, meetingDate: newDate });
            console.log("profiles->", ClientData);
        }
        const handleRadioButton =(event: React.ChangeEvent<HTMLInputElement>)=>{
            setClientData({ ...ClientData, workType: (event.target as HTMLInputElement).value });
            console.log("profiles->", ClientData);
        }
        const [yearofExpValue, setYearofExpValue] = useState<number >(0);
        const handleYearofExp =(
            event: Event,
            newValue: number | number[],
          ) =>{
            setYearofExpValue(newValue as number);
            setClientData({ ...ClientData, yearOfExp:newValue as number | number[]}   );
            console.log("profiles->", ClientData);
        }
        const handlesetClientData = (dataskill:string[])=>{
            setClientData((prevData) => ({
                ...prevData,
                Skills: dataskill,
              }));
        }

    return (
        <>
         {steps === 1 && (
            <Stepone
                ClientData={ClientData}
                handlesetClientData={handlesetClientData}
                handleInputChange={handleInputChange}
                onNextStep={handleNextStep}
                errors={errors}
            />
            )}
         {steps===2 && <Steptwo  ClientData={ClientData} handledateTime={handledateTime} handleTimeZone={handleTimeZone}  onNextStep={handleNextStep} />}
         {steps===3 && <Stepthree ClientData={ClientData} errors={errors} handleInputChange={handleInputChange} handleRadioButton={handleRadioButton}  onNextStep={handleNextStep} />}
         {steps===4 && <Stepfour yearofExpValue={yearofExpValue}  ClientData={ClientData} handleYearofExp={handleYearofExp} onNextStep={handleNextStep}/>}
         {steps===5 && <Thankyou ClientData={ClientData} />}
        </>
    )
}

export default SubreqPage;
