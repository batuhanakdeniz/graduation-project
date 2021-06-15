import jwt from "jsonwebtoken";
import Resource from "../models/resourcesModel.js";
import mongoose from "mongoose";

const ROLES =["Admin","Confirmed","Unconfirmed","Corporate"];
export async function auth (req, res, next){
    try {
        //console.log("************************************\nreq.route.path: ",req.route.path);                     
        const token = req.cookies.token;
        console.log(token);
        if (!token || token==undefined) return res.status(401).send();
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.User = verified.User;                                                      
        var authorized = false;
        const resource = await Resource.find({api_path: req.route.path},{api_path: 1,api_method: 1,authorized_Roles: 1});
        console.log(resource[0]);
        const method = req.method;
        console.log(req.method);
        if(resource[0].api_method == req.method){
            let roles = resource[0].authorized_Roles;
            //console.log("roles: ",roles);
            for(let i=0;i<roles.length;i++){
                //console.log("roles[i]: ",roles[i]);
                //console.log("roles[i] TYPE: ",typeof(roles[i]));
                //console.log("verified.userType TYPE: ",typeof(verified.userType));
                if(roles[i] === verified.userType){  
                    //console.log("aaaa: ",roles[i]=== verified.userType);
                    authorized=true;}
            }
            if(authorized===true)  next();  
            else res.status(405).send();
        }
    } catch (error) {
        res.status(406).json({
            errorMessage: "Yetkiniz bulunmamaktadır.",
        })
    }
}
/**
 * (err, resource) => {
            var roles = resource.authorized_Roles;
            if(resource.api_method != req.method){
                for(let item of roles){
                    if(item==verified.userType){
                        authorized = true;
                    }
                }
            }  
        }
 * 
 * 
 * 
 * 
 * resource.authorized_Roles.forEach((role)=>{
                    console.log("************************************\nrole.roles: ",role);
                    if(role==verified.userType){
                        console.log("role.roles esitse burdayım :",role.roles);
                        authorized = true;
                    }
                });
 */