import jwt from "jsonwebtoken";

export function auth(req, res, next){
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.User = verified.User;

        next();
    } catch (error) {
        res.status(401).json({
            errorMessage: "Yetkiniz bulunmamaktadır.",
        })
    }
}
