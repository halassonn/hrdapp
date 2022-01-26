import { useReducer } from "react";
import { GlobalContext } from "./index";
export const LOADING = "LOADING";
export const RESPONSE = "RESPONSE";
export const CLOSE_RESPONSE = "CLOSE_RESPONSE";
export const GLOBAL_PARAMETERS = "GLOBAL_PARAMETERS";
export const SET_DATA_KANTORS = "SET_DATA_KANTORS";

const globalAppState = {
  pend_terakhir: "",
  time: 100,
  loading: false,
  response: {
    status: null,
    message: null,
    show: false,
    action: null,
    children: null,
  },
  app: {
    name: null,
    page: null,
  },
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case RESPONSE:
      return { ...state, response: action.payload };
    case CLOSE_RESPONSE:
      return { ...state, response: globalAppState.response };
    case GLOBAL_PARAMETERS:
      return { ...state, parameters: { ...action.payload } };
    case SET_DATA_KANTORS:
      return { ...state, parameters: { datakantor: { ...action.payload } } };
    case "LOGOUT":
      return { ...state, ...action.payload };
    case "APP":
      return { ...state, app: { ...action.payload } };
    default:
      return state;
  }
};

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, globalAppState);
  const { children } = props;

  const setLoading = (arg) => {
    dispatch({ type: LOADING, payload: arg });
  };

  const setResponse = (arg) => {
    dispatch({ type: RESPONSE, payload: arg });
  };
  const closeResponse = () => {
    dispatch({ type: CLOSE_RESPONSE, payload: {} });
  };
  const setApp = ({ name, page }) => {
    // console.log(name);
    dispatch({
      type: "APP",
      payload: { name, page: page === "#" ? null : page.toLowerCase() },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setLoading,
        setResponse,
        closeResponse,
        setApp,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
