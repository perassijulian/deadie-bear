import mongoose from "mongoose";

const bearSchema = mongoose.Schema({
    _id:{
        type: Number,
        require: true
    },
    accesories:{
        type: String,
        require: true
    },
    background:{
        type: String,
        require: true
    },
    costume:{
        type: String,
        require: true
    },
    ears:{
        type: String,
        require: true
    },
    eyes:{
        type: String,
        require: true
    },
    head:{
        type: String,
        require: true
    },
    mouth:{
        type: String,
        require: true
    },
    face:{
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