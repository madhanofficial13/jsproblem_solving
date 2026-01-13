import express from "express"
import useRouter from "./route/user.js"
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

app.use(cors({origin:"http://3000"}))

app.use("/api/user",useRouter)


const PORT = 4000;

app.listen(PORT,()=>{
connectDB();
})