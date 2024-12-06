import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react'

function QuestionSection({mockInterviewQuestion, activeQuestionIndex, onQuestionClick}) {
    console.log("mockInterviewQuestion: ", mockInterviewQuestion);
    console.log("activeQuestionIndex: ", activeQuestionIndex);

    if (!mockInterviewQuestion || mockInterviewQuestion.length === 0) {
        return <div>Loading questions...</div>;
    }

    const textToSpeach = (text) => {
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        } else {
            alert('Sorry, your brower does not support text to speech')
        }
    }

    return (
        <div className='p-5 border rounded-lg'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {mockInterviewQuestion.map((question, index) => (
                    <h2 
                        key={index}
                        onClick={() => onQuestionClick(index)}
                        className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer
transition duration-300 ease-in-out transform hover:scale-105 shadow-lg font-semibold tracking-wide 
                        ${activeQuestionIndex === index ? 'bg-blue-400 text-white ' : 'bg-white text-gray-700 border-blue-600'}`}
                    >
                        Question #{index + 1}
                    </h2>
                ))}
            </div>
            <h2 className='my-5 text-sm md:text-md'>
                {mockInterviewQuestion[activeQuestionIndex]?.Question || 'Question not available'}
            </h2>
            <Volume2 className='cursor-pointer' onClick={() => textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.Question || 'Question not available')}/>
            <div className='border rounded-lg p-5 bg-blue-300 mt-10'>
                <h2 className='flex gap-2 items-center text-blue-700'>
                    <Lightbulb />
                    <strong>Note: </strong>
                </h2>
                <h2 className='text-sm text-blue-700 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
            </div>
        </div>
    )
}

export default QuestionSection
