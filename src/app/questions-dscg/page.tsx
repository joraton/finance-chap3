'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, Calculator, FileText, Eye, EyeOff, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  data: string[];
  questions: string[];
  solution: string[];
  methodology: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Calcul de rentabilité et de risque - Action Alpha",
    context: "L&apos;entreprise Alpha souhaite analyser la performance de son action sur les 4 dernières années.",
    data: [
      "Cours au 01/01/N-3 : 100 €",
      "Année N-3 : Dividende 4€, Cours final 110€",
      "Année N-2 : Dividende 3€, Cours final 95€",
      "Année N-1 : Dividende 5€, Cours final 120€",
      "Année N : Dividende 4€, Cours final 115€"
    ],
    questions: [
      "1. Calculer la rentabilité annuelle pour chaque année",
      "2. Déterminer la rentabilité moyenne sur la période",
      "3. Calculer l&apos;écart-type (risque) de cette action",
      "4. Interpréter les résultats obtenus"
    ],
    solution: [
      "1. Rentabilités annuelles :",
      "   • N-3 : (4 + 110 - 100) / 100 = 14%",
      "   • N-2 : (3 + 95 - 110) / 110 = -10,91%",
      "   • N-1 : (5 + 120 - 95) / 95 = 31,58%",
      "   • N : (4 + 115 - 120) / 120 = -0,83%",
      "",
      "2. Rentabilité moyenne :",
      "   R̄ = (14% - 10,91% + 31,58% - 0,83%) / 4 = 8,46%",
      "",
      "3. Calcul de l&apos;écart-type :",
      "   Variance = [(14-8,46)² + (-10,91-8,46)² + (31,58-8,46)² + (-0,83-8,46)²] / 4",
      "   Variance = [30,69 + 376,32 + 534,02 + 86,32] / 4 = 256,84",
      "   Écart-type = √256,84 = 16,03%",
      "",
      "4. Interprétation :",
      "   • Rentabilité moyenne de 8,46% sur la période",
      "   • Écart-type élevé (16,03%) indique une forte volatilité",
      "   • Action risquée avec des variations importantes"
    ],
    methodology: [
      "📊 Méthodologie de calcul :",
      "1. Toujours utiliser le cours de début de période au dénominateur",
      "2. Inclure dividendes ET plus-values dans le numérateur",
      "3. Pour l&apos;écart-type : variance puis racine carrée",
      "4. Interpréter le risque en fonction du secteur d&apos;activité"
    ]
  },
  {
    id: 2,
    title: "Application du MEDAF - Évaluation d&apos;action",
    context: "Un investisseur souhaite évaluer la rentabilité exigée pour l&apos;action de la société Beta.",
    data: [
      "Taux sans risque (OAT 10 ans) : 2,5%",
      "Rentabilité espérée du marché (CAC 40) : 9%",
      "Coefficient bêta de l&apos;action Beta : 1,3",
      "Rentabilité observée de l&apos;action : 11%"
    ],
    questions: [
      "1. Calculer la rentabilité exigée selon le MEDAF",
      "2. Comparer avec la rentabilité observée",
      "3. Que peut-on en conclure sur l&apos;action ?",
      "4. Calculer la prime de risque de l&apos;action"
    ],
    solution: [
      "1. Rentabilité exigée (MEDAF) :",
      "   E(R) = Rf + β × [E(Rm) - Rf]",
      "   E(R) = 2,5% + 1,3 × (9% - 2,5%)",
      "   E(R) = 2,5% + 1,3 × 6,5% = 2,5% + 8,45% = 10,95%",
      "",
      "2. Comparaison :",
      "   • Rentabilité exigée : 10,95%",
      "   • Rentabilité observée : 11%",
      "   • Différence : +0,05 point",
      "",
      "3. Conclusion :",
      "   L&apos;action offre une rentabilité légèrement supérieure à celle exigée.",
      "   → Action attractive pour l&apos;investissement",
      "   → Sous-évaluée par le marché",
      "",
      "4. Prime de risque de l&apos;action :",
      "   Prime = β × Prime de marché = 1,3 × 6,5% = 8,45%"
    ],
    methodology: [
      "🎯 Points clés du MEDAF :",
      "1. Le bêta mesure la sensibilité au risque de marché",
      "2. β > 1 : action plus volatile que le marché",
      "3. Comparer rentabilité exigée vs observée pour décider",
      "4. MEDAF = outil d&apos;aide à la décision d&apos;investissement"
    ]
  },
  {
    id: 3,
    title: "Analyse comparative de portefeuille",
    context: "Un gestionnaire compare trois actions pour constituer un portefeuille.",
    data: [
      "Action A : β = 0,8, Rentabilité espérée = 8%",
      "Action B : β = 1,2, Rentabilité espérée = 12%",
      "Action C : β = 1,5, Rentabilité espérée = 13%",
      "Taux sans risque : 3%",
      "Rentabilité du marché : 10%"
    ],
    questions: [
      "1. Calculer la rentabilité exigée pour chaque action (MEDAF)",
      "2. Identifier les actions sur/sous-évaluées",
      "3. Recommander une stratégie d&apos;investissement",
      "4. Analyser le profil risque/rentabilité"
    ],
    solution: [
      "1. Rentabilités exigées (MEDAF) :",
      "   Action A : 3% + 0,8 × (10% - 3%) = 3% + 5,6% = 8,6%",
      "   Action B : 3% + 1,2 × (10% - 3%) = 3% + 8,4% = 11,4%",
      "   Action C : 3% + 1,5 × (10% - 3%) = 3% + 10,5% = 13,5%",
      "",
      "2. Évaluation :",
      "   • Action A : 8% < 8,6% → Surévaluée (éviter)",
      "   • Action B : 12% > 11,4% → Sous-évaluée (acheter)",
      "   • Action C : 13% < 13,5% → Surévaluée (éviter)",
      "",
      "3. Stratégie recommandée :",
      "   → Investir prioritairement dans l&apos;action B",
      "   → Éviter les actions A et C",
      "   → Diversifier avec d&apos;autres titres attractifs",
      "",
      "4. Profil risque/rentabilité :",
      "   • Action A : Faible risque, rentabilité insuffisante",
      "   • Action B : Risque modéré, bonne rentabilité",
      "   • Action C : Risque élevé, rentabilité insuffisante"
    ],
    methodology: [
      "💼 Stratégie de sélection :",
      "1. Calculer systématiquement la rentabilité exigée",
      "2. Privilégier les actions sous-évaluées",
      "3. Considérer le profil de risque de l&apos;investisseur",
      "4. Diversifier pour réduire le risque spécifique"
    ]
  }
];

