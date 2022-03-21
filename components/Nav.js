import Link from 'next/link';
import { Menu } from 'antd';
import navStyles from '../styles/Nav.module.scss';

const Nav = () => {
	return (
		<Menu theme="dark" className={navStyles.nav} mode="horizontal" defaultSelectedKeys={['1']}>
			<Menu.Item key={1}>
				<Link href="/#Home">Home</Link>
			</Menu.Item>

			<Menu.Item key={2}>
				<Link href="/#About">About</Link>
			</Menu.Item>

			<Menu.Item key={3}>
				<Link href="/#Services">Services</Link>
			</Menu.Item>

			<Menu.Item key={4}>
				<Link href="/#TechTools">Technology & Tools</Link>
			</Menu.Item>

			<Menu.Item key={5}>
				<Link href="/#GetInTouch">Get In Touch</Link>
			</Menu.Item>
		</Menu>
	);
};

export default Nav;
