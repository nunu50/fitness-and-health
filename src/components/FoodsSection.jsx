import React from 'react'
import eating from './eating.jpg'
const FoodsSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Nutritious Foods for Fitness and Health: Tailoring Your Diet to Your Needs</h2>
        <p className="text-lg text-center text-gray-600 mb-8">In the vast landscape of dietary choices, the foods we consume play a pivotal role in shaping our fitness and overall well-being. Fresh fruits and vegetables, with their vibrant colors and rich nutrients, stand as pillars of strength for all individuals seeking to fuel their bodies with vitality. Lean proteins, such as grilled chicken or tofu, serve as essential building blocks for muscle growth and repair, ideal for those engaged in physical activities or strength training.

For individuals seeking sustained energy and endurance, whole grains like quinoa and brown rice offer a steady source of fuel, sustaining them through their daily challenges and workouts. Meanwhile, those focused on heart health and reducing cholesterol levels may find solace in the heart-healthy fats of avocados, nuts, and fatty fish like salmon or mackerel.

In the bustling rhythm of daily life, our dietary choices serve as the foundation upon which we build our health and resilience. Just as a well-tended garden flourishes with care and attention, so too does our body thrive when nourished with wholesome, nutrient-dense foods. By tailoring our diet to our individual needs and goals, we embark on a journey towards optimal health and vitality, honoring the unique needs of our bodies and minds.</p>
        <img src={eating} alt="Healthy Meal Image" className="rounded-lg shadow-lg my-4" />
        <p className="text-lg text-center text-gray-600">Images showcasing healthy meals.</p>
      </div>
    </div>
  );
};

export default FoodsSection