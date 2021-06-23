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

export const getCategories = async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).send(categories);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const getSubCategories = async (req, res) => {
	try {
		const subCategories = await SubCategory.find();
		res.status(200).send(subCategories);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};

export const getCategory = async (req, res) => {
	try {
		const category = await Category.find({categoryCode: req.params.categoryNo});
		res.status(200).send(category);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const getSubCategory = async (req, res) => {
	try {
		const subCategory = await SubCategory.find({subCategoryCode: req.params.subCategoryNo});
		res.status(200).send(subCategory);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};