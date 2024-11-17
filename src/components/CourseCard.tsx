import React from 'react';
import { Play, Clock } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const totalDuration = course.series.reduce((acc, series) => acc + series.duration, 0);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{course.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Play className="h-4 w-4" />
            <span>{course.series.length} videos</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{Math.round(totalDuration / 60)} mins</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${course.engagement.completionRate}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-gray-500 text-right">
            {course.engagement.completionRate}% complete
          </p>
        </div>
      </div>
    </div>
  );
}