import { createContext } from "react";

const UserContext = createContext({
  email: "",
  name: "",
  password: "",
  presenter: false
})

export default UserContext;