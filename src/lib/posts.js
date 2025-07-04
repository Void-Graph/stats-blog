import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark'; // ← これを追加
import html from 'remark-html'; // ← これを追加


// postsフォルダへのパスを取得
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // /posts ディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名から '.md' を削除してIDとして使用
    const id = fileName.replace(/\.md$/, '');

    // Markdownファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter を使って投稿のメタデータ部分を解析
    const matterResult = matter(fileContents);

    // データをIDと組み合わせる
    return {
      id,
      ...matterResult.data,
    };
  });

  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // メタデータを解析
  const matterResult = matter(fileContents);

  // remark を使ってMarkdownをHTML文字列に変換
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データをIDとHTMLコンテンツと組み合わせる
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}