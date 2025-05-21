import Link from 'next/link';
import { Post } from '@/types/index';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const summary = post.body.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <div className="border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{summary}</p>
      <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline text-sm font-medium">
        Ler mais →
      </Link>
    </div>
  );
};

export default PostCard;
