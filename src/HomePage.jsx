import React from 'react'
import hike from './hike.jpg'
const HomePage = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Improve Your Health: Your Guide to Fitness and Wellness</h1>
        <p className="text-lg text-center text-gray-600 mb-8">Get Expert Tips and Easy-to-Understand Health Information</p>
        <img src={hike} alt="Fitness Image" className="rounded-lg shadow-lg mb-8" />
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Wellness Wonders</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">Stay Strong and Healthy with Exercise</h3>
            <p className="text-sm text-gray-600 mt-2">Regular exercise is crucial for our overall well-being. It helps in strengthening our muscles, enhancing cardiovascular health, and boosting our mental well-being. Engaging in physical activity releases endorphins, often referred to as "feel-good" hormones, which can uplift our mood and reduce stress. Additionally, consistent exercise supports weight management, improves sleep quality, and increases energy levels, leading to a healthier and more active lifestyle.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">Fuel Your Body with Good Food</h3>
            <p className="text-sm text-gray-600 mt-2">Maintaining a balanced diet is key to nourishing our bodies and promoting optimal health. A balanced diet rich in fruits, vegetables, lean proteins, and whole grains provides essential nutrients that support our overall well-being. Eating a variety of nutrient-dense foods helps to boost our immune system, improve digestion, and reduce the risk of chronic diseases. By making healthy food choices and practicing portion control, we can sustain energy levels, maintain a healthy weight, and feel our best every day.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default HomePage