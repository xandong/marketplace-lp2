import createClient from "../../core/stories/createClientStory";
import { updateClient } from "../../core/stories/updateClientStory";
import { removeClient } from "../../core/stories/removeClientStory";

import { checkByID } from "../middlewares/checkByID";
import { getClientById } from "../../core/stories/getClientByIDStory";
import { getClients } from "../../core/stories/getClientsStory";

export function clientController() {
  function create() {
    return createClient();
  }

  function update() {
    if (checkByID()) return updateClient();
    return "User not found.";
  }

  function remove() {
    if (checkByID()) return removeClient();
    return "User not found";
  }

  function getAll() {
    return getClients();
  }

  function getByID() {
    if (checkByID()) return getClientById();
    return "User not found";
  }

  return { create, update, remove, getAll, getByID };
}
