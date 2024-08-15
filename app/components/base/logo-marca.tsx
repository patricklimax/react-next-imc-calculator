import { Squada_One } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { LogoSimboloPlus } from './logo-simbolo';

const squadaOne = Squada_One({ weight: ['400'], subsets: ['latin'] });

export const LogoMarca = () => {
	return (
		<Link
			href={'https://patricklimax.vercel.app'}
			className='flex items-center gap-1 text-2xl text-background'>
			<LogoSimboloPlus />
			<div className={squadaOne.className}>DEV</div>
		</Link>
	);
};
