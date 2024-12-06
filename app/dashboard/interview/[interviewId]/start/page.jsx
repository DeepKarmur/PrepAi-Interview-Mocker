"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';       
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({params}) {

  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  
  useEffect(() => {
      GetInterviewDetails();
  }, [params.interviewId]); // Added dependency

  const GetInterviewDetails = async () => {
      try {
          const result = await db.select().from(MockInterview)
              .where(eq(MockInterview.mockId, params.interviewId));
          
          if (result && result.length > 0) {
              const jsonMockResp = JSON.parse(result[0].jsonMockResp);
              console.log(jsonMockResp);
              setMockInterviewQuestion(jsonMockResp);
              setInterviewData(result[0]);
          } else {
              console.error("No interview data found");
          }
      } catch (error) {
          console.error("Error fetching interview details:", error);
      }
  }

  const handleQuestionClick = (index) => {
      setActiveQuestionIndex(index);
  }
  
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/*Questions*/}
        <QuestionSection 
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            onQuestionClick={handleQuestionClick}
        />
        {/*Video / Audio Recording*/}
        <RecordAnswerSection 
           mockInterviewQuestion={mockInterviewQuestion}
           activeQuestionIndex={activeQuestionIndex}
           onQuestionClick={handleQuestionClick}
           interviewData={interviewData}
        />
        </div>
        <div className='flex justify-end gap-6'>
           {activeQuestionIndex>0&& 
           <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)} className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">Previous Question</Button> }

          {activeQuestionIndex!=mockInterviewQuestion?.length-1&& 
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)} className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                Next Question</Button> }

           {activeQuestionIndex==mockInterviewQuestion?.length-1&& 
           <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
           <Button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                End Interview</Button>
            </Link> }
        </div>
    </div>
  )
}

export default StartInterview
