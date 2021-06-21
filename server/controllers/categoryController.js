import Category from "../models/categoryModel.js";
import SubCategory from "../models/subCategoryModel.js";

export const postCategory = async (req, res) => {
	try {
		const category = {
			categoryName: req.body.categoryName,
			categoryCode: req.body.categoryCode,
			subCategory: req.body.subCategory,
		};
		const newCategory = new Category(category);
		const savedCategory = await newCategory.save();
		return res.status(200).json(savedCategory);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const postSubCategory = async (req, res) => {
	try {
		const subCategory = {
			subCategoryName: req.body.subCategoryName,
			subCategoryCode: req.body.subCategoryCode,
		};
		const newSubCategory = new SubCategory(subCategory);
		const savedSubCateggory = await newSubCategory.save();
		return res.status(200).json(savedSubCateggory);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const getCategory = async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).send(categories);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const getSubCategory = async (req, res) => {
	try {
		const subCategories = await subCategory.find();
		res.status(200).send(subCategories);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
