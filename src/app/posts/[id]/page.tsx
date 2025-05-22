import { getPost, getCommentsByPost, getUser } from '@/lib/api';
import PostDetail from '@/components/posts/PostDetail';
import CommentList from '@/components/posts/CommentList';
import UserCard from '@/components/posts/UserCard';
import { PageProps } from '../../../../.next/types/app/layout';



export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getCommentsByPost(id);
  const user = await getUser(String(post.userId));

  return (
    <>
      <UserCard user={user} />
      <PostDetail post={post} />
      <CommentList comments={comments} />
    </>
  );
}
