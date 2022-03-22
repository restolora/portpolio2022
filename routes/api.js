const express = require('express');
const router = express.Router();
const Database = 'portpolio';
const { C, M } = require('../models/database');
const { Schemas } = require('../models/schemas');

// insert
router.post('/e/:EntityId', async (req, res, next) => {
	const { EntityId } = req.params;
	let fields = { ...req.body },
		files = req.files ? [...req.files] : [];
	const schemas = Schemas[EntityId];
	try {
		const insertedId = await new Promise((resolve, reject) => {
			M(C(Database), EntityId, schemas).create(fields, (err, inserted) => {
				if (err) return reject(err);
				resolve(inserted);
			});
		});
		res.status(200).send({ message: 'Successfully Added', content: insertedId });
	} catch (error) {
		console.log('error', error);
		res.status(412).send({
			status: error,
			message: 'Creating data error'
		});
	}
});

// retrieve
router.get('/e/:EntityId', async (req, res) => {
	const { EntityId } = req.params;
	const schemas = Schemas[EntityId];
	try {
		const data = await new Promise((resolve, reject) => {
			M(C(Database), EntityId, schemas).find((err, data) => {
				if (err) return reject(err);
				resolve(data);
			});
		});
		res.status(200).send({ data });
	} catch (error) {
		console.log('error', error);
		res.status(412).send({
			status: error,
			message: 'Fetching data error'
		});
	}
});

// getData by id
router.get('/e/:EntityId/:id', async (req, res) => {
	const { EntityId, id } = req.params;
	const schemas = Schemas[EntityId];
	try {
		const data = await new Promise((resolve, reject) => {
			M(C(Database), EntityId, schemas).findById(id, (err, data) => {
				if (err) return reject(err);
				resolve(data);
			});
		});
		res.status(200).send({ data });
	} catch (error) {
		console.log('error', error);
		res.status(412).send({
			status: error,
			message: 'Fetching data error'
		});
	}
});

// update
router.put('/e/:EntityId/:id', async (req, res) => {
	const { EntityId, id } = req.params;
	let fields = { ...req.body };
	console.log(fields);
	const schemas = Schemas[EntityId];
	try {
		let data = await M(C(Database), EntityId, schemas).findById(id).exec();
		if (!data) res.status(412).send({ message: 'Updating failed, data is not found', data: {} });

		await new Promise((resolve, reject) => {
			M(C(Database), EntityId, schemas).findOneAndUpdate(
				{ _id: id },
				{ $set: fields },
				{ runValidators: true, context: 'query' },
				err => {
					if (err) return reject(err);
					resolve();
				}
			);
		});

		res.status(200).send({ message: 'Successfully updated', data });
	} catch (error) {
		console.log('error', error);
		res.status(412).send({
			status: error,
			message: 'Updating error'
		});
	}
});

//delete
router.delete('/e/:EntityId/:id', async (req, res) => {
	const { EntityId, id: _id } = req.params;
	const schemas = Schemas[EntityId];
	try {
		let data = await M(C(Database), EntityId, schemas).findById(_id).exec();

		if (!data) res.status(412).send({ message: 'Deletion failed, data is not found' });

		await M(C(Database), EntityId, schemas).deleteOne({ _id }).exec();

		res.status(200).send({ message: 'Successfully deleted', data });
	} catch (error) {
		console.log('error', error);
		res.status(412).send({
			status: error,
			message: 'Deletion error'
		});
	}
});

module.exports = router;
