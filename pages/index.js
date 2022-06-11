import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts/featured-posts';
import Hero from '../components/home-page/hero/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started React NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is React for Production',
    date: '2022-06-06',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started React NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is React for Production',
    date: '2022-06-06',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started React NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is React for Production',
    date: '2022-06-06',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started React NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is React for Production',
    date: '2022-06-06',
  },
  {
    slug: 'getting-started-with-nextjs5',
    title: 'Getting Started React NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is React for Production',
    date: '2022-06-06',
  },
];

export default ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
