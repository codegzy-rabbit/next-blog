import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const PostContent = ({ data }) => {
  return (
    <article className={classes.content}>
      <PostHeader title={data.title} image={`/images/posts/${data.image}`} />
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
