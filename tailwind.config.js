/** @type {import('tailwindcss').Config} */
module.exports = {
  // contentには、Tailwindのクラス名が書かれているすべてのファイルのパスを指定します
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ここに将来的に、色やフォントなどの独自のカスタマイズを追加できます
    },
  },
  // pluginsには、追加機能（プラグイン）を指定します
  plugins: [
    require('@tailwindcss/typography'), // 今回追加したい、文章をきれいにするプラグイン
  ],
};