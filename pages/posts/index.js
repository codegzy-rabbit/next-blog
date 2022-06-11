import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

export default ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export async function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
