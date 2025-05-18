import React from 'react';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
      <div 
        className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
        style={{ width: `${progress}%` }}
      ></div>
      <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;
