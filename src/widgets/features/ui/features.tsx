import Section from '@/shared/ui/section';
import {
	GaugeIcon,
	MapPinIcon,
	PackageIcon,
	WalletIcon,
	WifiIcon
} from 'lucide-react';
import type { FC } from 'react';
import wifiMeshNetwork from '../assets/wifi-mesh-network.png';
import Card from '@/shared/ui/card';

const Features: FC = () => (
	<Section title='Почему это удобно и выгодно' id='features'>
		<div className='mb-6 grid grid-cols-1 items-center justify-between gap-16 xl:grid-cols-2'>
			<div>
				<p className='mb-6 max-w-prose text-base lg:text-2xl'>
					Мы используем передовую Wi-Fi mesh-технологию, что позволяет
					отказаться от прокладки кабелей и дорогостоящего сетевого
					оборудования.
				</p>
				<Card title='Преимущества' variant='default' className='mb-6'>
					<ul className='space-y-2 text-sm lg:text-base'>
						<li className='relative pl-4 tracking-tight'>
							<WalletIcon className='absolute -left-2 top-0 h-4 w-4 translate-y-1/2' />
							Доступная цена:{' '}
							<span className='text-muted-foreground'>
								низкая стоимость реализации благодаря отказу от кабельной
								коммутации.
							</span>
						</li>
						<li className='relative pl-4 tracking-tight'>
							<GaugeIcon className='absolute -left-2 top-0 h-4 w-4 translate-y-1/2' />
							Быстрая установка:{' '}
							<span className='text-muted-foreground'>
								оперативное подключение без сложных монтажных работ.
							</span>
						</li>
						<li className='relative pl-4 tracking-tight'>
							<PackageIcon className='absolute -left-2 top-0 h-4 w-4 translate-y-1/2' />
							Легкость перемещения:{' '}
							<span className='text-muted-foreground'>
								оборудование можно легко перенести при переезде в новый офис.
							</span>
						</li>
					</ul>
				</Card>
				<Card title='Дополнительные плюсы' variant='secondary'>
					<ul className='space-y-2 text-sm lg:text-base'>
						<li className='relative pl-4 tracking-tight'>
							<MapPinIcon className='absolute -left-2 top-0 h-4 w-4 translate-y-1/2' />
							Контроль местоположения сотрудников:{' '}
							<span className='text-muted-foreground'>
								получайте отчеты о местоположении сотрудников, времени их
								прихода и ухода.
							</span>
						</li>
						<li className='relative pl-4 tracking-tight'>
							<WifiIcon className='absolute -left-2 top-0 h-4 w-4 translate-y-1/2' />
							Публичная Wi-Fi сеть:{' '}
							<span className='text-muted-foreground'>
								Создайте гостевую сеть с возможностью показа рекламы, полностью
								соответствующую законодательству.
							</span>
						</li>
					</ul>
				</Card>
			</div>
			<img
				className='mx-auto aspect-square max-h-96 w-auto dark:drop-shadow-[0_0_100px_hsl(var(--primary))] xl:h-auto xl:max-h-full xl:w-full'
				alt='Wi-Fi mesh сети'
				src={wifiMeshNetwork}
			/>
		</div>
	</Section>
);

export default Features;
