import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { PortableTextBlock } from '@portabletext/types';

const builder = imageUrlBuilder(client);

function urlFor(source: { _type: string; asset: { _ref: string } }) {
  return builder.image(source);
}

interface IPost {
  summary: string;
  title: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  slug: {
    current: string;
    _type: 'slug';
  };
  content: PortableTextBlock[];
}

export default async function Home() {
  let res: IPost[] = [];

  try {
    res = await client.fetch(
      `*[_type == 'post']{summary, title, image, slug, content}`
    );
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      {res.map(({ title, summary, image, slug, content }) => (
        <div key={slug.current} className="border-b pb-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center hover:text-blue-600 transition-colors duration-300">
            {title}
          </h1>

          {/* Summary */}
          <p className="mt-4 text-base sm:text-lg text-green-700 text-center font-bold">
            {summary}
          </p>

          {/* Image */}
          <div className="mt-6 flex justify-center">
            <Image
              src={urlFor(image).width(500).height(300).url()}
              alt={title}
              width={500}
              height={300}
              className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Portable Text Content */}
          <div className="mt-6 text-justify sm:text-left">
            <PortableText value={content} />
          </div>

          {/* Read More Link */}
          <div className="mt-6 flex justify-center">
            <a
              href={`/post/${slug.current}`}
              className="text-blue-700 hover:text-blue-900 font-bold underline transition-colors duration-300"
            >
              Read more <span role="img" aria-label="book">📚</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
