export const LocalStorageHelper = {
  setUserData: (userData) =>
    localStorage.setItem('userData', JSON.stringify(userData)),

  setIsUserLoggedIn: (bool) => localStorage.setItem('isUserLoggedIn', bool),

  getIsUserLoggedIn: () => localStorage.getItem('isUserLoggedIn'),

  getUserData: () => localStorage.getItem('userData'),

  removeUserData: () => localStorage.removeItem('userData'),
};
