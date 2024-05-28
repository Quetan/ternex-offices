import Section from '@/shared/ui/section';
import {
	CctvIcon,
	RouterIcon,
	Settings2Icon,
	WifiIcon,
	WrenchIcon
} from 'lucide-react';
import type { FC } from 'react';

const Installation: FC = () => (
	<Section title='Этапы подключения' id='installation'>
		<div className='relative grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2 xl:grid-cols-3'>
			<div className='relative rounded-lg border bg-card p-6'>
				<h2 className='mb-2 text-2xl font-semibold'>Установка</h2>
				<p className='text-muted-foreground'>
					Наш специалист размещает беспроводные роутеры Ternex в вашем офисе и
					подключает их к сети 220В.
				</p>
				<WrenchIcon className='absolute bottom-4 right-4 h-8 w-8 text-muted-foreground' />
			</div>
			<div className='relative rounded-lg border bg-card p-6'>
				<h2 className='mb-2 text-2xl font-semibold'>Настройка</h2>
				<p className='text-muted-foreground'>
					Роутеры автоматически создают беспроводную mesh-сеть.
				</p>
				<Settings2Icon className='absolute bottom-4 right-4 h-8 w-8 text-muted-foreground' />
			</div>
			<div className='relative rounded-lg border bg-card p-6'>
				<h2 className='mb-2 text-2xl font-semibold'>Создание сетей</h2>
				<p className='text-muted-foreground'>
					Настраиваем Wi-Fi сеть для сотрудников и публичный Wi-Fi для гостей.
				</p>
				<WifiIcon className='absolute bottom-4 right-4 h-8 w-8 text-muted-foreground' />
			</div>
			<div className='relative rounded-lg border bg-card p-6'>
				<h2 className='mb-2 text-2xl font-semibold'>Подключение устройств</h2>
				<p className='text-muted-foreground'>
					IP-телефоны и компьютеры подключаем напрямую к роутерам.
				</p>
				<RouterIcon className='absolute bottom-4 right-4 h-8 w-8 text-muted-foreground' />
			</div>
			<div className='relative rounded-lg border bg-card p-6'>
				<h2 className='mb-2 text-2xl font-semibold'>Видеонаблюдение</h2>
				<p className='text-muted-foreground'>
					Устанавливаем беспроводные IP камеры, требующие только подключения к
					электросети.
				</p>
				<CctvIcon className='absolute bottom-4 right-4 h-8 w-8 text-muted-foreground' />
			</div>
			<img
				src='/connection-steps.png'
				className='-bottom-16 right-6 mx-auto aspect-square max-h-60 w-auto dark:drop-shadow-[0_0_40px_hsl(var(--primary))] lg:absolute'
			/>
		</div>
	</Section>
);

export default Installation;
