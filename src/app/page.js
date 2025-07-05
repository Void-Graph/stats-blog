import Link from 'next/link';
import Image from 'next/image'; // Next.jsの画像最適化コンポーネントをインポート
import { getSortedPostsData } from '../lib/posts';

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    // 背景色を少しグレーにして、カードが映えるようにします
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">HOME</h1>

        {/* 記事一覧をグリッドレイアウトで表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* eyecatch もデータから受け取ります */}
          {allPostsData.map(({ id, publishedAt, title, eyecatch }) => (
            <Link href={`/posts/${id}`} key={id} className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
              <article>
                {/* アイキャッチ画像がある場合のみ表示 */}
                {eyecatch ? (
                  <div className="relative w-full h-48">
                    <Image
                      src={eyecatch.url}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  // 画像がない場合のプレースホルダー
                  <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
                  <small className="text-gray-500">
                    {new Date(publishedAt).toLocaleDateString('ja-JP')}
                  </small>
                </div>
              </article>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}