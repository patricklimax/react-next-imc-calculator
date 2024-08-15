import Footer from './components/base/footer';
import { Header } from './components/base/header';
import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
	title: 'IMC APP',
	description: 'Aplicação desenvolvida para cálculo do Índice de Massa Corpórea'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<body className={manrope.className}>
				<main className='mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-2 md:px-2'>
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
