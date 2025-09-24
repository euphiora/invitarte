import { FeatureType } from '@/types';
import React from 'react';

export const Feature = ({ icon, title, description }: FeatureType) => (
    <div className="bg-white rounded-xl shadow-md flex flex-col items-center px-8 py-10 w-[340px] max-w-full text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-6">{icon}</div>
        <h3 className="font-bold text-xl text-[#23293B] mb-4">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>
    </div>
);