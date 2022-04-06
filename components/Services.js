import React from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/Home.module.scss';

const Services = () => {
	return (
		<div className={styles.Services} id={'Services'}>
			<div className={styles.container}>
				<h1 className={styles.contentTitle}>Services</h1>

				<Row>
					<Col span={8} lg={8} md={8} xs={24}>
						<div className={styles.serviceItem}>
							<div className={styles.dflex}>
								<img src={'/landing.svg'} alt={'Landing Page'} className={styles.img}></img>
							</div>
							<div className={styles.serviceDetails}>
								<h3 className={styles.title}> Landing Page </h3>
								<div className={styles.details}>
									Develop a landing page for your brand. A landing page that your business will
									standout among others.
								</div>
							</div>
						</div>
					</Col>
					<Col span={8} lg={8} md={8} xs={24}>
						<div className={styles.serviceItem}>
							<div className={styles.dflex}>
								<img src={'/frontend.svg'} alt={'Front-end Development'} className={styles.img}></img>
							</div>
							<div className={styles.serviceDetails}>
								<h3 className={styles.title}> Front-end Development </h3>
								<div className={styles.details}>
									Design or Provide your design and I will be the one who will develop using latest
									technologies and update your content dynamically with CMS.
								</div>
							</div>
						</div>
					</Col>
					<Col span={8} lg={8} md={8} xs={24}>
						<div className={styles.serviceItem}>
							<div className={styles.dflex}>
								<img src={'/backend.svg'} alt={'Back-end Development'} className={styles.img}></img>
							</div>
							<div className={styles.serviceDetails}>
								<h3 className={styles.title}> Back-end Development </h3>
								<div className={styles.details}>
									Build and maintain a structure of your databases and API, authentication from a
									third party.
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Services;
