import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Brain, Calculator, Target, AlertTriangle, TrendingUp } from 'lucide-react';

export default function Section3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Section III - Le MEDAF (Modèle d'Évaluation des Actifs Financiers)
            </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-purple-900 mb-3">
                <Brain className="inline h-5 w-5 mr-2" />
                Dans cette section
              </h2>
              <ul className="text-purple-800 space-y-2">
                <li>Comprendre le modèle MEDAF et ses hypothèses</li>
                <li>Appliquer la formule du MEDAF</li>
                <li>Interpréter la relation rentabilité-risque</li>
                <li>Utiliser le MEDAF pour l'évaluation d'actifs</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Qu&apos;est-ce que le MEDAF ?</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Définition</h3>
              <p className="text-blue-800">
                Le <strong>MEDAF</strong> (Modèle d'Évaluation des Actifs Financiers) ou <strong>CAPM</strong> (Capital Asset Pricing Model) est un modèle financier qui établit une relation entre la rentabilité espérée d'un actif et son risque systématique.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 Objectif du MEDAF</h3>
              <p className="text-green-800">
                Déterminer la <strong>rentabilité exigée</strong> par les investisseurs pour un actif donné, en fonction de son niveau de risque systématique (mesuré par le β).
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. La formule du MEDAF</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                <Calculator className="inline h-6 w-6 mr-2" />
                Formule fondamentale
              </h3>
              <div className="bg-white p-6 rounded border-2 border-blue-500 text-center">
                <p className="text-2xl font-mono font-bold text-blue-900 mb-4">
                  E(Ri) = Rf + βi × [E(Rm) - Rf]
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>E(Ri)</strong> = Rentabilité espérée de l'actif i</p>
                  <p><strong>Rf</strong> = Taux sans risque</p>
                  <p><strong>βi</strong> = Coefficient bêta de l'actif i</p>
                  <p><strong>E(Rm)</strong> = Rentabilité espérée du marché</p>
                  <p><strong>[E(Rm) - Rf]</strong> = Prime de risque du marché</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Décomposition de la formule</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">💰 Taux sans risque (Rf)</h4>
                <p className="text-green-800">
                  Rentabilité d'un placement sans risque (ex: obligations d'État). C'est la rémunération minimale exigée.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">📊 Prime de risque</h4>
                <p className="text-orange-800">
                  <strong>βi × [E(Rm) - Rf]</strong><br />
                  Rémunération supplémentaire exigée pour compenser le risque pris.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Interprétation économique</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💡 Logique du modèle</h3>
              <p className="text-yellow-800">
                La rentabilité exigée d&apos;un actif = <strong>Rémunération du temps</strong> (Rf) + <strong>Rémunération du risque</strong> (prime de risque)
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Selon la valeur du β :</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <p><strong>β = 0</strong> : E(Ri) = Rf (actif sans risque)</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <p><strong>β = 1</strong> : E(Ri) = E(Rm) (rentabilité = marché)</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                  <p><strong>β &gt; 1</strong> : E(Ri) &gt; E(Rm) (rentabilité &gt; marché)</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                  <p><strong>β &lt; 1</strong> : Rf &lt; E(Ri) &lt; E(Rm)</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Exemple d&apos;application</h2>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">📝 Cas pratique</h4>
              <div className="bg-white p-4 rounded border">
                <p className="text-gray-700 mb-4"><strong>Données :</strong></p>
                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>• Taux sans risque (Rf) = 3%</li>
                  <li>• Rentabilité espérée du marché E(Rm) = 10%</li>
                  <li>• Coefficient bêta de l'action (β) = 1,2</li>
                </ul>
                
                <p className="text-gray-700 mb-2"><strong>Calcul :</strong></p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-mono text-sm">
                    E(Ri) = 3% + 1,2 × (10% - 3%)
                    <br />
                    E(Ri) = 3% + 1,2 × 7%
                    <br />
                    E(Ri) = 3% + 8,4% = <strong>11,4%</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Hypothèses du MEDAF</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ Hypothèses du MEDAF</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Hypothèses sur les marchés :</h4>
                  <ul className="text-red-800 space-y-1 text-sm">
                    <li>• Marchés parfaits (pas de coûts de transaction)</li>
                    <li>• Pas d&apos;impôts ni de restrictions</li>
                    <li>• Liquidité parfaite</li>
                    <li>• Divisibilité infinie des titres</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hypothèses sur les investisseurs :</h4>
                  <ul className="text-red-800 space-y-1 text-sm">
                    <li>• Investisseurs rationnels et averses au risque</li>
                    <li>• Même information disponible pour tous</li>
                    <li>• Anticipations homogènes</li>
                    <li>• Optimisation moyenne-variance</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-white p-3 rounded">
                <p className="text-red-700 text-sm">
                  <strong>Hypothèse clé :</strong> Possibilité d'emprunter et prêter au taux sans risque pour tous les investisseurs
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                Limites du MEDAF
              </h3>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500 mb-4">
                <h4 className="font-semibold mb-3">🚫 Principales critiques :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2">Limites théoriques :</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Hypothèses irréalistes</li>
                      <li>• Beta instable dans le temps</li>
                      <li>• Relation linéaire simpliste</li>
                      <li>• Portefeuille de marché inobservable</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Limites empiriques :</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Faible pouvoir explicatif</li>
                      <li>• Anomalies de marché non expliquées</li>
                      <li>• Effet taille et valeur ignorés</li>
                      <li>• Performance décevante en pratique</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-indigo-600" />
                Le modèle de Fama et French (3 facteurs)
              </h3>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500 mb-4">
                <h4 className="font-semibold mb-3">📊 Formule du modèle à 3 facteurs :</h4>
                <div className="bg-gray-100 p-3 rounded mb-3">
                  <p className="font-mono text-center">
                    E(Ri) = Rf + βi × [E(Rm) - Rf] + si × SMB + hi × HML
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold mb-2">1️⃣ Facteur Marché</h5>
                    <p className="text-sm">βi × [E(Rm) - Rf]</p>
                    <p className="text-xs text-gray-600">Prime de risque de marché (comme dans MEDAF)</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold mb-2">2️⃣ Facteur Taille (SMB)</h5>
                    <p className="text-sm">si × SMB</p>
                    <p className="text-xs text-gray-600">Small Minus Big : prime des petites capitalisations</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h5 className="font-semibold mb-2">3️⃣ Facteur Valeur (HML)</h5>
                    <p className="text-sm">hi × HML</p>
                    <p className="text-xs text-gray-600">High Minus Low : prime des titres "value"</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded">
                <h4 className="font-semibold mb-2">🎯 Avantages du modèle Fama-French :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Meilleur pouvoir explicatif que le MEDAF (R² ≈ 90% vs 70%)</li>
                  <li>• Prise en compte de l'effet taille et de l'effet valeur</li>
                  <li>• Validation empirique robuste sur différents marchés</li>
                  <li>• Base théorique solide (risque de détresse financière)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">🔬 Autres modèles alternatifs</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                  <h4 className="font-semibold mb-2">APT (Arbitrage Pricing Theory)</h4>
                  <p className="text-sm mb-2">Modèle multifactoriel plus flexible :</p>
                  <p className="font-mono text-xs">E(Ri) = Rf + β₁F₁ + β₂F₂ + ... + βₙFₙ</p>
                  <p className="text-xs text-gray-600 mt-2">Facteurs macroéconomiques variables</p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                  <h4 className="font-semibold mb-2">Modèle à 5 facteurs (Fama-French)</h4>
                  <p className="text-sm mb-2">Extension avec 2 facteurs supplémentaires :</p>
                  <ul className="text-xs space-y-1">
                    <li>• RMW : Rentabilité (Robust Minus Weak)</li>
                    <li>• CMA : Investissement (Conservative Minus Aggressive)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-green-800">
                <strong>M.E.D.A.F.</strong> - <em>Modèle Évalue Directement Actifs Financiers</em>
                <br />
                <strong>Formule :</strong> <em>Rentabilité = Sécurité + Bêta × Prime</em>
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Points clés à retenir</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Le MEDAF établit une relation linéaire entre rentabilité et risque</li>
                <li>• Plus le Beta est élevé, plus la rentabilité espérée est importante</li>
                <li>• Le modèle permet de déterminer si un titre est sur/sous-évalué</li>
                <li>• La prime de risque rémunère le risque systématique non diversifiable</li>
                <li>• Les modèles multifactoriels (Fama-French) offrent une meilleure explication</li>
                <li>• Le choix du modèle dépend du contexte et de l'objectif d'analyse</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                <Target className="inline h-5 w-5 mr-2" />
                Applications pratiques du MEDAF
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Évaluation d'actions et de projets d'investissement</li>
                <li>• Détermination du coût des capitaux propres</li>
                <li>• Analyse de performance des portefeuilles</li>
                <li>• Prise de décisions d'investissement</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Link
              href="/section-2"
              className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Section II
            </Link>
            
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Quiz
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}