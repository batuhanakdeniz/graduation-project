import Help from "../models/helpModel.js";
import Image from "../models/imageModel.js";
import User from "../models/userModel.js";
import multer from "multer";
export const getHelpSearch = async (req, res) => {
	try {  
    const search = req.params.search;
    const query = {
                    "$search":{
                      "index": 'helps',
                      "highlight": {
                        "path": ['header','detail']
                      },
                      "compound":{
                        "should": [{
                          "text": {
                            "query": `${search}`,
                            "path": 'header',
                            "score": { "boost": {"value": 5}}
                            }
                          },{
                            "text": {
                              "query": `${search}`,
                              "path": ['typeofhelp','detail']
                            }
                          }
                        ]
                      }
                    }
                  };
    const project = {
                    "$project":{
                      "_id": 0,
                      "header": 1,
                      "detail": 1,
                      "score": { "$meta": "searchScore"}
                    }
    };
    const sort = { "$sort" : { "score" : -1 } }
		let helps = await Help.aggregate([query,project,sort]);
		res.status(200).send(helps);
	} catch (err) {
		res.status(404).json({
			message: err.message,
		});
	}
};