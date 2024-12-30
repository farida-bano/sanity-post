import { createClient } from 'next-sanity';

// Directly passing the environment variables into createClient
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Accessing project ID from .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,      // Accessing dataset from .env.local
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Accessing API version from .env.local
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
