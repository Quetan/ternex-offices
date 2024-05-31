import Section from '@/shared/ui/section';
import {
	CctvIcon,
	RouterIcon,
	Settings2Icon,
	WifiIcon,
	WrenchIcon
} from 'lucide-react';
import type { FC } from 'react';
import connetctionSteps from '../assets/connection-steps.png';
import InstallationStep from './installation-step';

const Installation: FC = () => (
	<Section title='Этапы подключения' id='installation'>
		<div className='relative grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2 xl:grid-cols-3'>
			<InstallationStep
				title='Установка'
				description='Наш специалист размещает беспроводные роутеры Ternex в вашем офисе и подключает их к сети 220В.'
				Icon={WrenchIcon}
			/>
			<InstallationStep
				title='Настройка'
				description='Роутеры автоматически создают беспроводную mesh-сеть.'
				Icon={Settings2Icon}
			/>

			<InstallationStep
				title='Создание сетей'
				description='Настраиваем Wi-Fi сеть для сотрудников и публичный Wi-Fi для гостей.'
				Icon={WifiIcon}
			/>

			<InstallationStep
				title='Подключение устройств'
				description='IP-телефоны и компьютеры подключаем напрямую к роутерам.'
				Icon={RouterIcon}
			/>

			<InstallationStep
				title='Видеонаблюдение'
				description='Устанавливаем беспроводные IP камеры, требующие только подключения к электросети.'
				Icon={CctvIcon}
			/>
			<img
				src={connetctionSteps}
				className='-bottom-16 right-6 mx-auto aspect-square max-h-60 w-auto dark:drop-shadow-[0_0_40px_hsl(var(--primary))] lg:absolute'
			/>
		</div>
	</Section>
);

export default Installation;
