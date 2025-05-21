import { User } from '@/types';
import Link from 'next/link';

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm my-6">
      <p className="text-sm text-gray-600">Autor:</p>
      <h3 className="text-md sm:text-lg font-bold">{user.name}</h3>
      <p className="text-sm text-gray-500">@{user.username} — {user.email}</p>
      <Link href={`/users/${user.id}`} className="text-blue-500 text-sm mt-2 inline-block">
        Ver posts desse autor →
      </Link>
    </div>
  );
}
