export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'Apartment' | 'House' | 'Villa' | 'Penthouse';
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  features: string[];
  description: string;
  isFeatured?: boolean;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Azure Penthouse',
    price: 4500000,
    location: 'Biscayne Bay, Miami',
    type: 'Penthouse',
    beds: 4,
    baths: 5,
    sqft: 5200,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687940-47a04b629571?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Infinity Pool', 'Private Elevator', 'Smart Home System', 'Wine Cellar', '24/7 Concierge'],
    description: 'Experience unparalleled luxury in this breathtaking penthouse overlooking Biscayne Bay. Featuring floor-to-ceiling windows, a private rooftop terrace, and bespoke finishes throughout.',
    isFeatured: true,
    agent: {
      name: 'Alexander Sterling',
      phone: '+1 (305) 555-0123',
      email: 'alexander@primenest.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '2',
    title: 'Villa Mariposa',
    price: 8250000,
    location: 'Bel Air, Los Angeles',
    type: 'Villa',
    beds: 6,
    baths: 8,
    sqft: 12000,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Home Theater', 'Tennis Court', 'Guest House', 'Chef\'s Kitchen', 'Solar Power'],
    description: 'A masterpiece of modern architecture, Villa Mariposa offers ultimate privacy and grandeur. Nestled in the hills of Bel Air, this estate features sweeping city views and world-class amenities.',
    isFeatured: true,
    agent: {
      name: 'Victoria Vanderbilt',
      phone: '+1 (310) 555-0199',
      email: 'victoria@primenest.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '3',
    title: 'The Glass House',
    price: 2100000,
    location: 'Chelsea, London',
    type: 'Apartment',
    beds: 2,
    baths: 2,
    sqft: 1850,
    images: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Underfloor Heating', 'Balcony', 'Gym Access', 'Underground Parking'],
    description: 'A sleek, contemporary apartment in the heart of Chelsea. Minimalist design meets maximum comfort with high-end appliances and stunning urban vistas.',
    isFeatured: true,
    agent: {
      name: 'Julian Thorne',
      phone: '+44 20 7946 0123',
      email: 'julian@primenest.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '4',
    title: 'Oakwood Manor',
    price: 3400000,
    location: 'Greenwich, Connecticut',
    type: 'House',
    beds: 5,
    baths: 4,
    sqft: 6800,
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Library', 'Fireplace', 'Expansive Garden', 'Workshop'],
    description: 'Classic elegance meets modern convenience in this beautifully restored manor. Set on 5 acres of lush landscape, it\'s the perfect family retreat.',
    agent: {
      name: 'Alexander Sterling',
      phone: '+1 (305) 555-0123',
      email: 'alexander@primenest.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '5',
    title: 'Skyline Loft',
    price: 1850000,
    location: 'Tribeca, New York',
    type: 'Apartment',
    beds: 3,
    baths: 2,
    sqft: 2400,
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Exposed Brick', 'High Ceilings', 'Rooftop Access', 'Doorman'],
    description: 'An authentic Tribeca loft with industrial charm and modern luxury. Spacious open-plan living with iconic city views.',
    agent: {
      name: 'Victoria Vanderbilt',
      phone: '+1 (310) 555-0199',
      email: 'victoria@primenest.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: '6',
    title: 'Emerald Bay Estate',
    price: 12000000,
    location: 'Laguna Beach, California',
    type: 'Villa',
    beds: 7,
    baths: 9,
    sqft: 15000,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Private Beach Access', 'Helipad', 'Infinity Pool', 'Spa'],
    description: 'The pinnacle of coastal living. This sprawling estate offers direct access to a private cove and panoramic ocean views.',
    agent: {
      name: 'Julian Thorne',
      phone: '+44 20 7946 0123',
      email: 'julian@primenest.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  }
];
