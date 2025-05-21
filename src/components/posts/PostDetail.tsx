import { Post } from '@/types/index';

export default function PostDetail({ post }: { post: Post }) {
  return (
    <article className="mb-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{post.body}</p>
    </article>
  );
}
