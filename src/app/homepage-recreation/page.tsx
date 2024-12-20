import { MainArticleCard } from '@/features/homepage-recreation/main-article-card';
import { Header } from '@/features/homepage-recreation/header';
import { ArticleCard } from '@/features/homepage-recreation/article-card';

const articles = [
  {
    title: 'The 10 Best Espresso Machines for Home Use',
    author: 'Jared George',
    date: '16 Sep 2024',
    image: 'https://picsum.photos/id/42/200/300',
    slug: 'best-espresso-machines-2024',
    description:
      'Discover the best espresso machines for home use with our top picks, based on real user reviews, that are perfect for brewing quality coffee with ease.',
  },
  {
    title: '12 of the Best-Reviewed Blenders of 2024',
    author: 'Jared George',
    date: '16 Sep 2024',
    image: 'https://picsum.photos/id/43/200/300',
    slug: 'best-blenders-2024',
  },
  {
    title: 'The Best Luggage of 2024',
    author: 'Jared George',
    date: '16 Sep 2024',
    image: 'https://picsum.photos/id/45/200/300',
    slug: 'best-luggage-2024',
  },
  {
    title: 'The 8 Best-Reviewed Vacuum Mops',
    author: 'Sarah Edwards',
    date: '16 Sep 2024',
    image: 'https://picsum.photos/id/46/200/300',
    slug: 'best-vacuum-mops-2024',
  },
  {
    title: 'Drink the Rainbow: The 10 Best Juicers',
    author: 'Sarah Edwards',
    date: '16 Sep 2024',
    image: 'https://picsum.photos/id/47/200/300',
    slug: 'best-juicers-2024',
  },
];

export default function RecreatePage() {
  const [featured] = articles;

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-orange-500">
            Lifestyle & Home
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to elevate your living space and shop the latest
            home essentials.
          </p>
        </div>

        <div className="">
          <MainArticleCard
            image={featured.image}
            title={featured.title}
            description={featured.description}
            author={featured.author}
            date={featured.date}
            slug={featured.slug}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[24px]">
          {articles.slice(1).map(article => (
            <ArticleCard
              key={article.slug}
              image={article.image}
              title={article.title}
              author={article.author}
              date={article.date}
              slug={article.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
