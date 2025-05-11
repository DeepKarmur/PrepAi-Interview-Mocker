"use client"
import useSpeechToText from 'react-hook-speech-to-text';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAiModal';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnswerSection({mockInterviewQuestion, activeQuestionIndex, onQuestionClick, interviewData}) {
    const [userAnswer, setUserAnswer] = useState('');
    const {user} = useUser();
    const [loading, setLoading] = useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(() => {
          results.map((result) => {
            setUserAnswer(prevAns=>prevAns+result?.transcript)
          })
      }, [results])

      useEffect(() => {
         if(!isRecording&&userAnswer.length>5){
          UpdateUserAnswer();
         }
      }, [userAnswer])

      const StartStopRecording = async() => {
        if(isRecording){
           stopSpeechToText();
        } else {
          startSpeechToText();
        }
      }

      const UpdateUserAnswer = async() => {
       
        console.log(userAnswer);
        setLoading(true)
        const feedbackPrompt = "Question:"+mockInterviewQuestion[activeQuestionIndex]?.Question+", User Answer:"+userAnswer+", Depends on question and user answerfor given interview question "+
        " please give us rating for answer and feedback for area of improvement if any "+" in just 5 to 6 lines to improve it in JSON format with rating field and feedback field";

        const result = await chatSession.sendMessage(feedbackPrompt);

        const MockJsonResp = (result.response.text().replace('```json','').replace('```',''));
        console.log(MockJsonResp);

        // const JsonFeedbackResp = JSON.parse(MockJsonResp);
        let JsonFeedbackResp = {};
        
        try {
          JsonFeedbackResp = JSON.parse(MockJsonResp); //🔥 Safe JSON parsing
        } catch (error) {
          console.error("🔥 JSON Parse Error:", error);
          toast("🔥 Error parsing feedback response");
          setLoading(false);
          return;
        }

      console.log(mockInterviewQuestion); // Check if the array contains objects with 'Answer'
      console.log(mockInterviewQuestion[activeQuestionIndex]); // Ensure the current question object exists
      console.log(mockInterviewQuestion[activeQuestionIndex]?.Answer); // Check if 'Answer' exists


        const resp=await db.insert(UserAnswer)
        .values({
          mockIdRef:interviewData?.mockId,
          question:mockInterviewQuestion[activeQuestionIndex]?.Question,
          correctAns: mockInterviewQuestion[activeQuestionIndex]?.Answer || mockInterviewQuestion[activeQuestionIndex]?.answer,
          //correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
          userAns:userAnswer,
          feedback:JsonFeedbackResp?.feedback,
          rating:JsonFeedbackResp?.rating,
          userEmail:user?.primaryEmailAddress?.emailAddress,
          createdAt:moment().format('DD-MM-yyyy')
        })

        if(resp){
         toast('User Answer Recorded Sucessfully');
         setUserAnswer('');
         setResults([]);
        }
        setResults([]);
        setLoading(false);
      }

  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col mt-20 justify-center items-center bg-secondary rounded-lg p-5'>
        <Image src={'/webcam.png'} width={150} height={150} className='absolute'/>
        <Webcam 
         mirrored={true}
         style={{
            height:250,
            width:'100%',
            zIndex:10,
        }}
        />
    </div>
    <Button 
      disabled={loading}
    variant="outline" className="my-10" 
     onClick={StartStopRecording}
    >
       {isRecording?
        <h2 className='text-red-600 flex gap-2'>
            <Mic /> 'Stop Recording'
        </h2> :
    'Record Answer'}</Button>

    {/* If we want to display text we are speakin on the screen in real time
    <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {results.map((result) => (
        <li key={result.timestamp}>{result.transcript}</li>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul> */}
    </div>
  )
}

export default RecordAnswerSection