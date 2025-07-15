import { TrendingUp, Clock, BookOpen, Award } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="bg-white/20 p-4 rounded-full">
          <TrendingUp className="h-12 w-12" />
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            La Rentabilité et le Risque d'une Action
          </h1>
          <p className="text-blue-100 text-lg mb-4">
            Maîtrisez les concepts fondamentaux du MEDAF et de l'évaluation des actions
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Expert</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">4h 15min</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}