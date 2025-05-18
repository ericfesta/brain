import React from 'react';
import { Question } from '../types/quiz';
import QuizOption from './QuizOption';

interface QuizQuestionProps {
  question: Question;
  selectedAnswerId: string | null;
  isAnswered: boolean;
  onSelectAnswer: (answerId: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswerId,
  isAnswered,
  onSelectAnswer,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{question.text}</h2>
      </div>
      
      <div className="space-y-2">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            option={option}
            isSelected={selectedAnswerId === option.id}
            isAnswered={isAnswered}
            isCorrect={option.id === question.correctAnswerId}
            onClick={() => onSelectAnswer(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
