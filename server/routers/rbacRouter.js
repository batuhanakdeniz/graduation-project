import express from "express";
import {getResources,postResources,putResources } from "../controllers/rbacController.js"
const router = express.Router();

router.get('/api/resources',getResources);
router.post('/api/resources',postResources);
router.put('/api/resources',putResources);

export default router;