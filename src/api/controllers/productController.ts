import createProduct from "../../core/stories/createProductStory";
import { updateProduct } from "../../core/stories/updateProductStory";
import { removeProduct } from "../../core/stories/removeProductStory";

import { checkByID } from "../middlewares/checkByID";
import { getProducts } from "../../core/stories/getProductsStory";
import { getProductById } from "../../core/stories/getProductByIDStory";

export function productController() {
  function create() {
    return createProduct();
  }

  function update() {
    if (checkByID()) return updateProduct();
    return "Product not found.";
  }

  function remove() {
    if (checkByID()) return removeProduct();
    return "Product not found";
  }

  function getAll() {
    if (checkByID()) return getProducts();
    return "Products not found";
  }

  function getByID() {
    if (checkByID()) return getProductById();
    return "Product not found";
  }

  return { create, update, remove, getAll, getByID };
}
