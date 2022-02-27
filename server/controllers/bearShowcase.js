import Bear from '../models/bear.js';

export const getBears = async (req,res) => {
    try {
        const bears = await Bear.find({});
        res.status(200).json(bears);
    } catch (error) {
        console.log(error);
    }  
};

export const addBear = async (req,res) => {
    const newBear = new Bear(req.body);
    const bearsAtDb = await Bear.find({});
    const _id = bearsAtDb.length + 1;
    console.log(_id);
    try {
        newBear._id = _id;
        newBear.save()
        res.status(200).json(newBear);
    } catch (error) {
        console.log(error);
    }
};

export const modifyBear = (req,res) => {
    const err = new Error('PUT/PATCH not allowed at /showcase')
    err.status = 403;
    res.status(403);
    console.log(err);
};

export const deleteBear = async (req,res) => {
    try {
        const resp = await Bear.remove({});
        res.status(200).json(resp);
    } catch (error) {
        console.log(error);
    }
}

export const getSpecificBear = async (req,res) => {
    try {
        const bear = await Bear.findById(req.params.deadieId);
        res.status(200).json(bear);
    } catch (error) {
        console.log(error);
    }  
};
