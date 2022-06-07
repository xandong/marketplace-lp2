import express from "express";

export const routes = express.Router();

routes.get("/", (req, res) => res.send("Marketplace API"));

// CLIENT
routes.get("/clients", (req, res) => res.send("Mostra clientes"));
routes.get("/clients/id:", (req, res) => res.send("Mostra clientes por ID"));
routes.post("/clients", (req, res) => res.send("Cadastra cliente"));
routes.patch("/clients", (req, res) => res.send("Atualiza cliente"));

// PRODUCT
routes.get("/products", (req, res) => res.send("Mostra produtos"));
routes.get("/products/id:", (req, res) => res.send("Mostra produtos"));
routes.post("/products", (req, res) => res.send("Cadastra produtos"));
routes.patch("/clients", (req, res) => res.send("Atualiza cliente"));
