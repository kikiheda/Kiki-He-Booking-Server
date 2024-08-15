import express from "express";
import {
  getHome,
  getMenu,
  getContact,
} from "../controllers/generalController.js";

const router = express.Router();

// Home page
router.get("/", getHome);

// Menu page
router.get("/menu", getMenu);

// Contact page
router.get("/contact", getContact);

export default router;
