"use client"; // こちらに "use client" をつけます

import Link from 'next/link';
import MyBarChart from './MyBarChart'; // グラフコンポーネント

// postData を props として受け取る
export default function PostDisplay({ postData }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <article className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <div className="text-gray-500 mb-6">
          {postData.date}
        </div>
        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        {/* メタデータに graph: true があればグラフを表示 */}
        {postData.graph && (
          <div className="mt-8">
            <MyBarChart />
          </div>
        )}
      </article>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← ブログ一覧へ戻る
        </Link>
      </div>
    </main>
  );
}