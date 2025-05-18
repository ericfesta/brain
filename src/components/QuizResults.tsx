import React from 'react';
import { Brain } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;
  
  let message = '';
  let emoji = '';
  
  if (percentage === 100) {
    message = "Perfect! Your neurons are dancing with joy!";
    emoji = "🏆";
  } else if (percentage >= 80) {
    message = "Excellent! Your brain is in top shape!";
    emoji = "🌟";
  } else if (percentage >= 60) {
    message = "Good job! Your neurons are getting stronger!";
    emoji = "💪";
  } else if (percentage >= 40) {
    message = "Not bad! Keep exercising those brain cells!";
    emoji = "🧠";
  } else {
    message = "Room for improvement! Your neurons are ready for more training!";
    emoji = "📚";
  }

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
            <Brain size={40} className="text-indigo-600 dark:text-indigo-300" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Quiz Completed!</h2>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">{message}</p>
        
        <div className="text-6xl mb-6">{emoji}</div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-2">Your Score</h3>
          <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-300">
            {score} / {totalQuestions}
          </div>
          <p className="text-lg text-indigo-800 dark:text-indigo-200 mt-2">
            {percentage}% Correct
          </p>
        </div>
        
        <button
          onClick={onRestart}
          className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 text-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
