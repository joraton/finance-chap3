'use client';

import { Target, Rocket, BarChart3, TrendingUp, Brain, HelpCircle, FileText } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base de la rentabilité et du risque',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - Le couple rentabilité/risque',
    description: 'Calcul de la rentabilité et évaluation du risque',
    href: '/section-1',
    icon: BarChart3,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - Le risque de marché',
    description: 'Risque systématique et coefficient bêta',
    href: '/section-2',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Section III - Le MEDAF',
    description: "Modèle d'évaluation des actifs financiers",
    href: '/section-3',
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluez vos connaissances avec des questions interactives',
    href: '/quiz',
    icon: HelpCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Cas pratiques',
    description: "Exercices pratiques et cas d'application",
    href: '/questions-dscg',
    icon: FileText,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-lg">
          Suivez ce parcours structuré pour maîtriser la rentabilité et le risque des actions
        </p>
      </div>
      
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}