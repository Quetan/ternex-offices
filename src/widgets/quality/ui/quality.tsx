import Section from '@/shared/ui/section';
import type { FC } from 'react';
import networkHighQuality from '../assets/network-high-quality.png';
import Card from '@/shared/ui/card';

const Quality: FC = () => (
	<Section title='Надежность и качество' id='quality'>
		<div className='mb-6 grid grid-cols-1 items-center justify-between gap-16 xl:grid-cols-2'>
			<img
				src={networkHighQuality}
				className='mx-auto aspect-square max-h-96 w-auto dark:drop-shadow-[0_0_100px_hsl(var(--primary))] xl:h-auto xl:max-h-full xl:w-full'
			/>
			<div>
				<p className='mb-6 max-w-prose text-base xl:text-2xl'>
					Мы предлагаем протестировать наше оборудование до оплаты, чтобы вы
					убедились в его высоком качестве.
				</p>
				<Card title='Передовые технологии' variant='default' className='mb-6'>
					<ul className='list-disc space-y-2 pl-4 text-sm lg:text-base'>
						<li>
							Управление ИИ:{' '}
							<span className='text-muted-foreground'>
								оборудование самостоятельно решает сетевые проблемы.
							</span>
						</li>
						<li>
							Современные стандарты:{' '}
							<span className='text-muted-foreground'>
								используем устройства корпоративного уровня Wi-Fi 6, AX3200 и
								AC2100.
							</span>
						</li>
					</ul>
				</Card>
				<Card title='Передовые технологии' variant='secondary'>
					<ul className='list-disc space-y-2 pl-4 text-sm lg:text-base'>
						<li>12 месяцев гарантии на все оборудование.</li>
						<li>
							Базовая техническая поддержка и возможность расширенной поддержки
							с выделенным специалистом.
						</li>
					</ul>
				</Card>
			</div>
		</div>
	</Section>
);

export default Quality;
