import { notFound } from 'next/navigation';
import UserDetails from '@/components/users/UserDetails';
import UserPosts from '@/components/users/UserPosts';
import { getUser, getUserPosts } from '@/lib/api';

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  const posts = await getUserPosts(params.id);

  if (!user) return notFound();

  return (
    <main className="max-w-3xl mx-auto my-5 px-4 py-6 bg-white shadow-sm rounded-lg">
      <UserDetails user={user} />
      <UserPosts posts={posts} />
    </main>
  );
}
