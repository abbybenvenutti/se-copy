const router = require('express').Router();
const Student = require('../db/models/Student');

router.get('/', async (req, res, next) => {
	const students = await Student.findAll();
	res.status(200).json(students);
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		const foundStudent = await Student.findById(id);
		if (!foundStudent) res.sendStatus(404);
		res.status(200).json(foundStudent);
	} catch (err) {
		res.status(err);
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const student = await Student.create(req.body);
		res.status(201).json(student);
	} catch (err) {
		res.status(err);
		next(err);
	}
});

router.put('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const studentSearch = await Student.findById(id);
		const updatedStudent = await studentSearch.update(req.body);
		res.json({ student: updatedStudent });
	} catch (err) {
		res.status(err);
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		await Student.destroy({
			where: { id: id }
		});
		res.status(204).end();
	} catch (err) {
		next(err);
	}
});
module.exports = router;
