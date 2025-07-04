import { client } from './microcms';

// src/lib/posts.js の getSortedPostsData 関数をこれに差し替え

export const getSortedPostsData = async () => {
  try {
    console.log('getSortedPostsData: microCMSからデータを取得開始...');
    const data = await client.get({ endpoint: 'blogs' });

    console.log('---------------------------------');
    console.log('【microCMSからの生データ】');
    console.log(data); // 1. microCMSから返ってきた生データを表示します
    console.log('---------------------------------');

    return data.contents;

  } catch (error) {
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error('【エラー】microCMSとの通信に失敗しました：', error.message);
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // エラー時はサイトが落ちないように、空の配列を返す
    return []; 
  }
};

// ブログのID一覧を取得
export const getAllPostIds = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  return data.contents.map((content) => {
    return {
      params: {
        id: content.id,
      },
    };
  });
};

// ブログの詳細データを取得
export const getPostData = async (id) => {
  const data = await client.get({
    endpoint: 'blogs',
    contentId: id,
  });
  return data;
};