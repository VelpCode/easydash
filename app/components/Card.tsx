// components/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  lastUpdated: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, lastUpdated }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="bg-gray-200 p-3 rounded-full">
          {icon}
        </div>
        <span className="text-gray-400 text-sm">{lastUpdated}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
