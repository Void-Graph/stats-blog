import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default async function Home() {
  // getSortedPostsData は microCMS から記事の配列を取得します
  const allPostsData = await getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">統計ブログ</h1>
        <ul className="space-y-4">
          {/* 'date' ではなく 'publishedAt' を使います */}
          {allPostsData.map(({ id, publishedAt, title }) => (
            <li key={id} className="border p-4 rounded-lg hover:bg-gray-100">
              <Link href={`/posts/${id}`} className="text-xl font-bold text-blue-600">
                {title}
              </Link>
              <br />
              <small className="text-gray-500">
                {/* new Date() で日付オブジェクトに変換して表示 */}
                {new Date(publishedAt).toLocaleDateString('ja-JP')}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}