import Help from "../models/helpModel.js";
import GeoJson from "../models/geoJsonModel.js";
export const postHelpSearch = async (req, res) => {
	try {  
    const search = req.body.search;
    const query = {
                    "$search":{
                      "index": 'helps',
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
                              "path": {"value": "detail", "multi": "simpleAnalyzer"},
                              "score": { "boost": {"value": 3}},
                              "fuzzy": {
                                "maxEdits": 2,
                                "prefixLength": 3
                              }
                            },
                            "text": {
                              "query": `${search}`,
                              "path": {"value": "address.province", "multi": "searchSimple"},
                              "score": { "boost": {"value": 7}},
                              "fuzzy": {
                                "maxEdits": 2,
                                "prefixLength": 3
                              }
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
                      "aidCode": 1,
                      "detail": 1,
                      "address": {
                        "province": 1,
                        "town": 1
                      },
                      "location": 1,
                      "emergencyLevel.level": 1,
                      "score": { "$meta": "searchScore"}
                    }
    };
    const queryLocation = {
      "$search":{
        "index": 'geoJson',
        "text": {
          "query": `${search}`,
          "path": {"value": "city", "multi": "searchSimple"},
          "fuzzy": {
            "maxEdits": 2,
            "prefixLength": 3
          },
          "score": { "boost": {"value": 9}}
        }
      }
    };
    const projectLocation = {
      "$project":{
        "_id": 0,
        "city": 1,
        "lat": 1,
        "lng": 1,
        "score": { "$meta": "searchScore"}
      }
};
  const limit = {"$limit": 5};
    const sortHelp = { "$sort" : { "score" : -1,"emergencyLevel.level": -1 },};
    const sort = { "$sort" : { "score" : -1 } }

		let helpResults = await Help.aggregate([query,project,sortHelp,limit]);
    let locationResults = await GeoJson.aggregate([queryLocation,projectLocation,sort,limit])
    console.log("helps: ",helpResults);
    console.log("location: ",locationResults);
    const result = {
      helps: helpResults,
      locations: locationResults
    }
		res.status(200).send(result);
	} catch (err) {
    console.log(err);
		res.status(404).json({
			message: err.message,
		});
	}
};
