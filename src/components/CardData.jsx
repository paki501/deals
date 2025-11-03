// Home.jsx or any parent component
import React from 'react';
import PlaceCards from './PlaceCards';

const dummyCards = [
  {
    title: 'Dental Clinic',
    date: 'Wed May 20',
    time: '08:00 – 08:30 PM',
    price: '$50.00',
    image: 'room.svg',
  },
  {
    title: 'Dental Clinic',
    date: 'Wed May 20',
    time: '08:00 – 08:30 AM',
    price: '$50.00',
    image: 'room.svg',
  },
  {
    title: 'Dental Clinic',
    date: 'Wed May 20',
    time: '08:00 – 08:30 AM',
    price: '$50.00',
    image: 'room.svg',


  },
  {
    title: 'Dental Clinic',
    date: 'Wed May 20',
    time: '08:00 – 08:30 AM',
    price: '$50.00',
    image: 'room.svg',
  },
  {
    title: 'Dental Clinic',
    date: 'Wed May 20',
    time: '08:00 – 08:30 AM',
    price: '$50.00',
    image: 'room.svg',
  },
];

const CardData = () => {
  return <PlaceCards cards={dummyCards} />;
};

export default CardData;
