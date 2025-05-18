import React from 'react';
import { Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const QuizHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 relative">
      <div className="absolute right-0 top-0">
        <ThemeToggle />
      </div>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
          <Brain size={32} className="text-indigo-600 dark:text-indigo-300" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">B.R.A.I.N.</h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg italic">Make your neurons proud.</p>
    </div>
  );
};

export default QuizHeader;
