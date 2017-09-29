import { authStore } from "../stores/authStore.jsx";

function isLogged() {
  if(authStore.getState().jwt !== "")
    return true;
  return false;
}


export default isLogged;
