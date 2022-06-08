import createSeller from "../../core/stories/createSellerStory";
import { updateSeller } from "../../core/stories/updateSellerStory";
import { removeSeller } from "../../core/stories/removeSellerStory";

import { checkByID } from "../middlewares/checkByID";
import { getSellerById } from "../../core/stories/getSellerByIDStory";

export function sellerController() {
  function create() {
    return createSeller();
  }

  function update() {
    if (checkByID()) return updateSeller();
    return "Seller not found";
  }

  function remove() {
    if (checkByID()) return removeSeller();
    return "Seller not found";
  }

  function getByID() {
    if (checkByID()) return getSellerById();
    return "Seller not found";
  }

  return { create, update, remove, getByID };
}
