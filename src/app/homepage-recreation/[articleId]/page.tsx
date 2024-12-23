import { notFound } from 'next/navigation';

type ArticlePageProps = {
  params: Promise<{
    articleId: string;
  }>;
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { articleId } = await params;

  if (!articleId) {
    notFound();
  }

  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <h1 className="text-2xl font-bold">Showing : {articleId}</h1>
    </div>
  );
};

export default ArticlePage;
