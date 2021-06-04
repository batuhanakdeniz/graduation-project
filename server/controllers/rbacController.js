import Resource from "../models/resourcesModel.js"

export const getResources = async (req, res) => {
	try {
		const resources = await Resource.find();
		res.status(200).json(resources);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const postResources = async (req, res) => {
	try {
        const {api_path, api_method, authorized_Roles} = req.body;
        const existingApi = await Resource.findOne({api_path,api_method});
        if(existingApi) return res.status(404).json({message: "Resource zaten bulunuyor."});
         
        const newResource = new Resource({
            api_path: api_path,
            api_method: api_method,
            authorized_Roles: authorized_Roles
        });
        const savedResource = await newResource.save();
        res.status(200).json({message: "Resource başarıyla eklendi"});
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};
export const putResources = async (req, res) => {
	try {
		res.status(200).json(roles);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};


