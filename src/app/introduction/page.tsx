import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Introduction : La Rentabilité et le Risque d'une Action
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Objectifs d'apprentissage</h2>
              <ul className="text-blue-800 space-y-2">
                <li>Comprendre la relation fondamentale entre rentabilité et risque</li>
                <li>Maîtriser les méthodes de calcul de la rentabilité d'une action</li>
                <li>Évaluer le risque associé à un investissement</li>
                <li>Appliquer le modèle MEDAF dans l'évaluation des actifs</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Concepts fondamentaux</h2>
            
            <p className="text-gray-700 mb-6">
              Lorsqu'un investisseur achète un titre, il prend un risque. En effet, il n'est pas certain que les flux futurs générés par ce titre (dividendes et plus-value) lui apporteront la rentabilité espérée. Avant d'investir, il va évaluer la rentabilité attendue du titre et le risque associé à ce titre.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Principe clé</h3>
              <p className="text-green-800">
                <strong>Plus le risque est élevé, plus la rentabilité attendue doit être importante.</strong>
                La rentabilité doit rémunérer le risque pris par l'investisseur.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aversion au risque</h2>
            
            <p className="text-gray-700 mb-6">
              Chaque investisseur a un goût plus ou moins prononcé pour le risque. On parle d'« aversion » pour le risque lorsqu'un investisseur n'aime pas le risque. En finance, un investisseur est prêt à prendre un risque s'il attend de la rentabilité.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Moyen mnémotechnique</h3>
              <p className="text-yellow-800">
                <strong>R.R.R.</strong> - <em>Risque Rémunéré par Rentabilité</em>
                <br />
                Plus je risque, plus je dois gagner !
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Composantes de la rentabilité</h2>
            
            <p className="text-gray-700 mb-4">
              Si on investit dans une action, on en attend des profits constitués de deux éléments :
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💰 Le dividende</h3>
                <p className="text-blue-800">
                  Revenus périodiques versés par l'entreprise aux actionnaires
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">📈 La plus-value</h3>
                <p className="text-green-800">
                  Gain réalisé lors de la revente de l'action à un prix supérieur
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dans ce cours, vous apprendrez à :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Calculer la rentabilité passée et future d'une action</li>
                <li>✅ Mesurer et interpréter la volatilité et le risque</li>
                <li>✅ Distinguer risque systématique et risque spécifique</li>
                <li>✅ Utiliser le coefficient bêta pour évaluer la sensibilité au marché</li>
                <li>✅ Appliquer le modèle MEDAF dans vos analyses financières</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-end mt-8">
            <Link
              href="/section-1"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Commencer Section I
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}