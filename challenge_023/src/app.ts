import "reflect-metadata";
import { validate } from "class-validator";

import { Product } from "./product.model";

const newProduct = new Product("", -5.99);
validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProduct.getInfo());
  }
});
