import { createContext } from "react";

const UserContext = createContext({
  email: "",
  name: "Jack Harkness",
  password: "",
  presenter: false
})

export default UserContext;