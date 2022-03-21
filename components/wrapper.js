import Nav from './Nav';
import Meta from './Meta';
import styles from '../styles/Home.module.scss';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Wrapper = ({ children }) => {
	return (
		<>
			<Meta />
			<Layout>
				<Header
					className={styles.nav}
					style={{
						zIndex: '1000',
						height: '70px',
						background: '#000 !important',
						position: 'sticky !important',
						top: '0'
					}}>
					<Nav />
				</Header>
				<Content>
					<div className={styles.content}>
						<main className={styles.main}>{children}</main>
					</div>
				</Content>
			</Layout>
		</>
	);
};

export default Wrapper;
