import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Noto_Sans_JP } from 'next/font/google'; // 1. Noto Sans JP をインポート

// 2. フォントの設定を行います
const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'], // 'latin' は必須オプションです
  weight: ['400', '700'], // 使用するフォントの太さを指定 (400:標準, 700:太字)
  display: 'swap', // フォント読み込み中のちらつきを防ぐ設定
  preload: true, // フォントを事前に読み込んでおく設定
});
export const revalidate = 60;
export const metadata = {
  title: 'VG MixedMidea',
  description: 'Next.jsとmicroCMSで作成した統計ブログ',
};

export default function RootLayout({ children }) {
  return (
    // 3. <body> タグの className にフォントのクラスを適用します
    <html lang="ja" className={notoSansJp.className}>
      <body className="bg-white text-gray-800"> 
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}