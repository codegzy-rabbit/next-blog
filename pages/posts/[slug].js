import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData } from '../../lib/posts-util';

export default ({ data }) => {
  return <PostContent data={data} />;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const data = getPostData(slug);
  return {
    props: {
      data,
    },
  };
}
