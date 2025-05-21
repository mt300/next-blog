import Link from 'next/link';

const Header = () => (
  <header className="bg-white shadow-sm py-4 px-4 md:px-8">
    <div className="max-w-6xl mx-auto flex justify-between items-center ">
      <Link href="/" className="text-xl font-bold text-blue-700">Next Blog</Link>
    </div>
  </header>
);

export default Header;
