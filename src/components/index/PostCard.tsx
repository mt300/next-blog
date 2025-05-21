'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Post } from '@/types/index';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        // Busca a imagem do endpoint da API
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => setImageUrl(data.message))
        .catch((err) => console.error('Erro ao buscar imagem:', err));
    }, []);

    const summary = post.body.split(' ').slice(0, 20).join(' ') + '...';

    return (
        <div className="border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
            {imageUrl && (
                <img
                src={imageUrl}
                alt="Imagem ilustrativa"
                className="w-full h-48 object-cover"
                />
            )}
            <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title.charAt(0).toUpperCase() + post.title.substring(1) }</h2>
                <p className="text-gray-600 text-sm mb-4">{summary.charAt(0).toUpperCase() + summary.substring(1)}</p>
                <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline text-sm font-medium">
                    Ler mais →
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
