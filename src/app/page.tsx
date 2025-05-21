import { getPosts } from '@/lib/api';
import { Post } from '@/types/index';
import PostCard from '@/components/index/PostCard';





export default async function Home() {
  const posts:Post[] = await getPosts(); // SSG acontece aqui

  return (
    <>
      <section className="py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 px-4 md:px-0">Últimos Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
