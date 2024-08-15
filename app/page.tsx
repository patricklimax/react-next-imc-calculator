'use client';

import { ArrowRightCircle, PlusCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { ParagraphItem } from './components/paragraph';
import { Square } from './components/square';
import { levels } from './data/levels';
import { paragraphs } from './data/paragraphs';
import { calculateIMC } from './helpers/imc';
import type { Level } from './types/level';

export default function Home() {
	const [heightField, setHeightField] = useState<number>(0);
	const [weightField, setWeightField] = useState<number>(0);
	const [toShow, setToShow] = useState<Level | null>(null);

	const headleCalculateIMC = () => {
		setToShow(calculateIMC(heightField, weightField));
	};

	const handleBackBtn = () => {
		setToShow(null);
		setHeightField(0);
		setWeightField(0);
	};

	return (
		<main className='mx-auto w-full flex-1'>
			<h1 className='text-center text-3xl font-bold uppercase text-primary'>
				Calculadora <span className='bg-primary px-2 text-background'>IMC</span>
			</h1>

			<div className='mt-8 flex flex-col gap-8 md:flex-row'>
				<section className='flex flex-col gap-6 md:w-3/5'>
					<div className='flex flex-col gap-4'>
						{paragraphs.map(paragraph => (
							<ParagraphItem
								key={paragraph.title}
								paragraph={paragraph}
							/>
						))}
					</div>

					<div className='flex gap-10'>
						<input
							className='w-1/2 border-0 border-b-2 border-primary bg-transparent px-2 py-1 outline-none placeholder:text-sm placeholder:text-primary/70 disabled:opacity-90'
							type='number'
							placeholder='Altura (ex. 1.72 m)'
							onChange={e => setHeightField(Number.parseFloat(e.target.value))}
							value={heightField > 0 ? heightField : ''}
							disabled={!!toShow}
						/>
						<input
							className='w-1/2 border-0 border-b-2 border-primary bg-transparent px-2 py-1 outline-none placeholder:text-sm placeholder:text-primary/70 disabled:opacity-90'
							type='number'
							placeholder='Peso (ex. 68.2kg)'
							onChange={e => setWeightField(Number.parseFloat(e.target.value))}
							value={weightField > 0 ? weightField : ''}
							disabled={!!toShow}
						/>
					</div>

					<div className='mt-4 flex items-center gap-8 font-medium'>
						<button
							type='button'
							onClick={handleBackBtn}
							className='flex flex-1 items-center justify-center gap-2 rounded border border-primary bg-transparent p-3 text-lg text-primary transition-all duration-500 ease-in-out hover:bg-primary hover:text-background disabled:bg-muted-foreground disabled:text-muted'>
							<PlusCircleIcon />
							<span>Novo</span>
						</button>

						<button
							type='button'
							className='flex flex-1 items-center justify-center gap-2 rounded border bg-confirmed-foreground p-3 text-lg text-confirmed transition-all duration-500 ease-in-out hover:bg-confirmed-foreground/100 disabled:bg-muted-foreground disabled:text-muted'
							disabled={!heightField || !weightField}
							onClick={headleCalculateIMC}>
							{!heightField || !weightField ? (
								<span>Inserir Altura e Peso</span>
							) : (
								<span className='flex items-center gap-2'>
									<span>Calcular</span>
									<ArrowRightCircle />
								</span>
							)}
						</button>
					</div>
				</section>

				<section className='md:w-2/5'>
					{!toShow && (
						<div className='grid h-full w-full grid-cols-2 gap-2 text-foreground'>
							{levels.map(level => (
								<Square
									key={level.title}
									item={level}
								/>
							))}
						</div>
					)}

					{toShow && (
						<div className='flex h-full w-full text-3xl'>
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
