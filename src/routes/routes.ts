import express from "express";
import { clientController } from "../api/controllers/clientController";
import { productController } from "../api/controllers/productController";
import { sellerController } from "../api/controllers/sellerController";

const seller = sellerController();
const product = productController();
const client = clientController();

export const routes = express.Router();

routes.get("/", (req, res) => res.send("Marketplace API"));

// SELLER
routes.get("/seller/id:", (req, res) => res.send(seller.getByID()));
routes.post("/seller", (req, res) => res.send(seller.create()));
routes.patch("/seller", (req, res) => res.send(seller.update()));
routes.delete("/seller", (req, res) => res.send(seller.remove()));

// PRODUCT
routes.get("/products", (req, res) => res.send(product.getAll()));
routes.get("/product/id:", (req, res) => res.send(product.getByID()));
routes.post("/product", (req, res) => res.send(product.create()));
routes.patch("/product", (req, res) => res.send(product.update()));
routes.delete("/product", (req, res) => res.send(product.remove()));

// CLIENT
routes.get("/clients", (req, res) => res.send(client.getAll()));
routes.get("/client/id:", (req, res) => res.send(client.getByID()));
routes.post("/client", (req, res) => res.send(client.create()));
routes.patch("/client", (req, res) => res.send(client.update()));
routes.delete("/client", (req, res) => res.send(client.remove()));
