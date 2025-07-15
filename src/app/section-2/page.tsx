import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Globe, Building, TrendingUp } from 'lucide-react';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Section II - Le risque de marché et le risque spécifique
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-orange-900 mb-3">Dans cette section</h2>
              <ul className="text-orange-800 space-y-2">
                <li>Distinction entre risque systématique et risque spécifique</li>
                <li>Calcul et interprétation du coefficient bêta (β)</li>
                <li>Mesure de la sensibilité d'une action au marché</li>
              </ul>
            </div>
            
            <p className="text-gray-700 mb-6">
              Le risque évalué sur une action peut avoir deux composantes distinctes :
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  <Globe className="inline h-5 w-5 mr-2" />
                  Risque systématique
                </h3>
                <p className="text-red-800 mb-2">
                  <strong>(Risque de marché - Non diversifiable)</strong>
                </p>
                <p className="text-red-700">
                  Affecte l'ensemble du marché
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  <Building className="inline h-5 w-5 mr-2" />
                  Risque spécifique
                </h3>
                <p className="text-blue-800 mb-2">
                  <strong>(Risque d'entreprise - Diversifiable)</strong>
                </p>
                <p className="text-blue-700">
                  Propre à l'entreprise ou au secteur
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Le risque systématique (risque de marché)</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Caractéristiques</h3>
              <p className="text-red-800 mb-3">
                Le risque de marché touche l'intégralité du marché car il s'agit d'événements extérieurs que subissent toutes les entreprises.
              </p>
              <ul className="text-red-700 space-y-1">
                <li>• Conjoncture économique</li>
                <li>• Changements de politique</li>
                <li>• Évolution des taux d'intérêt</li>
                <li>• Conflits géopolitiques (guerre en Ukraine)</li>
                <li>• Crises sanitaires (COVID-19, confinements)</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">📰 Exemple historique : Mars 2020</h4>
              <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                <p className="text-gray-700 italic mb-2">
                  &quot;Wall"Wall Street essuie sa pire séance depuis 2008 sous l'effet du Coronavirus"
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Dow Jones : -7,8% (-2013 points)</li>
                  <li>• S&P 500 : -7,3%</li>
                  <li>• Nasdaq : -7,3%</li>
                  <li>• Tous les secteurs en baisse</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Le risque spécifique (risque diversifiable)</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Caractéristiques</h3>
              <p className="text-blue-800 mb-3">
                La fluctuation du cours peut s'expliquer par des caractéristiques propres de l'entreprise.
              </p>
              <ul className="text-blue-700 space-y-1">
                <li>• Décisions de gestion</li>
                <li>• Évolution des parts de marché</li>
                <li>• Risque technologique</li>
                <li>• Risque environnemental</li>
                <li>• Spécificités du secteur d'activité</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Pourquoi &quot;diversifiable&quot; ?</h3>
              <p className="text-green-800">
                Si l'investisseur investit dans plusieurs titres de secteurs d'activité différents, il ne sera pas dépendant du risque spécifique lié à une action ou un secteur en difficulté.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">📉 Exemple : Cas Atos</h4>
              <p className="text-yellow-800">
                La valeur de l'action Atos s'est effondrée suite à l'annonce du groupe de ne pas pouvoir faire face à sa prochaine échéance d'emprunt. Risque spécifique à l'entreprise.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Le coefficient β (bêta)</h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                <TrendingUp className="inline h-5 w-5 mr-2" />
                Définition
              </h3>
              <p className="text-purple-800">
                Le coefficient β est un coefficient qui mesure la <strong>sensibilité d'une valeur par rapport à son indice de référence</strong> (le marché).
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Formule de calcul</h4>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 mb-4">
                <p className="text-lg font-mono mb-2">
                  <strong>β = Covariance(Ra, Rm) / Variance(Rm)</strong>
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Ra = rentabilité de l'action, Rm = rentabilité du marché
                </p>
                
                <div className="bg-yellow-50 p-3 rounded mb-4">
                  <h5 className="font-semibold mb-2">📈 Formule alternative :</h5>
                  <p className="font-mono mb-2">β = ρ(i,m) × (σi / σm)</p>
                  <p className="text-sm text-gray-600">Où ρ(i,m) = coefficient de corrélation entre le titre et le marché</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <h5 className="font-semibold mb-2">🧮 Exemple de calcul :</h5>
                <p className="mb-2">Si Cov(Ra, Rm) = 0,024 et Var(Rm) = 0,016 :</p>
                <p className="font-mono mb-2">β = 0,024 / 0,016 = 1,5</p>
                <p className="text-sm">Le titre est 50% plus volatil que le marché</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Interprétation du β</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <p><strong>β = 1</strong> : L'action varie comme le marché</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                  <p><strong>β &gt; 1</strong> : L'action est plus volatile que le marché (amplification)</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <p><strong>β &lt; 1</strong> : L'action est moins volatile que le marché (atténuation)</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-500">
                  <p><strong>β &lt; 0</strong> : L'action varie en sens inverse du marché (rare)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                La diversification de portefeuille
              </h3>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500 mb-4">
                <h4 className="font-semibold mb-3">🎯 Principe de la diversification :</h4>
                <p className="mb-3">
                  La diversification permet de <strong>réduire le risque spécifique</strong> en investissant 
                  dans plusieurs titres non corrélés. Plus le nombre de titres augmente, plus le risque 
                  spécifique diminue.
                </p>
                
                <div className="bg-blue-50 p-3 rounded mb-3">
                  <p className="font-semibold mb-2">📊 Formule du risque d'un portefeuille (2 actifs) :</p>
                  <p className="font-mono text-sm mb-2">
                    σp² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂
                  </p>
                  <p className="text-xs text-gray-600">
                    Où w = poids, σ = écart-type, ρ = coefficient de corrélation
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-semibold text-yellow-800 mb-2">⚡ Effet de la corrélation :</p>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• ρ = +1 : Aucun bénéfice de diversification</li>
                    <li>• ρ = 0 : Diversification modérée</li>
                    <li>• ρ = -1 : Diversification parfaite (risque minimal)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold mb-2">🧮 Exemple pratique :</h4>
                <p className="mb-2">Portefeuille avec 2 actions (50% chacune) :</p>
                <ul className="text-sm space-y-1 mb-2">
                  <li>• Action A : σ = 20%</li>
                  <li>• Action B : σ = 30%</li>
                  <li>• Corrélation ρ = 0,3</li>
                </ul>
                <p className="font-mono text-sm">
                  σp = √(0,5²×20² + 0,5²×30² + 2×0,5×0,5×20×30×0,3) = 19,2%
                </p>
                <p className="text-sm mt-2">Le risque du portefeuille (19,2%) est inférieur à la moyenne pondérée (25%)</p>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🧠 Moyen mnémotechnique</h3>
              <p className="text-green-800">
                <strong>B.E.T.A.</strong> - <em>Bêta Évalue Tendance Action</em>
                <br />
                Plus le bêta est grand, plus l'action danse avec le marché !
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💡 Points clés à retenir</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Le risque spécifique peut être éliminé par la diversification</li>
                <li>• Le risque de marché affecte tous les titres et ne peut être diversifié</li>
                <li>• Le Beta mesure la sensibilité d'un titre aux mouvements du marché</li>
                <li>• Un portefeuille diversifié réduit le risque total sans affecter la rentabilité espérée</li>
                <li>• La corrélation entre les actifs détermine l'efficacité de la diversification</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Link
              href="/section-1"
              className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Section I
            </Link>
            
            <Link
              href="/section-3"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Section III
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}