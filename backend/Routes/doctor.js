import express from "express";
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from "../Controllers/doctorController.js";

import { authenticate,restrict } from "../auth/verifyToken.js";

import reviewRouter from '../Routes/review.js'

const router = express.Router();


//nested route
router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor); 
router.put("/:id",authenticate, restrict(["doctor"]), updateDoctor); // Specific route - Update Doctor by ID
router.delete("/:id",authenticate, restrict(["doctor"]), deleteDoctor); // Specific route - Delete Doctor by ID

export default router;
