import mongoose from 'mongoose';

const subCategorySchema = mongoose.Schema({
    subCategoryName: {type: String, required: true},
    subCategoryInfo: {type: String, required: false},
    subCategoryCode: { type: String, required: true}
},{
    timestamp: true
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
export default SubCategory;