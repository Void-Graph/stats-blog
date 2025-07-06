"use client";

import Link from 'next/link';
import MyBarChart from './MyBarChart';

export default function PostDisplay({ postData }) {
  if (!postData) {
    return <div>読み込み中...</div>;
  }

  console.log("--- PostDisplay コンポーネント開始 ---");
  console.log("受け取った記事データ全体:", postData);
  console.log("chartDataの中身（文字列のはず）:", postData.chartData);
  console.log("chartDataのデータ型:", typeof postData.chartData);
  // ===== ここからが追加部分 =====
  let parsedChartData = null;
  try {
    // postData.chartData が存在し、空の文字列でないことを確認
    if (postData.chartData && postData.chartData.trim() !== '') {
      // 文字列をJSONオブジェクトに変換（パース）します
      parsedChartData = JSON.parse(postData.chartData);
    }
  } catch (e) {
    console.error("グラフデータのJSON形式が正しくありません:", e);
    // パースに失敗した場合は何もしない（グラフは表示されない）
  }
  // ===== ここまでが追加部分 =====

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <article className="w-full max-w-2xl">
        {/* ... h1 や div など、他の部分は変更ありません ... */}
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <div className="text-gray-500 mb-6">
          {new Date(postData.publishedAt).toLocaleDateString('ja-JP')}
        </div>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />

        {postData.graph && (
          <div className="mt-8">
            {/* MyBarChart には、変換後の parsedChartData を渡します */}
            <MyBarChart chartData={parsedChartData} />
          </div>
        )}
      </article>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← HOMEへ戻る
        </Link>
      </div>
    </main>
  );
}