// Data injection system for SSG
// This allows us to inject build-time data into components

import { BlogPost, Job } from "./buildTimeData";

export interface StaticData {
  blogPosts?: BlogPost[];
  jobs?: Job[];
  categories?: string[];
  [key: string]: unknown;
}

// Global static data store
let staticDataStore: StaticData = {};

// Function to set static data (called during build)
export function setStaticData(data: StaticData) {
  staticDataStore = { ...staticDataStore, ...data };
}

// Function to get static data (used by components)
export function getStaticData(): StaticData {
  return staticDataStore;
}

// Hook-like function for components to get static data
export function useStaticData<T = unknown>(key: string): T | undefined {
  return staticDataStore[key] as T;
}

// Reset static data (useful for testing)
export function resetStaticData() {
  staticDataStore = {};
}
