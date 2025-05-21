import { Comment } from '@/types';

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <section>
      <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-4">Comentários</h2>
      <ul className="space-y-4">
        {comments.map(comment => (
          <li key={comment.id} className="bg-gray-100 p-3 rounded-md">
            <p className="text-sm font-semibold">{comment.name} — <span className="text-gray-500">{comment.email}</span></p>
            <p className="text-sm mt-1">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
