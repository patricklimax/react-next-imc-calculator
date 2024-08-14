'use client';
import { ArrowLeftCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Header } from './components/header';
import { Paragraph } from './components/paragraph';
import { Square } from './components/square';
import { levels } from './data/levels';
import { calculateIMC } from './helpers/imc';
import type { Level } from './types/level';

export default function Home() {
	const [heightField, setHeightField] = useState<number>(0);
	const [weightField, setWeightField] = useState<number>(0);
	const [toShow, setToShow] = useState<Level | null>(null);

	const headleCalculateIMC = () => {
		if (!heightField || !weightField) {
			alert('Obrigatório preencher todos os campos!');
		}
		setToShow(calculateIMC(heightField, weightField));
	};

	const handleBackBtn = () => {
		setToShow(null);
		setHeightField(0);
		setWeightField(0);
	};

	return (
		<main className='container mx-auto flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-10 md:px-0'>
			<Header />
			<div className='justify-center gap-10 py-8 md:flex'>
				<section className='flex flex-col justify-between md:w-3/5'>
					<div>
						<Paragraph
							title={'O que é?'}
							paragraph={
								'IMC - Índice de Massa Corpórea, indicador adotado pela Organização Mundial de Saúde para calcular o peso ideal para cada indivíduo.'
							}
						/>
						<Paragraph
							title={'Como é o cálculo'}
							paragraph={
								'O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado.'
							}
						/>
						<Paragraph
							title={'Quer descobrir seu IMC?'}
							paragraph={
								'Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos (.) como separadores.'
							}
						/>
					</div>
					<div className='mb-4 flex gap-10'>
						<input
							className='w-1/2 border-0 border-b-2 border-green-900 bg-transparent px-2 py-1 outline-none placeholder:text-sm placeholder:text-green-900/70 disabled:opacity-90'
							type='number'
							placeholder='Altura (ex. 1.72 m)'
							onChange={e => setHeightField(Number.parseFloat(e.target.value))}
							value={heightField > 0 ? heightField : ''}
							disabled={!!toShow}
						/>
						<input
							className='w-1/2 border-0 border-b-2 border-green-900 bg-transparent px-2 py-1 outline-none placeholder:text-sm placeholder:text-green-900/70 disabled:opacity-90'
							type='number'
							placeholder='Peso (ex. 68.2kg)'
							onChange={e => setWeightField(Number.parseFloat(e.target.value))}
							value={weightField > 0 ? weightField : ''}
							disabled={!!toShow}
						/>
					</div>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className='mb-7 mt-2 flex w-full items-center justify-center gap-2 rounded bg-green-900 p-3 text-lg text-green-300 transition-all duration-500 ease-in-out hover:bg-green-950 disabled:opacity-90 md:mb-0'
						disabled={!!toShow}
						onClick={headleCalculateIMC}>
						Calcular <ArrowRightIcon className='h-6 w-6' />
					</button>
				</section>
				<section className='flex md:w-2/5'>
					{!toShow && (
						<div className='grid flex-1 grid-cols-2 items-center justify-between gap-1'>
							{levels.map(level => (
								<Square
									key={level.title}
									item={level}
								/>
							))}
						</div>
					)}
					{toShow && (
						<div className='relative flex h-full w-full text-3xl'>
							<ArrowLeftCircleIcon
								onClick={handleBackBtn}
								className='absolute top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-green-900 text-green-200'
							/>
							<div className='flex h-full w-full'>
								<Square item={toShow} />
							</div>
						</div>
					)}
				</section>
			</div>
		</main>
	);
}
