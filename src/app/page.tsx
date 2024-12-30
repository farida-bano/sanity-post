
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; // Sanity client import
import { PortableText } from '@portabletext/react'; // PortableText component for rich text content
import imageUrlBuilder from '@sanity/image-url'; // Import image-url builder from Sanity
import { PortableTextBlock } from '@portabletext/types'; // Import PortableTextBlock for content typing

// Initialize the image builder with the Sanity client
const builder = imageUrlBuilder(client);

// Function to create an image URL from the asset reference
function urlFor(source: { _type: string; asset: { _ref: string } }) {
  return builder.image(source);
}

// Define the IPost interface with a more precise type structure
interface IPost {
  summary: string;
  title: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string; // Sanity's asset reference
      _type: 'reference';
    };
  };
  slug: {
    current: string;
    _type: 'slug';
  };
  content: PortableTextBlock[]; // More specific type for PortableText content
}

export default async function Home() {
  // Fetching the data from Sanity
  const res: IPost[] = await client.fetch(
    `*[_type == 'post']{summary, title, image, slug, content}`
  );

  return (
    <div className="space-y-10">
      {/* Rendering */}
      {res.map((data) => (
        <div key={data.slug.current} className="border-b pb-8">
          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-800">{data.title}</h1>
          
          {/* Summary */}
          <p className="mt-8 text-lg text-green-700">{data.summary}</p>

          {/* Image */}
          <div className="mt-4 flex justify-center">
            <Image
              src={urlFor(data.image).width(500).height(300).url()} // Use the urlFor function to get the full image URL
              alt={data.title}
              width={500}
              height={300}
              className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          {/* Render Portable Text */}
          <div className="mt-6">
            <PortableText value={data.content} />
          </div>

          {/* Link to full post */}
          <a
            href={`/post/${data.slug.current}`}
            className="mt-9 inline-block text-blue-700 hover:text-blue-900 font-bold underline transition-all duration-300"
          >
            Read more <span role="img" aria-label="book">📚</span>
          </a>
        </div>
      ))}
    </div>
  );
}