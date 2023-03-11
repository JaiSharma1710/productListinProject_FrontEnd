export const LocalStorageHelper = {
  setUserData: (userData) =>
    localStorage.setItem('userData', JSON.stringify(userData)),

  setIsUserLoggedIn: (bool) => localStorage.setItem('isUserLoggedIn', bool),

  getIsUserLoggedIn: () => localStorage.getItem('isUserLoggedIn'),

  removeUserData: () => localStorage.removeItem('userData'),
};
