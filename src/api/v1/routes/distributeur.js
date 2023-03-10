import { Router } from "express";
import { getCategories, getDrinkCategory, getDrinkInfo, getToppings } from "../services/distributeur.js";

const router = Router();

router.get(
  "/categories",
  (req, res) => {
    try {
      console.log("Getting All Categories");
      let info = getCategories();
      res.status(200).send({ message: "Success !!",id:info.id });
    } catch (e) {
      console.log(e);
      res.status(404).send({ message: "Failed !!" });
    }
  }
);

router.get(
    "/drink/:id",
    (req, res) => {
      try {
        console.log("Getting info Drink");
        let info = getDrinkInfo(req.body);
        res.status(200).send({ message: "Success !!",id:info.id });
      } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Failed !!" });
      }
    }
  );
  
  router.get(
    "/category/drink",
    (req, res) => {
      try {
        console.log("Getting Drink of category");
        let info = getDrinkCategory(req.body);
        res.status(200).send({ message: "Success !!",id:info.id });
      } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Failed !!" });
      }
    }
  );
   
  router.get(
    "/topping/:id",
    (req, res) => {
      try {
        console.log("Getting Toppings");
        let info = getToppings();
        res.status(200).send({ message: "Success !!",id:info.id });
      } catch (e) {
        console.log(e);
        res.status(404).send({ message: "Failed !!" });
      }
    }
  );
  
  


export default router;