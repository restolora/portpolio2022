import React from 'react';
import Link from 'next/link';
import { Row, Col, Input, Form, Button, List, Avatar } from 'antd';
import styles from '../styles/Home.module.scss';
import { FacebookFilled, LinkedinFilled, MailOutlined, PhoneFilled } from '@ant-design/icons/lib/icons';

const { TextArea } = Input;

const GetInTouch = () => {
	const initialValue = {
		Name: '',
		Email: '',
		Message: ''
	};
	const data = [
		{
			title: 'Email Address: reynanestolora@gmail.com',
			icon: <MailOutlined />,
			link: ''
		},
		{
			title: 'Mobile Number: +63-915-160-0193',
			icon: <PhoneFilled />,
			link: ''
		},

		{
			title: 'Facebook',
			icon: <FacebookFilled />,
			link: 'https://www.facebook.com/amf0o7'
		},
		{
			title: 'LinkedIn',
			icon: <LinkedinFilled />,
			link: 'https://www.linkedin.com/in/reynan-estolora-96773021a/'
		}
	];

	return (
		<div className={styles.GetInTouch} id={'GetInTouch'}>
			<div className={styles.container}>
				<div className={styles.dflex}>
					<h1 className={styles.contentTitle}>Get In Touch</h1>
				</div>
				<div className={styles.dflex}>
					<p className={styles.titleDesc}>I AM LOOKING FORWARD TO START A PRPOJECT WITH YOU!</p>
				</div>

				<Row>
					<Col lg={10} md={24} xs={24}>
						<div className={styles.contact}>
							<div className={styles.cardList}>
								{data &&
									data.map(d => {
										return (
											<div className={styles.cardItem}>
												<div className={styles.cardIcon}>{d.icon}</div>
												<div className={styles.cardLabel}>
													{d.link != '' ? <Link href={d.link}>{d.title}</Link> : d.title}
												</div>
												{/* <div className={styles.cardValue}>{d.icon}</div> */}
											</div>
										);
									})}
							</div>
						</div>
					</Col>
					<Col lg={14} md={24} xs={24}>
						<Form initialValues={initialValue} layout="vertical">
							<Form.Item>
								<Input className={styles.Input} name="Name" placeholder="Enter Your Name" />
							</Form.Item>
							<Form.Item>
								<Input className={styles.Input} name="Email" placeholder="Enter Email Address" />
							</Form.Item>
							<Form.Item>
								<TextArea className={styles.Input} name="Message" allowClear placeholder="Message" />
							</Form.Item>
							<Form.Item>
								<Button
									style={{
										border: 'none',
										float: 'right',
										background: '#186aff',
										color: '#fff',
										width: '150px',
										height: '50px'
									}}>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default GetInTouch;
