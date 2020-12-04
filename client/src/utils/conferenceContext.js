import { createContext } from "react";

const ConferenceContext = createContext({
  confName: "",
  confDates: "",
  confType: "",
})

export default ConferenceContext;