// import { useState } from 'react';
import { getPosts } from '@/lib/api';
import { Post } from '@/types/index';
// import PostCard from '@/components/index/PostCard';
import Container from '@/components/index/Container';




export default async function Home() {
  
  const posts:Post[] = await getPosts(); // SSG acontece aqui
  
  

  return (
    <>
      <section className="py-6">
        <h1 className="text-2xl ms-2 md:text-3xl font-bold mb-4 px-4 md:px-0">Últimos Posts</h1>
        <Container posts={posts} />
        {/* <input
          type="text"
          placeholder="Buscar artigos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4  md:px-5">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div> */}
      </section>
    </>
  );
}
