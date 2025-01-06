import { create, fetch, update, del, find } from "../controller/userController.js";
import express from 'express';

const router=express.Router();

router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',del);
router.get('/find/:id',find);
export default router;