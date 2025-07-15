'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la formule de calcul de la rentabilité annuelle d&apos;une action ?",
    options: [
      "(Dividende + Prix final) / Prix initial",
      "(Dividende + Prix final - Prix initial) / Prix initial",
      "(Prix final - Prix initial) / Dividende",
      "Dividende / Prix initial"
    ],
    correct: 1,
    explanation: "La rentabilité = (Dividende + Plus-value) / Prix initial = (Di + Ci - Ci-1) / Ci-1"
  },
  {
    id: 2,
    question: "Que mesure l&apos;écart-type d&apos;une action ?",
    options: [
      "La rentabilité moyenne",
      "Le risque (volatilité)",
      "Le prix de l&apos;action",
      "Le dividende"
    ],
    correct: 1,
    explanation: "L&apos;écart-type mesure la dispersion des rentabilités autour de la moyenne, donc le risque."
  },
  {
    id: 3,
    question: "Un coefficient bêta (β) de 1,5 signifie que :",
    options: [
      "L&apos;action varie comme le marché",
      "L&apos;action est 1,5 fois plus volatile que le marché",
      "L&apos;action est moins risquée que le marché",
      "L&apos;action n&apos;est pas corrélée au marché"
    ],
    correct: 1,
    explanation: "β > 1 indique que l&apos;action amplifie les mouvements du marché (plus volatile)."
  },
  {
    id: 4,
    question: "Dans la formule du MEDAF, que représente [E(Rm) - Rf] ?",
    options: [
      "Le taux sans risque",
      "La prime de risque du marché",
      "Le coefficient bêta",
      "La rentabilité de l&apos;action"
    ],
    correct: 1,
    explanation: "[E(Rm) - Rf] est la prime de risque du marché, soit l'excédent de rentabilité du marché par rapport au taux sans risque."
  },
  {
    id: 5,
    question: "Le risque spécifique d&apos;une entreprise peut être réduit par :",
    options: [
      "L&apos;augmentation du coefficient bêta",
      "La diversification du portefeuille",
      "L&apos;investissement dans un seul secteur",
      "L&apos;augmentation du taux sans risque"
    ],
    correct: 1,
    explanation: "Le risque spécifique est diversifiable : en investissant dans plusieurs secteurs, on réduit l'exposition aux risques particuliers."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez bien le sujet.';
    if (percentage >= 60) return 'Bien ! Quelques révisions seraient bénéfiques.';
    return 'Il serait bon de revoir les concepts fondamentaux.';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Quiz terminé !</h1>
            
            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <p className="text-xl text-gray-600 mb-4">
                Score : {Math.round((score / questions.length) * 100)}%
              </p>
              <p className={`text-lg ${getScoreColor()}`}>
                {getScoreMessage()}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
              
              <Link
                href="/questions-dscg"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Questions DSCG
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Quiz - Évaluez vos connaissances</h1>
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} sur {questions.length}
            </div>
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? showResult
                          ? index === questions[currentQuestion].correct
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : 'border-red-500 bg-red-50 text-red-800'
                          : 'border-blue-500 bg-blue-50'
                        : showResult && index === questions[currentQuestion].correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && (
                        <div>
                          {index === questions[currentQuestion].correct && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                          {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"
                >
                  <h3 className="font-semibold text-blue-900 mb-2">Explication :</h3>
                  <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
                </motion.div>
              )}
              
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">
                  Score actuel : {score}/{currentQuestion + (showResult ? 1 : 0)}
                </div>
                
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null || showResult}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    selectedAnswer === null || showResult
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link
            href="/section-3"
            className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Section III
          </Link>
        </div>
      </div>
    </div>
  );
}