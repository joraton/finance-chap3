import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calculator, TrendingUp } from 'lucide-react';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Section I - Le couple rentabilité/risque d&apos;une action
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">
                <Calculator className="inline h-5 w-5 mr-2" />
                Objectifs d&apos;apprentissage
              </h2>
              <ul className="text-blue-800 space-y-2">
                <li>• Comprendre les composantes de la rentabilité d&apos;une action</li>
                <li>• Calculer la rentabilité passée et espérée</li>
                <li>• Mesurer le risque par la volatilité et l&apos;écart-type</li>
                <li>• Analyser la relation rentabilité-risque</li>
                <li>• Maîtriser les formules de variance et d&apos;écart-type</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-yellow-900 mb-3">
                💡 Principe fondamental
              </h2>
              <p className="text-yellow-800 text-lg">
                <strong>Plus le risque est élevé, plus la rentabilité attendue est importante.</strong><br/>
                La rentabilité doit rémunérer le risque. Un investisseur ayant une aversion au risque exigera une prime de risque plus élevée pour accepter d&apos;investir dans un titre volatil.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-green-900 mb-3">Dans cette section</h2>
              <ul className="text-green-800 space-y-2">
                <li>Calcul de la rentabilité d&apos;une action (passée et future)</li>
                <li>Mesure de la volatilité et du risque</li>
                <li>Utilisation de l&apos;écart-type comme indicateur de risque</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Calcul de la rentabilité d&apos;une action</h2>
            
            <p className="text-gray-700 mb-6">
              L&apos;investisseur peut estimer la rentabilité de deux manières :
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  <Calculator className="inline h-5 w-5 mr-2" />
                  Rentabilité réalisée
                </h3>
                <p className="text-blue-800">
                  À partir des données historiques (dividendes et cours passés)
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  <TrendingUp className="inline h-5 w-5 mr-2" />
                  Rentabilité espérée
                </h3>
                <p className="text-purple-800">
                  À partir de prévisions associées à des probabilités
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">a. La rentabilité passée (données historiques)</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Formule de base</h4>
              <div className="bg-white p-4 rounded border text-center">
                <p className="text-lg font-mono">
                  <strong>Rentabilité annuelle = (Di + Ci - Ci-1) / Ci-1</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Où : Di = dividende, Ci = cours final, Ci-1 = cours initial
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded mt-4">
                <h5 className="font-semibold mb-2">💡 Formule alternative :</h5>
                <p className="font-mono mb-2">R = (P₁ - P₀ + D) / P₀</p>
                <p className="text-gray-600 text-sm">
                  Où : R = rentabilité, P₁ = prix final, P₀ = prix initial, D = dividendes
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">💡 Exemple pratique</h4>
              <p className="text-yellow-800 mb-3">
                Action achetée à 100€ le 01/01/N, dividende de 4€, cours au 31/12/N : 110€
              </p>
              <div className="bg-white p-4 rounded">
                <p className="font-mono text-sm">
                  Rentabilité = (4 + 110 - 100) / 100 = 14/100 = <strong>14%</strong>
                </p>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Rentabilité moyenne sur plusieurs années</h4>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="bg-white p-4 rounded border text-center">
                <p className="text-lg font-mono">
                  <strong>Rentabilité moyenne = (R1 + R2 + ... + Rn) / n</strong>
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">b. La rentabilité espérée (avec probabilités)</h3>
            
            <p className="text-gray-700 mb-4">
              Basée sur des prévisions et leurs probabilités de réalisation.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Espérance mathématique</h4>
              <div className="bg-white p-4 rounded border text-center">
                <p className="text-lg font-mono">
                  <strong>E(R) = Σ(Pi × Ri)</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Somme des (probabilités × rentabilités)
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. La volatilité et le risque de l&apos;action</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ Définition du risque</h3>
              <p className="text-red-800">
                La <strong>volatilité</strong> est la variation du cours d&apos;un titre. Plus la volatilité est importante, plus le risque est élevé. Le risque se mesure par l&apos;<strong>écart-type</strong>.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Interprétation de l&apos;écart-type (σ)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Si σ = 0 → l&apos;action n&apos;est pas risquée</li>
                <li>• Si σ &gt; 0 → l&apos;action présente un risque</li>
                <li>• Plus σ est élevé → plus le risque est important</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Calcul de l&apos;écart-type (données historiques)</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <p className="text-center font-mono text-lg">
                    <strong>Variance = Σ(Ri - R̄)² / n</strong>
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p className="text-center font-mono text-lg">
                    <strong>Écart-type = √Variance</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Mesure du risque
              </h3>
              <p className="mb-4">
                Le risque d&apos;un investissement se mesure par la <strong>volatilité</strong> des rentabilités, 
                quantifiée par l&apos;<strong>écart-type</strong>.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500 mb-4">
                <h4 className="font-semibold mb-3">📊 Formules de calcul du risque :</h4>
                
                <div className="mb-4">
                  <p className="font-semibold mb-2">1. Variance :</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mb-2">
                    σ² = Σ pᵢ × (Rᵢ - E(R))²
                  </p>
                  <p className="text-sm text-gray-600">Où pᵢ = probabilité, Rᵢ = rentabilité, E(R) = rentabilité espérée</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-semibold mb-2">2. Écart-type (volatilité) :</p>
                  <p className="font-mono bg-gray-100 p-2 rounded mb-2">
                    σ = √(σ²)
                  </p>
                  <p className="text-sm text-gray-600">L&apos;écart-type est la racine carrée de la variance</p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-semibold text-yellow-800">
                    💡 Principe : Plus l&apos;écart-type est élevé, plus le risque est important
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold mb-2">🧮 Exemple de calcul :</h4>
                <p className="mb-2">Action avec 3 scénarios :</p>
                <ul className="list-disc ml-6 mb-3">
                  <li>Optimiste (30%) : +20%</li>
                  <li>Neutre (40%) : +10%</li>
                  <li>Pessimiste (30%) : -5%</li>
                </ul>
                <p className="mb-2">E(R) = 0,3×20% + 0,4×10% + 0,3×(-5%) = 8,5%</p>
                <p className="mb-2">σ² = 0,3×(20-8,5)² + 0,4×(10-8,5)² + 0,3×(-5-8,5)² = 94,75</p>
                <p className="font-mono">σ = √94,75 = 9,73%</p>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-green-800">
                <strong>V.E.R.</strong> - <em>Variance, Écart-type, Risque</em>
                <br />
                La variance mesure la dispersion, l&apos;écart-type la quantifie, le risque l&apos;interprète !
              </p>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Link
              href="/introduction"
              className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Introduction
            </Link>
            
            <Link
              href="/section-2"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section II
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}