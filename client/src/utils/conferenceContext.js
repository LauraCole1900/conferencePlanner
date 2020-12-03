import { createContext } from "react";

const ConferenceContext = createContext({
  confName: "",
  confId: "",
})

export default ConferenceContext;