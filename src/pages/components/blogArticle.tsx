import * as React from 'react';
import { BlogData } from '../blog';

interface BlogArticleProps {
  blogContent: BlogData;
}

const BlogArticle = ({ blogContent }: BlogArticleProps) => {
  return (
    <article className='blog-article'>
      <h2>{blogContent.title}</h2>
      <p className='blog-article--author'>{blogContent.author}</p>
      <p>{blogContent.content.slice(0, 100) + '...'}</p>
    </article>
  );
};

export default BlogArticle;
