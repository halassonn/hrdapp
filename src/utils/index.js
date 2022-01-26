import Cookie from "universal-cookie";
const cookietoken = new Cookie();

export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};

export const setTokenToCookie = (key, value, config) => {
  cookietoken.set(key, value, config);
};


export const removeTokenFromCookie = (key) => {
  cookietoken.remove(key);
};



export const getTokenFromCookie = () => {
  const token = cookietoken.get("token");

  if (token !== undefined) {
    return token.token;
  }
};

export const isJWTExpired = (key) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
