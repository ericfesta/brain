import React from 'react';
import { Option } from '../types/quiz';

interface QuizOptionProps {
  option: Option;
  isSelected: boolean;
  isAnswered: boolean;
  isCorrect: boolean;
  onClick: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ 
  option, 
  isSelected, 
  isAnswered, 
  isCorrect, 
  onClick 
}) => {
  let bgColor = 'bg-white dark:bg-gray-800';
  let borderColor = 'border-gray-300 dark:border-gray-600';
  let textColor = 'text-gray-800 dark:text-gray-200';
  
  if (isAnswered) {
    if (isCorrect) {
      bgColor = 'bg-green-100 dark:bg-green-900';
      borderColor = 'border-green-500 dark:border-green-700';
      textColor = 'text-green-800 dark:text-green-200';
    } else if (isSelected && !isCorrect) {
      bgColor = 'bg-red-100 dark:bg-red-900';
      borderColor = 'border-red-500 dark:border-red-700';
      textColor = 'text-red-800 dark:text-red-200';
    }
  } else if (isSelected) {
    bgColor = 'bg-indigo-100 dark:bg-indigo-900';
    borderColor = 'border-indigo-500 dark:border-indigo-700';
    textColor = 'text-indigo-800 dark:text-indigo-200';
  }

  return (
    <button
      onClick={onClick}
      disabled={isAnswered}
      className={`w-full p-4 mb-3 rounded-lg border-2 ${borderColor} ${bgColor} ${textColor} 
        text-left transition-all duration-200 flex items-center
        hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-800 disabled:cursor-default`}
    >
      <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 font-bold">
        {option.id}
      </span>
      <span className="text-lg">{option.text}</span>
      {isAnswered && isCorrect && (
        <span className="ml-auto text-green-600 dark:text-green-400 font-bold">✓</span>
      )}
      {isAnswered && isSelected && !isCorrect && (
        <span className="ml-auto text-red-600 dark:text-red-400 font-bold">✗</span>
      )}
    </button>
  );
};

export default QuizOption;
