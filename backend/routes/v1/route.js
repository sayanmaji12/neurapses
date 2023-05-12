const express = require('express');
const common = require('../../services/commonService');
const router = express.Router();

const employee = require('../../controller/employee_controller');



router.use('/employee', employee);



router.post('/uploadFiles', async (req, res) => {
    try {
        const result = await common.uploadFile(req);
    	res.send(result);
    } catch(e) {
        console.log(e);
        res.send({'success': false, 'status': 500, 'message': 'Something went wrong. Please try again.'})
    }
});



module.exports = router;