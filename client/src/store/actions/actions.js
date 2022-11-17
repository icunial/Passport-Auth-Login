export const REGISTER_USER = "REGISTER USER";
export const LOGIN_USER = "LOGIN USER";
export const GET_USER = "GET USER";

export function registerUser(data) {
  return function (dispatch) {
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: REGISTER_USER, payload: data });
      });
  };
}

export function loginUser(data) {
  return function (dispatch) {
    fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: LOGIN_USER, payload: data });
      });
  };
}

export function getUser(data) {
  return function (dispatch) {
    fetch("http://localhost:3001/users/user")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_USER, payload: data });
      });
  };
}
