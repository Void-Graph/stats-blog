// src/app/posts/[id]/page.js に貼り付ける正しいコード

import { getAllPostIds, getPostData } from '../../../lib/posts';
import PostDisplay from '../../../components/PostDisplay';

// ビルド時にNext.jsが全記事のパス（URL）を生成するために使います
export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths.map(path => ({
    id: path.params.id
  }));
}

// これが各記事ページの本体（サーバーで動く）です
export default async function Post({ params }) {
  // URLのidを使って、microCMSから特定の記事データを取得します
  const postData = await getPostData(params.id);

  // 取得したデータを、表示専門のPostDisplayコンポーネントに渡します
  return <PostDisplay postData={postData} />;
}