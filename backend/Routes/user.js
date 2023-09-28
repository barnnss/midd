import express from "express";
import { updateUser, deleteUser, getAllUser, getSingleUser } from "../Controllers/userController.js";

import {authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(['patient']), getSingleUser); // General route - Get a single user by ID
router.get("/",authenticate, restrict(['admin']), getAllUser); // General route - List all users
router.put("/:id",authenticate, restrict(['patient']), updateUser); // Specific route - Update user by ID
router.delete("/:id",authenticate, restrict(['patient']), deleteUser); // Specific route - Delete user by ID

export default router;

