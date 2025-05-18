export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswerId: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  questions: Question[];
  selectedAnswerId: string | null;
  isAnswered: boolean;
  isCompleted: boolean;
}
