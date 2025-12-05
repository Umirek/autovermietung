import express from "express"
import { protect } from "../middleware/auth.js";
import { addCar, changeRoleToOwner, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailability, updateUserImage } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRoter = express.Router();

ownerRoter.post("/change-role", protect, changeRoleToOwner)
ownerRoter.post("/add-car", upload.single("image"), protect, addCar)
ownerRoter.get("/cars", protect, getOwnerCars)
ownerRoter.post("/toggle-car", protect, toggleCarAvailability)
ownerRoter.post("/delete-car", protect, deleteCar)
ownerRoter.get("/dashboard", protect, getDashboardData)
ownerRoter.post("/update-image", protect, upload.single("image"), protect, updateUserImage)

export default ownerRoter;