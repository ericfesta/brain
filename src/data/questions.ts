import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: [
      { id: "A", text: "Berlin" },
      { id: "B", text: "Madrid" },
      { id: "C", text: "Paris" },
      { id: "D", text: "Rome" }
    ],
    correctAnswerId: "C"
  },
  {
    id: 2,
    text: "What is 5 × 6?",
    options: [
      { id: "A", text: "11" },
      { id: "B", text: "30" },
      { id: "C", text: "56" },
      { id: "D", text: "25" }
    ],
    correctAnswerId: "B"
  },
  {
    id: 3,
    text: "Which planet is known as the Red Planet?",
    options: [
      { id: "A", text: "Venus" },
      { id: "B", text: "Mars" },
      { id: "C", text: "Jupiter" },
      { id: "D", text: "Saturn" }
    ],
    correctAnswerId: "B"
  },
  {
    id: 4,
    text: "Who wrote \"Romeo and Juliet\"?",
    options: [
      { id: "A", text: "Charles Dickens" },
      { id: "B", text: "William Shakespeare" },
      { id: "C", text: "Jane Austen" },
      { id: "D", text: "Mark Twain" }
    ],
    correctAnswerId: "B"
  },
  {
    id: 5,
    text: "What gas do plants absorb from the atmosphere?",
    options: [
      { id: "A", text: "Oxygen" },
      { id: "B", text: "Carbon Dioxide" },
      { id: "C", text: "Nitrogen" },
      { id: "D", text: "Helium" }
    ],
    correctAnswerId: "B"
  }
];
