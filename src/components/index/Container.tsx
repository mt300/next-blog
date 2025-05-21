'use client';

import { useState } from 'react';
import { Post } from '@/types';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function Container({ posts }: Props) {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const postsPerPage = 6;

  // 1. Filtra os posts com base na busca
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  // 2. Paginação: calcula índice inicial e final
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // 3. Muda de página com segurança
  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // 4. Resetar página ao buscar algo novo
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1); // volta pra primeira página sempre que busca algo novo
  };

  return (
    <>
      <input
        type="text"
        placeholder="Buscar artigos..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 border rounded-lg my-5 mx-2"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-5">
        {paginatedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Navegação da Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            ← Anterior
          </button>
          <span className="text-gray-700">Página {page} de {totalPages}</span>
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Próxima →
          </button>
        </div>
      )}
    </>
  );
}
