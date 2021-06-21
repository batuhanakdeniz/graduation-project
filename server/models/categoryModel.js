import mongoose from 'mongoose';
import SubCategory from "./subCategoryModel.js";
const categorySchema = mongoose.Schema({
    categoryName: { type: String, required: true},
    categoryInfo: { type: String, required: false},
    categoryCode: { type: String, required: true},
    subCategory: [SubCategory.schema]
},{
    timestamp: true
});

const Category = mongoose.model('Category', categorySchema);
export default Category;