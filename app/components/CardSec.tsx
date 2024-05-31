// components/CardGrid.tsx
import { ReactNode } from 'react';
import { FaPencilAlt, FaBox, FaFileAlt, FaImages, FaStickerMule } from 'react-icons/fa';

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
      <h3 className="mt-4 text-lg text-neutral-600 font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-400 text-sm">{description}</p>
    </div>
  );
};

interface CardData {
  icon: ReactNode;
  title: string;
  description: string;
  lastUpdated: string;
}

const cardData: CardData[] = [
  {
    icon: <FaPencilAlt />,
    title: 'Copywriting',
    description: 'Learn about how we use high-quality, on-brand stationary to represent our brand offline and create a memorable experience for our recipients.',
    lastUpdated: 'Last updated on 3/1/2023',
  },
  {
    icon: <FaFileAlt />,
    title: 'Proofreading',
    description: 'Discover how we use brochures to convey our message in a tangible and memorable way, using visually appealing design, informative and valuable content, and on-brand messaging.',
    lastUpdated: 'Last updated on 3/1/2023',
  },
  {
    icon: <FaBox />,
    title: 'Building Web-Apps',
    description: 'Learn about how we use on-brand, sustainable, and memorable packaging to reflect our values and mission, and create a memorable unboxing experience for our customers.',
    lastUpdated: 'Last updated on 3/1/2023',
  },
  {
    icon: <FaImages />,
    title: 'Graphic Design',
    description: 'Discover how we use visually appealing and strategically placed posters to bring our brand to life and engage with our audience in a creative and impactful way.',
    lastUpdated: 'Last updated on 3/1/2023',
  },
  {
    icon: <FaStickerMule />,
    title: 'Sticker',
    description: 'Learn about how we use stickers as a fun and interactive tool for spreading our brand message, encouraging engagement, and fostering brand loyalty.',
    lastUpdated: 'Last updated on 3/1/2023',
  },
];

const CardGrid: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            lastUpdated={card.lastUpdated}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
