import type { Metadata } from 'next';
import '../styles/globals.css';
import '../styles/styles.scss';

export const metadata: Metadata = {
  title: 'NextJs.14 - Boilerplate',
  description: 'This is NextJs.14 Project with Typescript + TailwindCss+ Prettier + Storybook + Sass',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