export default function QuestionsDSCG() {
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});
  const [showMethodology, setShowMethodology] = useState<{ [key: number]: boolean }>({});

  const toggleSolution = (exerciseId: number) => {
    setShowSolution(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const toggleMethodology = (exerciseId: number) => {
    setShowMethodology(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cas pratiques - Exercices d&apos;application
          </h1>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-900 mb-3">
              <FileText className="inline h-5 w-5 mr-2" />
              Objectifs des exercices
            </h2>
            <ul className="text-indigo-800 space-y-2">
              <li>• Appliquer les formules de rentabilité et de risque</li>
              <li>• Maîtriser le calcul et l&apos;interprétation du MEDAF</li>
              <li>• Développer une méthodologie d&apos;analyse financière</li>
              <li>• Prendre des décisions d&apos;investissement éclairées</li>
              <li>• Analyser des portefeuilles et optimiser les allocations</li>
              <li>• Interpréter les résultats dans un contexte économique</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-900">Exercice 5 : Modèle Fama-French à 3 facteurs</h3>
              <div className="bg-gray-50 p-4 rounded mb-4">
                <p className="mb-3">
                  <strong>Énoncé :</strong> Une petite entreprise technologique présente les caractéristiques suivantes :
                </p>
                <ul className="text-sm space-y-1 ml-6">
                  <li>• Beta de marché : βi = 1,4</li>
                  <li>• Sensibilité à la taille : si = 0,8 (petite capitalisation)</li>
                  <li>• Sensibilité à la valeur : hi = -0,3 (titre de croissance)</li>
                  <li>• Taux sans risque : Rf = 2%</li>
                  <li>• Prime de risque de marché : E(Rm) - Rf = 7%</li>
                  <li>• Prime de taille SMB = 3%</li>
                  <li>• Prime de valeur HML = 4%</li>
                </ul>
                <p className="mt-3"><strong>Question :</strong> Calculez la rentabilité espérée selon le modèle Fama-French.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold mb-2 text-blue-800">💡 Solution :</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Formule Fama-French :</strong></p>
                  <p className="font-mono bg-white p-2 rounded">E(Ri) = Rf + βi×[E(Rm)-Rf] + si×SMB + hi×HML</p>
                  
                  <p><strong>Application numérique :</strong></p>
                  <p>E(Ri) = 2% + 1,4×7% + 0,8×3% + (-0,3)×4%</p>
                  <p>E(Ri) = 2% + 9,8% + 2,4% - 1,2% = 13%</p>
                  
                  <div className="bg-white p-2 rounded mt-2">
                    <p><strong>Décomposition :</strong></p>
                    <p>• Taux sans risque : 2%</p>
                    <p>• Prime de marché : 9,8%</p>
                    <p>• Prime de taille : +2,4% (petite cap)</p>
                    <p>• Prime de valeur : -1,2% (croissance)</p>
                    <p className="font-semibold text-blue-700">Total : 13%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Exercice 4 : Analyse de portefeuille et diversification</h3>
              <div className="bg-gray-50 p-4 rounded mb-4">
                <p className="mb-3">
                  <strong>Énoncé :</strong> Un portefeuille est composé de 60% d&apos;actions A (β = 1,2, σ = 25%) et 40% d&apos;actions B (β = 0,8, σ = 20%). 
                  Le taux sans risque est de 3% et la prime de risque du marché de 6%. La corrélation entre A et B est de 0,4.
                </p>
                <p className="mb-2"><strong>Questions :</strong></p>
                <ol className="list-decimal ml-6 space-y-1 text-sm">
                  <li>Calculez la rentabilité espérée du portefeuille</li>
                  <li>Calculez le Beta du portefeuille</li>
                  <li>Calculez le risque (écart-type) du portefeuille</li>
                  <li>Analysez l&apos;effet de la diversification</li>
                </ol>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold mb-2 text-green-800">💡 Solution complète :</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p><strong>1. Rentabilité espérée du portefeuille :</strong></p>
                    <p>E(RA) = 3% + 1,2 × 6% = 10,2%</p>
                    <p>E(RB) = 3% + 0,8 × 6% = 7,8%</p>
                    <p>E(Rp) = 0,6 × 10,2% + 0,4 × 7,8% = 9,24%</p>
                  </div>
                  
                  <div>
                    <p><strong>2. Beta du portefeuille :</strong></p>
                    <p>βp = 0,6 × 1,2 + 0,4 × 0,8 = 1,04</p>
                  </div>
                  
                  <div>
                    <p><strong>3. Risque du portefeuille :</strong></p>
                    <p>σp² = (0,6)²×(25)² + (0,4)²×(20)² + 2×0,6×0,4×25×20×0,4</p>
                    <p>σp² = 225 + 64 + 192 = 481</p>
                    <p>σp = √481 = 21,93%</p>
                  </div>
                  
                  <div>
                    <p><strong>4. Effet de diversification :</strong></p>
                    <p>Moyenne pondérée : 0,6×25% + 0,4×20% = 23%</p>
                    <p>Réduction du risque : 23% - 21,93% = 1,07 point</p>
                  </div>
                  
                  <p className="text-green-700 font-medium bg-white p-2 rounded">
                    {"La diversification réduit le risque de 1,07 point grâce à la corrélation imparfaite (0,4 < 1)."}
                  </p>
                </div>
              </div>
            </div>
            
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <Calculator className="inline h-5 w-5 mr-2" />
                    Exercice {exercise.id} : {exercise.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{exercise.context}</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Données :</h4>
                    <ul className="text-blue-800 space-y-1">
                      {exercise.data.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Questions :</h4>
                    <ul className="text-green-800 space-y-1">
                      {exercise.questions.map((question, idx) => (
                        <li key={idx}>{question}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => toggleSolution(exercise.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        showSolution[exercise.id]
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      {showSolution[exercise.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {showSolution[exercise.id] ? 'Masquer' : 'Voir'} la correction
                    </button>
                    
                    <button
                      onClick={() => toggleMethodology(exercise.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        showMethodology[exercise.id]
                          ? 'bg-green-600 text-white'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      <Lightbulb className="h-4 w-4" />
                      {showMethodology[exercise.id] ? 'Masquer' : 'Voir'} la méthodologie
                    </button>
                  </div>
                  
                  {showSolution[exercise.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 bg-gray-50 p-6 rounded-lg"
                    >
                      <h4 className="font-semibold text-gray-900 mb-4">💡 Correction détaillée :</h4>
                      <div className="space-y-2 text-gray-700">
                        {exercise.solution.map((line, idx) => (
                          <p key={idx} className={line.startsWith('   ') ? 'ml-4 font-mono text-sm' : ''}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {showMethodology[exercise.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-500"
                    >
                      <div className="space-y-2 text-green-800">
                        {exercise.methodology.map((tip, idx) => (
                          <p key={idx} className={tip.startsWith('📊') || tip.startsWith('🎯') || tip.startsWith('💼') ? 'font-semibold' : ''}>
                            {tip}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">🎯 Conseils pour l&apos;examen DSCG</h3>
            <ul className="text-yellow-800 space-y-2">
              <li>• <strong>Méthodologie :</strong> Toujours expliciter les formules utilisées</li>
              <li>• <strong>Calculs :</strong> Détailler chaque étape, même les plus simples</li>
              <li>• <strong>Interprétation :</strong> Commenter systématiquement les résultats</li>
              <li>• <strong>Recommandations :</strong> Conclure par des conseils d&apos;investissement</li>
              <li>• <strong>Présentation :</strong> Structurer clairement vos réponses</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Quiz
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Retour au plan du cours
          </Link>
        </div>
      </div>
    </div>
  );
}