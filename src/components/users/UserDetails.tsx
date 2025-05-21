import { User } from '@/types';

export default function UserDetails({ user }: { user: User }) {
  return (
    <section className="mb-6 border-b pb-4">
      <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
      <p className="text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">
        Website: <a href={`https://${user.website}`} className="text-blue-500 underline">{user.website}</a>
      </p>
      {/* <p className="text-sm text-gray-600">Empresa: {user.company.name}</p> */}
    </section>
  );
}