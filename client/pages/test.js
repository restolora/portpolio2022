import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { database } from '../sdk';
import { message, List, Button, Modal, Form, Input, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

const Test = () => {
	const [data, setData] = useState(null);
	const [modal, setModal] = useState(false);
	const [form, setForm] = useState(null);
	const fetch = async () => {
		try {
			const response = await database.get({ entity: 'About' }).all().exec();
			setData(response.data);
		} catch (error) {
			message.error(error.message);
		}
	};
	useEffect(() => {
		fetch();
	}, [setData, form]);

	const onDelete = async id => {
		try {
			const response = await database.delete({ entity: 'About', id }).exec();
			message.success(response.message);
			setData(data.filter(d => d._id != id));
		} catch (error) {
			console.log(error);
			message.error(error.message);
		}
	};
	const onEdit = data => {
		setModal(true);
		setForm(data);
	};
	const close = () => {
		setModal(false);
		setForm(null);
	};

	const validationSchema = Yup.object().shape({
		Description: Yup.string().required('Description is required')
	});

	const initialValues = form ? { Description: form.Description } : { Description: '' };

	const formik = useFormik({
		enableReinitialize: true,
		initialValues,
		validationSchema,
		onSubmit: async values => {
			try {
				if (form) {
					const response = await database.update({ entity: 'About', id: form._id }).data(values).exec();
					message.success(response.message);
					setData(data.map(d => (d._id === response.data._id ? response.data : d)));
				} else {
					const response = await database.create({ entity: 'About' }).data(values).exec();
					message.success(response.message);
					setData([response.data, ...data]);
				}
				close();
			} catch (error) {
				console.log(error);
				message.error(error.message);
			}
		}
	});

	return (
		<>
			{data && (
				<List
					header={
						<div>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<h1>About</h1>
								<Button onClick={() => setModal(true)}>
									<PlusOutlined style={{ fontSize: '14px' }} />
								</Button>
							</div>
						</div>
					}
					bordered
					dataSource={data}
					renderItem={d => (
						<List.Item>
							<div>{d.Description}</div>
							<div>
								<Button onClick={() => onEdit(d)}>
									<EditOutlined />
								</Button>{' '}
								<Popconfirm
									title="Are you sure to delete this task?"
									onConfirm={() => onDelete(d._id)}
									// onCancel={cancel}
									okText="Yes"
									cancelText="No">
									<Button>
										<DeleteOutlined />
									</Button>
								</Popconfirm>
							</div>
						</List.Item>
					)}
				/>
			)}
			{modal && (
				<Modal
					title={form ? 'Edit About' : 'New About'}
					visible={modal}
					onOk={formik.handleSubmit}
					onCancel={close}>
					<Form layout="vertical">
						<Form.Item id="Description" label="Description" required={true}>
							<Input
								id="Description"
								name="Description"
								onChange={formik.handleChange}
								value={formik.values.Description}
							/>
							{formik.errors.Description && formik.touched.Description ? (
								<div style={{ color: 'red' }}>{formik.errors.Description}</div>
							) : null}
						</Form.Item>
					</Form>
				</Modal>
			)}
		</>
	);
};

export default Test;
