import React, { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { QuizState } from './types/quiz';
import QuizQuestion from './components/QuizQuestion';
import ProgressBar from './components/ProgressBar';
import QuizResults from './components/QuizResults';
import QuizHeader from './components/QuizHeader';
import { Heart } from 'lucide-react';

const initialState: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  questions,
  selectedAnswerId: null,
  isAnswered: false,
  isCompleted: false
};

function App() {
  const [quizState, setQuizState] = useState<QuizState>(initialState);
  const [showNextButton, setShowNextButton] = useState(false);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const handleSelectAnswer = (answerId: string) => {
    if (quizState.isAnswered) return;

    setQuizState(prev => ({
      ...prev,
      selectedAnswerId: answerId,
      isAnswered: true,
      score: answerId === currentQuestion.correctAnswerId 
        ? prev.score + 1 
        : prev.score
    }));

    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1;
    
    if (nextIndex < quizState.questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswerId: null,
        isAnswered: false
      }));
      setShowNextButton(false);
    } else {
      setQuizState(prev => ({
        ...prev,
        isCompleted: true
      }));
    }
  };

  const handleRestartQuiz = () => {
    setQuizState(initialState);
    setShowNextButton(false);
  };

  // Auto-advance to next question after a delay
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (quizState.isAnswered && !quizState.isCompleted) {
      timer = setTimeout(() => {
        handleNextQuestion();
      }, 1500);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [quizState.isAnswered, quizState.isCompleted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
        <QuizHeader />
        
        {!quizState.isCompleted ? (
          <>
            <ProgressBar 
              currentQuestion={quizState.currentQuestionIndex + 1} 
              totalQuestions={quizState.questions.length} 
            />
            
            <QuizQuestion 
              question={currentQuestion}
              selectedAnswerId={quizState.selectedAnswerId}
              isAnswered={quizState.isAnswered}
              onSelectAnswer={handleSelectAnswer}
            />
            
            {showNextButton && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleNextQuestion}
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
                >
                  {quizState.currentQuestionIndex === quizState.questions.length - 1 
                    ? 'See Results' 
                    : 'Next Question'}
                </button>
              </div>
            )}
          </>
        ) : (
          <QuizResults 
            score={quizState.score} 
            totalQuestions={quizState.questions.length}
            onRestart={handleRestartQuiz}
          />
        )}
      </div>
      
      <footer className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p className="flex items-center justify-center">
          Made with <Heart size={16} className="mx-1 text-red-500 fill-red-500" /> and{" "}
          <a 
            href="https://chatandbuild.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-1 text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            ChatAndBuild
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
