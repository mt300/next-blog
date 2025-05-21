import Link from 'next/link';
import { Post } from '@/types/index';

export default function UserPosts({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Posts deste autor</h2>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border rounded-lg p-4 hover:shadow transition">
            <Link href={`/posts/${post.id}`}>
              <h3 className="text-md font-bold text-blue-600 hover:underline">{post.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{post.body.slice(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}