export const ADD_LOGIN = 'ADD_LOGIN';
export const TOKEN_API = 'TOKEN_API';

export const userLogin = (payload) => ({
  type: ADD_LOGIN,
  payload,
});

export const tokenAPI = (payload) => ({
  type: TOKEN_API,
  payload,
});

export const fetchAPItoken = () => fetch('https://opentdb.com/api_token.php?command=request').then((response) => response.json());

export const fetchAPIquestion = (param) => fetch(`https://opentdb.com/api.php?amount=5&token=${param}`).then((response) => response.json());
