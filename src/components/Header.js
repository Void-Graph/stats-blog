import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold hover:text-gray-700">
          <span className="text-gray-200">VG</span> <span className="text-teal-100">M</span>ixed
          <span className="text-fuchsia-100">M</span>idea
        </Link>
        <nav>
          {/* 将来的にメニュー項目をここに追加できます */}
          {/* <Link href="/about" className="ml-4 hover:text-gray-300">About</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;