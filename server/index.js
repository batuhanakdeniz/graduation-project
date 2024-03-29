import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"
import helpRouter from "./routers/helpRouter.js";
import userRouter from "./routers/userRouter.js";
import homeRouter from "./routers/homeRouter.js";
import rbacRouter from "./routers/rbacRouter.js";
import fs from "fs";
import path from "path";

const app = express();  //express server yaratıldı
dotenv.config();        //process.env içine .env içindeki değerleri atar
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,  //Frontendden Cookie ve token gönderilmesine izin verir 
    })
); //uzaktaki bir sunucuya gönderilecek http istekleri için kullanılıyor

app.use(express.json());    //anlamadım tam olarak ama endpoint içinde json formatında 
                            //cevap dönderebilmemizi sağlıyor sanırsam 
app.use(cookieParser());


app.use("/upload",express.static('upload'));


app.use("/home", homeRouter);
app.use("/admin",rbacRouter);
app.use("/map", helpRouter);
app.use("/", userRouter);

const PORT = process.env.PORT;

//MongoDB baglantı kısmı asagısı
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    app.listen(PORT, () => {
        console.log('server is running');
    })
})
.catch((error) => {
    console.error(error.message);
});