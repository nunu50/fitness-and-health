import React from 'react'
import workout from './workout.jpg'
const FitnessSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">The Transformative Power of Fitness: A Journey to Strength and Resilience</h2>
        <p className="text-lg text-center text-gray-600 mb-8">In the quiet hours before dawn, as the first rays of sunlight pierce through the darkness, a solitary figure emerges onto the deserted streets. Each footfall echoes with determination, a steady rhythm that mirrors the beating of a resolute heart. The path ahead is long and winding, filled with challenges waiting to be conquered. But within the depths of this solitary soul burns a fire, a relentless drive to push beyond limits and rise above the ordinary.

The journey to fitness is not merely a physical transformation; it is a journey of self-discovery and empowerment. With each drop of sweat that falls, a sense of accomplishment blooms, fueling the spirit to reach higher and go further. The weight of the world may press down upon weary shoulders, but the strength cultivated through hours of dedication provides a shield against adversity.

In the hushed stillness of a gym, the clinking of weights and the hum of treadmills create a symphony of determination. Muscles strain and bodies tremble, yet each movement is a testament to resilience and perseverance. The mind, once clouded with doubt, now stands firm and unwavering, fortified by the discipline of a relentless pursuit of excellence.

As the journey unfolds, the body transforms, sculpted by sweat and sacrifice into a temple of strength and vitality. The echoes of past limitations fade into the distance, drowned out by the roar of triumph that reverberates through the soul. In this realm of sweat and steel, cliches are reborn as truths, reminding us that the only limits that exist are the ones we place upon ourselves.

And so, the journey continues, a never-ending quest for self-improvement and personal growth. With each step taken, each weight lifted, and each breath drawn, the journey to fitness becomes a testament to the indomitable human spirit, a testament to the power of resilience, strength, and the unwavering belief that within each of us lies the potential to achieve greatness.</p>
        <img src={workout} alt="Workout Image" className="rounded-lg shadow-lg my-4" />
        <p className="text-lg text-center text-gray-600">Images showing workout routines.</p>
      </div>
    </div>
  );
};

export default FitnessSection