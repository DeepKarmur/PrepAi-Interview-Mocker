"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

//params is an object that contains dynamic route parameters used to generate pages dynamically based on the URL. depends on varying data.
function Interview({params}) {
    const { interviewId } = params; 
    const [interviewData, setInterviewData] = useState(null);
    const [webCamEnabled, setWebCamEnabled] = useState(false);

   useEffect(() => {
    console.log(params.interviewId)
    GetInterviewDetails();
   }, [interviewId])
 
   //used to get interview details using mockid
   const GetInterviewDetails = async() => {
     const result = await db.select().from(MockInterview)
     .where(eq(MockInterview.mockId, params.interviewId))

    // console.log(result);
     setInterviewData(result[0]);
   }
  return (
    <div className='my-7'>
        <h2 className='font-bold text-xl'>Let's Get Started</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

        <div className='flex flex-col my-5 gap-5'>
          <div className='flex flex-col p-2 rounded-lg border gap-5'>
          
          {interviewData ? (
                            <>
                                <h2 className='text-lg'><strong>Job Role/Job Position: </strong>{interviewData.jobPosition}</h2>
                                <h2 className='text-lg'><strong>Job Description/Tech Stack: </strong>{interviewData.jobDesc}</h2>
                                <h2 className='text-lg'><strong>Years of Experience: </strong>{interviewData.jobExperience}</h2>
                            </>
                        ) : (
                            <p>Loading interview details...</p>
            )}
          </div>
        <div className='p-2 border rounded-lg border-yellow-300 bg-yellow-100'>
            <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
            <h2 className='text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
        </div>
        </div>
        <div>
            {webCamEnabled ? <Webcam 
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
               style={{
                height:300,
                width:300
               }}
            /> : 
            <>
            <WebcamIcon className='h-64 w-full my-4 p-10 bg-secondary rounded-lg border'/>
            <Button  className='w-full bg-gray-600'
            onClick={() => setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
            </>
        }         
        </div>
        
    </div>
    <div className='flex justify-end items-end'>
      <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button >Start Interview</Button>
      </Link>
    </div>
       
    </div>
  )
}

export default Interview