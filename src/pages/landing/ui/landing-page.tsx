import { ThemeToggler } from '@/features/toggle-theme';
import { Features } from '@/widgets/features';
import { Home } from '@/widgets/home';
import { Installation } from '@/widgets/installation';
import { Quality } from '@/widgets/quality';
import type { FC } from 'react';

const Landing: FC = () => (
	<main>
		<ThemeToggler className='fixed right-6 top-4 z-[999]' />
		<Home />
		<Features />
		<Quality />
		<Installation />
	</main>
);

export default Landing;
