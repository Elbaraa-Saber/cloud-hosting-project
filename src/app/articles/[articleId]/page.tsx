// we called folder by this way [id] because in link we did 'articles/:id'
// so next will search about folder into articles which have this src [id] and will give it this id 1,2,....
// 'use client'
import { Article } from "@/utils/types";

interface SingleArticlePageProps {
  params: { articleId: string };
}
const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  console.log("articleId:", params.articleId);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.articleId}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch article with id ${params.articleId}`);
  }
  const article: Article = await response.json();

  return (
    <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-white p-7 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          {article.title}
        </h1>
        <div className="text-gray-700">1/1/2024</div>
        <p className="text-gray-800 text-xl mt-5">{article.body}</p>
      </div>
    </section>
  );
};

export default SingleArticlePage;
