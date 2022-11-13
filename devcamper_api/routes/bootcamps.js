const express = require('express');
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    UpdateBootcamp,
    DeleteBootcamp
} =  require('../controllers/bootcamps');

const router = express.Router();

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route
    .route('/:id')
    .get(getBootcamp)
    .put(UpdateBootcamp)
    .delete(DeleteBootcamp);


module.exports = router;