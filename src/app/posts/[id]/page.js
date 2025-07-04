// src/app/posts/[id]/page.js の先頭に追記
import { getAllPostIds } from '../../../lib/posts';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({
      id: path.params.id
  }));
}
import { getPostData } from '../../../lib/posts';
import PostDisplay from '../../../components/PostDisplay'; // 新しく作るコンポーネント

// ページのメインコンポーネント（サーバーで動く）
export default async function Post({ params }) {
  // サーバーサイドで記事データを取得
  const postData = await getPostData(params.id);

  // 取得したデータをクライアントコンポーネントに渡す
  return <PostDisplay postData={postData} />;
}