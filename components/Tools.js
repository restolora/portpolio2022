import React from 'react';
import { Row, Col, Carousel } from 'antd';
import styles from '../styles/Home.module.scss';

const Tools = () => {
	return (
		<div className={styles.Tools} id={'TechTools'}>
			<div className={styles.container}>
				<h1 className={styles.contentTitle}>Technology & Tools</h1>

				{/* <Carousel autoplay dots> */}
				<div>
					<Row className={styles.dflex}>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/html.png'} alt={'HTML'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/css.png'} alt={'CSS'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/sass.svg'} alt={'Sass'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/js.png'} alt={'js'} className={styles.img} />
								</div>
							</div>
						</Col>

						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/jquery.png'} alt={'JQuery'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/react-logo.png'} alt={'ReactJS'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/reactnative.png'} alt={'React Native'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/nextjs.png'} alt={'NextJS'} className={styles.img} />
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<div>
					<Row className={styles.dflex}>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/bootstrap.svg'} alt={'bootstrap'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/antd.png'} alt={'Antd Design'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/express.png'} alt={'ExpressJS'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/node.png'} alt={'NodeJS'} className={styles.img} />
								</div>
							</div>
						</Col>

						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/mdb.png'} alt={'MongoDB'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/sequelize.png'} alt={'Sequilize ORM'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/php.png'} alt={'php'} className={styles.img} />
								</div>
							</div>
						</Col>
						<Col span={3} md={6} lg={3} xs={12}>
							<div className={styles.toolItem}>
								<div className={styles.dflex}>
									<img src={'/mysql.png'} alt={'mysql'} className={styles.img} />
								</div>
							</div>
						</Col>
					</Row>
				</div>
				{/* </Carousel> */}
			</div>
		</div>
	);
};

export default Tools;
