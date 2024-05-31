import { Button } from '@/shared/ui/button';
import Section from '@/shared/ui/section';
import type { FC } from 'react';
import office from '../assets/office.png';
import grain_bg from '@/shared/assets/grain_bg.svg';

const Home: FC = () => (
	<Section className='relative mx-0 min-h-dvh w-full max-w-full py-0 xl:px-32 xl:py-0'>
		<div
			className='absolute bottom-0 left-0 right-0 top-0 z-0 w-full bg-background bg-cover bg-center bg-no-repeat opacity-50 lg:bg-fixed'
			style={{
				backgroundImage: `url(${office})`
			}}></div>

		<div className='relative z-20 flex h-dvh w-full flex-col justify-center'>
			<h1 className='mb-4 max-w-[30ch] text-pretty text-center text-3xl font-black tracking-normal md:text-left xl:text-5xl'>
				Интернет и Сетевые Решения для Вашего Офиса
			</h1>
			<h2 className='mb-6 max-w-[25ch] text-pretty text-center text-xl font-medium tracking-tight md:text-left xl:text-3xl'>
				Подключите офис к интернету всего от 1100 рублей в месяц!
			</h2>
			<p className='tracking-tigher mb-8 max-w-[50ch] text-pretty text-center text-base md:text-left xl:text-xl'>
				Предлагаем полный комплекс услуг: подключение к интернету, создание
				локальной сети, настройка IP-телефонии и видеонаблюдения.
			</p>

			<div className='flex flex-row flex-wrap-reverse items-center justify-center gap-2 md:justify-start lg:gap-6'>
				<Button asChild className='w-max text-lg' variant='secondary' size='lg'>
					<a href='#features'>Подробнее</a>
				</Button>
				<Button
					asChild
					className='w-max text-lg dark:text-foreground'
					size='lg'>
					<a href='#contacts' className='relative overflow-hidden'>
						<span className='z-10'>Подключить</span>
						<img
							src={grain_bg}
							className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-cover opacity-35'
						/>
					</a>
				</Button>
			</div>
		</div>
	</Section>
);

export default Home;
