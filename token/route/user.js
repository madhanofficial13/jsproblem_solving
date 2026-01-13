import express from "express"
import authMiddleware from "../authmiddleware/mddleware";
import login from "../controler/user";

const rounter = express.Router();

rounter.post("/login",authMiddleware,login)