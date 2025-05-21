import { Post, Comment, User } from '@/types/index';

// Busca todos os posts
export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }, // 1 hora (ISR)
  });
  return res.json();
}

// Busca um post específico
export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}
// Busca os comentários de um post específico
export async function getCommentsByPost(id: string): Promise<Comment[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}
// Busca todos os usuários
export async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}
// Busca todos os posts de um usuário específico
export async function getUserPosts(id: string) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return res.json();
  } catch {
    return [];
  }
}