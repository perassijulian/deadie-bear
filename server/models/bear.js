import mongoose from "mongoose";

const bearSchema = mongoose.Schema({
    _id:{
        type: Number,
        require: true
    },
    eyes:{
        type: String,
        require: true
    },
    mouth:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    }
});

const Bear = mongoose.model('Bear', bearSchema);

export default Bear;