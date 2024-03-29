import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
    userName: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    userType: { type: String, 
        enum: ['Admin','Confirmed','Unconfirmed','Corprate'],
        required:true},
    statusUserType:{
        isStatusPending: {
            type: Boolean,
            default: false}
    ,
    
        applyUserType:{ 
            type: String, 
            enum: ['Admin','Confirmed','Unconfirmed','Corprate'],
            default: null
        }
    },
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

const User = mongoose.model('User', userSchema);
export default User;
