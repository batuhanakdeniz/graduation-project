import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
    userName: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    userType: { type: String, required:true}
},{
    timestamp: true
});

const User = mongoose.model('User', userSchema);
export default User;
