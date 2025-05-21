import { Post } from '@/types/index';

export default function PostDetail({ post }: { post: Post }) {
  return (
    <article className="mb-6 border-b pb-4 flex flex-col items-center">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{post.body}</p>
    </article>
  );
}
