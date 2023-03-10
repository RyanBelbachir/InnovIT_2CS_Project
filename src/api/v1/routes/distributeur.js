import { Router } from "express";
import { getCategories, getDrinkCategory, getDrinkInfo, getToppings, getInfoTopping } from "../services/distributeur.js";

const router = Router();

router.get(
  "/categories",
  async (req, res) => {
    try {
      console.log("Getting All Categories");
      let info = await getCategories();
      res.status(200).send(info);
    } catch (e) {
      console.log(e);
      res.status(404).send({ message: "Failed !!" });
    }
  }
);

router.get(
    "/drink/:id",
    async (req, res) => {
      try {
        console.log("Getting info Drink");
        let info = await getDrinkInfo(req.body);
        console.log(req.body);
        res.status(200).send(info);
      } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Failed !!" });
      }
    }
  );
  
  router.get(
    "/category/drink",
    async (req, res) => {
      try {
        console.log("Getting Drink of category");
        let info = await getDrinkCategory(req.body);
        res.status(200).send(info);
      } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Failed !!" });
      }
    }
  );
   
  router.get(
    "/topping",
    async (req, res) => {
      try {
        console.log("Getting Toppings");
        let info = await getToppings();
        res.status(200).send(info);
      } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Failed !!" });
      }
    }
  );
  router.get(
    "/topping/:id",
    async (req, res) => {
      try {
        console.log("Getting Toppings");
        let info = await getInfoTopping(req.body);
        res.status(200).send(info);
      } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Failed !!" });
      }
    }
  );
  
  


export default router;