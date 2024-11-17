import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Navbar() {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">EduPro</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/courses"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Courses
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2 text-sm">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{user.name}</span>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}