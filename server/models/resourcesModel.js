import mongoose from 'mongoose';

const resourceSchema = mongoose.Schema({
    api_path: {type: String, required: true},
    api_method: {type: String, required: true},
    authorized_Roles: [String]
},{
    timestamp: true
});

const Resource = mongoose.model('Resource', resourceSchema);
export default Resource;