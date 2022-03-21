import Wrapper from '../components/wrapper';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
}

export default MyApp;
