import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { ConsultOneAccountController } from "../controllers/consult-one-account-controller.js";
import { CreateAccountController } from "../controllers/create-account-controller.js";
import { DeleteAccountController } from "../controllers/delete-account-controller.js";
import { UpdateAccountController } from "../controllers/update-account-controller.js";


const router = express.Router();

router.get("/accounts", (req, res) => {new ConsultAllAccountsController().handle(req, res)});

router.get("/accounts/:id", (req, res) => {new ConsultOneAccountController().handle(req, res)});

router.post("/create", (req, res) => {new CreateAccountController().handle(req, res)});

router.put("/update/:id", (req, res) => {new UpdateAccountController().handle(req, res)});

router.delete("/delete/:id", (req, res) => {new DeleteAccountController().handle(req, res)});



export default router;
