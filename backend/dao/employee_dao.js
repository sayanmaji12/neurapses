const db = require('../database/dbConn');
const common = require('../services/commonService');


module.exports.addEmployee = (data) => {
	return new Promise((resolve, reject) => {
		try {
			data['_id'] = db.getMongoId()
			data['empId'] = data['_id']
			db.collections.employees.insert(data, function (err, success) {
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(common.successResolve(success))
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}

module.exports.updateEmployee = (id, data) => {
	return new Promise((resolve, reject) => {
		try {
			db.collections.employees.update({empId: id}, {$set: data}, function (err, success) {
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(common.successResolve(success))
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}

module.exports.getEmployee = (data) => {
	return new Promise((resolve, reject) => {
		try {
			db.collections.employees.find({deleted: 0}, function (err, success) {
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(common.successResolve(success))
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}
module.exports.getEmployeeDetails = (data) => {
	return new Promise((resolve, reject) => {
		try {
			db.collections.employees.find({deleted: 0,empId: data}, function (err, success) {
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(common.successResolve(success))
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}

module.exports.deleteEmployee = (id, data) => {
	return new Promise((resolve, reject) => {
		try {
			db.collections.employees.update({empId: id}, {$set: data}, function (err, success) {
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(common.successResolve(success))
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}