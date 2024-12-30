import { createClient } from 'next-sanity';

// Directly passing the environment variables into createClient
export const client = createClient({
  projectId: "fyv1no97",
  dataset:"production",
  apiVersion: "2023-10-30",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
