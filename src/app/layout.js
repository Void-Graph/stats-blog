import './globals.css';
import Header from '../components/Header'; // Headerをインポート
import Footer from '../components/Footer'; // Footerをインポート

export const metadata = {
  title: 'VG MixedMidea',
  description: 'Next.jsとmicroCMSで作成した統計ブログ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      {/* サイト全体の背景色や文字色をここで指定 */}
      <body className="bg-white text-gray-800"> 
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* メインコンテンツはflex-growで高さを可変にする */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}