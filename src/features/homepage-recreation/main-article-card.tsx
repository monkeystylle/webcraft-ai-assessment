import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import Link from 'next/link';
import { articlePath } from '@/paths';

interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  description?: string;
}

const MainArticleCard = (props: ArticleCardProps) => {
  const { image, title, description, author, date, slug } = props;

  return (
    <Link
      href={articlePath(slug)}
      className="block hover:opacity-90 transition-opacity"
    >
      <Card className="relative w-full aspect-video overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <CardContent className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 bg-black/50 text-white">
          <h2 className="text-base sm:text-base md:text-3xl font-bold text-white mb-1 sm:mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-2 sm:mb-3 md:mb-4 max-w-screen-sm line-clamp-2">
            {description}
          </p>
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-xs sm:text-sm">
            <span className="font-bold">{author}</span>
            <span>{date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export { MainArticleCard };
