const common = require('../services/commonService');
const dao = require('../dao/employee_dao');
const express = require('express');
const router = express.Router();
module.exports = router;

router.post('/addEmployee', async (req, res) => {
	try {
		if (req.body.name === undefined || req.body.email === undefined
			|| req.body.phone === undefined || req.body.address === undefined || req.body.DOB === undefined || req.body.gender === undefined || req.body.doj === undefined || req.body.martialStatus === undefined) {
			res.send(common.sendResponse(false, 0, 'name, email, phone, address,DOB,gender,doj,martialStatus missing', null, 401))
		} else {
			const data = {
				name: req.body.name,
				email: req.body.email,
				phone: req.body.phone,
				address: req.body.address,
				DOB: req.body.DOB,
				gender: req.body.gender,
				doj: req.body.doj,
				martialStatus: req.body.martialStatus,
				createdAt: new Date().getTime(),
				deleted: 0
			};
			const result = await dao.addEmployee(data);
			if (result.error) {
				res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
			} else {
				res.send(common.sendResponse(true, 1, 'Employee Register successfully.', null, 0));
			}
		}
	} catch (e) {
		console.log(e)
		res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});

router.post('/updateEmployee', async (req, res) => {
	try {
		if (req.body.name === undefined
			|| req.body.phone === undefined || req.body.address === undefined || req.body.DOB === undefined || req.body.gender === undefined || req.body.doj === undefined || req.body.martialStatus === undefined || req.body.empId === undefined) {
			res.send(common.sendResponse(false, 0, 'name,phone,address,DOB,gender,doj,martialStatus, empId missing', 401))
		} else {
			const data = {
				name: req.body.name,
				phone: req.body.phone,
				address: req.body.address,
				DOB: req.body.DOB,
				gender: req.body.gender,
				doj: req.body.doj,
				martialStatus: req.body.martialStatus,
				modifiedAt: new Date().getTime()
			};
			const result = await dao.updateEmployee(req.body.empId, data);
			if (result.error) {
				res.send(common.sendResponse(false, 0, 'Some error occurred', 500));
			} else {
				res.send(common.sendResponse(true, 1, 'Employee Updated successfully', null, 0));
			}
		}
	} catch (e) {
		console.log(e)
		res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});

router.post('/deleteEmployee', async (req, res) => {
	try {
		if (req.body.empId === undefined) {
			res.send(common.sendResponse(false, 0, 'id, empId missing', null, 401))
		} else {
			const data = {
				modifiedBy: req.body.empId,
				deleted: 1,
			};
			const result = await dao.deleteEmployee(req.body.empId, data);
			if (result.error) {
				res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
			} else {
				res.send(common.sendResponse(true, 1, 'Employee deleted successfully', null, 0));
			}
		}
	} catch (e) {
		console.log(e)
		res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', 1002));
	}
});

router.post('/getAllEmployee', async (req, res) => {
	try {

		const result = await dao.getEmployee(req.body);
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			res.send(common.sendResponse(true, 1, '', result, 0));
		}
	} catch (e) {
		console.log(e)
		res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});
router.post('/getEmployeeDetails', async (req, res) => {
	try {

		if (req.body.empId === undefined) {
			res.send(common.sendResponse(false, 0, 'id, empId missing', null, 401))
		} else {
			const data = {
				empId: req.body.empId
			};
			const result = await dao.getEmployeeDetails(req.body.empId);
			if (result.error) {
				res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
			} else {
				res.send(common.sendResponse(true, 1, '', result, 0));
			}
		}
	} catch (e) {
		console.log(e)
		res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});

