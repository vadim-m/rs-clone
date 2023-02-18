export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

const deleteToken = () => {
  localStorage.removeItem('token');
};

export const setUserID = (id: string) => {
  localStorage.setItem('userID', id);
};

export const getUserID = () => {
  return localStorage.getItem('userID');
};

const deleteUserID = () => {
  localStorage.removeItem('userID');
};

export const isAuthenticated = () => {
  if (getToken()) {
    return true;
  }

  return false;
};

export const loguot = () => {
  deleteToken();
  deleteUserID();
};
