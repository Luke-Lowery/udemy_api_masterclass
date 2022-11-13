// @desc   Get all bootcamps\
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req,res,next) =>{
    res.status(200).json({sucess: true, msg: 'Show All Bootcamps', hello: req.hello});
};

// @desc   Get single bootcamp
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamp = (req,res,next) =>{
    res
        .status(200)
        .json({sucess: true, msg: `get bootcamp ${req.params.id}`});
};

// @desc   create new bootcamp
// @route  POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req,res,next) =>{
    res
        .status(200)
        .json({sucess: true, msg: 'Create new Bootcamp'});
};

// @desc   Update bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.UpdateBootcamp = (req,res,next) =>{
    res
        .status(200)
        .json({sucess: true, msg: `update bootcamp ${req.params.id}`});
};

// @desc   Delete bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.DeleteBootcamp = (req,res,next) =>{
    res
        .status(200)
        .json({sucess: true, msg: `delete bootcamp ${req.params.id}`});
};