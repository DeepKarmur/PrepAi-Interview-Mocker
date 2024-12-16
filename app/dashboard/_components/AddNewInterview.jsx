"use client" //when we want to validate data before sending it to the web server, adjusting the interface in response to user feedback, and for implementing other advanced features
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAiModal';
import { LoaderCircle } from 'lucide-react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { useRouter } from 'next/navigation';
  

function AddNewInterview() {

    const [openDailog, setOpenDailog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [jsonResp, setJsonResp] = useState([]);
    const router = useRouter();
    const {user} = useUser();

    const onSubmit=async(e)=>{
        setLoading(true);
        e.preventDefault()
       console.log(jobPosition, jobDesc, jobExperience);

       const InputPromt="Job Position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience: "+jobExperience+", Depends on this information give me "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview Questions with Answered in JSON Format. Give me Question and Answer field as JSON."
  
       const result = await chatSession.sendMessage(InputPromt);
       
       const MockJsonResp = (result.response.text().replace('```json','').replace('```',''));
       console.log(JSON.parse(MockJsonResp));
       //console.log(JSON.parse(MockJsonResp));
       setJsonResp(MockJsonResp);

       if(MockJsonResp){
       //storing question and ans respose in database.
       const resp = await db.insert(MockInterview).values({
        mockId:uuidv4(),
        jsonMockResp:MockJsonResp,
        jobPosition:jobPosition,
        jobDesc:jobDesc,
        jobExperience: jobExperience || "N/A", // Default value
        //jobExp:jobExp,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-yyyy')
       }).returning({mockId:MockInterview.mockId});

       console.log("Inserted ID:",resp);
       if(resp){
        setOpenDailog(false);
        router.push('/dashboard/interview/'+resp[0]?.mockId)
       }
    } else {
      console.log("ERROR");
    }
       setLoading(false);
    }
  return (
    <div>
        <div className='p-10 border rounded-lg bg-gray-300 hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setOpenDailog(true)}>
            <h2 className='font-bold text-lg text-center'>+ Add New</h2>
        </div>
    <Dialog open={openDailog}>
      <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-2xl">Tell us more about your job Interviewing</DialogTitle>
        <DialogDescription>
        <form onSubmit={onSubmit}>
         <div>
            <h2>Add Details about your job position/role, Job Description and Years of Experience</h2>
        <div className='mt-7 my-3'>
            <label>Job Role/Job Position</label>
            <Input placeholder="Ex. Full Stack Developer" required
              onChange={(event)=> setJobPosition(event.target.value)} />
        </div>

        <div className='my-2'>
            <label>Job Description/ Tech Stack</label>
            <Textarea placeholder="Ex. React, Angular, MySql, etc" required
              onChange={(event)=> setJobDesc(event.target.value)} />
        </div>
 
        <div className='my-2'>
            <label>Years of experience</label>
            <Input placeholder="Ex.5" type="number" max="50" required
               onChange={(event)=> setJobExperience(event.target.value)} />
        </div>

         </div>
         <div className='flex gap-5 justify-end'>
            <Button type="button" variant="ghost" onClick={()=> setOpenDailog(false)}>Cancel</Button>
            <Button type="submit" disabled={loading} >
              {loading ?  <>
                <LoaderCircle className='animate-spin'/>'Generating from AI'
                </>:'Start Interview'
              }
            </Button>
         </div>
         </form>
        </DialogDescription>
      </DialogHeader>
      </DialogContent> 
    </Dialog>

    </div>
  )
}

export default AddNewInterview
