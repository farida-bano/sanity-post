// sanity/lib/image.ts

import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Initialize the image URL builder with the project ID and dataset.
const builder = createImageUrlBuilder({ projectId, dataset });

// Function to generate the image URL
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
