// 'use client'
import ArticleItem from "@/components/articles/ArticleItem";
import { Article } from "@/utils/types";
import Link from "next/link";

const ArticlesPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error(`Failed to fetch articles`);
  }
  const articles: Article[] = await response.json();

  return (
    <section className="container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map((item) => (
          <ArticleItem key={item.id} article={item} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesPage;
