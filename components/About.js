import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from '../styles/Home.module.scss';
import { Row, Col } from 'antd';

const About = () => {
	return (
		<div className={styles.about} id={'About'}>
			<Fade bottom>
				<div className={styles.container}>
					<h1 className={styles.contentTitle}>About me</h1>
					<div className={styles.contentBody}>
						<Row gutter={[20, 20]}>
							<Col xs={24} md={24} lg={24}>
								<p>I’m Reynan Estolora, but you can just call me Rey.</p>
								<p>
									Originally I graduated in Colegio de Sta Teresa de Avila with Degree of Bachelor of
									Science in Information Technology. I'm currently a working as a Fullstack Web
									developer. In 3 years of experience in web development including interns and
									capstone project was extremely challenging and exciting because I've learn different
									Stack used to develop a website.
								</p>
								<p>
									Initially I'm using LAMP(Linux, Apache, Mysql, PHP) in developing websites like
									Ordering and E-commerce website in the first company before at that moment after the
									company close because of the pandemic I was hired in a another company which I've
									learned MERN(MongoDB, Express, React, NodeJS) Stack that increase my knowledge in
									especially Web development. I was able to make and update REST/API using nodeJS and
									Express, Create Front End web application React, Sockets for realtime web
									application and use Git application to coordinate and track changes of works among
									co developer collaboratively.
								</p>
								<p>
									I strive to create elegant solutions that surprise and delight users, while keeping
									complex technical dependencies in mind for implementation, scalability and developer
									sanity.
								</p>
								<p>
									Have an interesting project?
									<span>
										<a href="#GetInTouch" className={'link'}>
											{' '}
											Let's talk.
										</a>
									</span>
								</p>
							</Col>
						</Row>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default About;
