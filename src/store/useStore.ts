import { create } from 'zustand';
import type { User, Course } from '../types';

interface Store {
  user: User | null;
  courses: Course[];
  setUser: (user: User | null) => void;
  setCourses: (courses: Course[]) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  courses: [],
  setUser: (user) => set({ user }),
  setCourses: (courses) => set({ courses }),
}));