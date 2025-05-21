import { getPost, getCommentsByPost, getUser } from '@/lib/api';
import PostDetail from '@/components/posts/PostDetail';
import CommentList from '@/components/posts/CommentList';
import UserCard from '@/components/posts/UserCard';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  const comments = await getCommentsByPost(params.id);
  const user = await getUser(String(post.userId));

  return (
    <>
        <UserCard user={user} />
        <PostDetail post={post} />
        <CommentList comments={comments} />      
    </>
  );
}
