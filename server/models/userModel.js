import mongoose from 'mongoose';
import mongoosastic from "mongoosastic";

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
    userName: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    userType: { type: String, required:true},
    status: {
        type: String,
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    confirmationCode: {
        type: String,
        unique: true
    }
},{
    timestamp: true
});

userSchema.plugin(mongoosastic);

const User = mongoose.model('User', userSchema);
export default User;
