import { articlePath } from '@/paths';
import Image from 'next/image';
import Link from 'next/link'; // Add this import
import React from 'react';

interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

export function ArticleCard({
  image,
  title,
  author,
  date,
  slug,
}: ArticleCardProps) {
  return (
    <Link
      href={articlePath(slug)}
      className="block overflow-hidden hover:opacity-90 transition-opacity"
    >
      <div className="overflow-hidden">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex items-center justify-between text-sm mt-[12px]">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <h3 className="text-sm font-semibold mb-2 line-clamp-2">{title}</h3>
      </div>
    </Link>
  );
}
