import axios from 'axios';

import { LocalStorageHelper } from '../../helper/StorageHelper';
import { UseGlobalContext } from '../../helper/GlobalContext';

export const UseSignIn = () => {
  const {
    actions: {
      setToasterMessage,
      setIsToasterActive,
      setIsUserLoggedIn,
      setIsLoading,
    },
  } = UseGlobalContext();

  const signInSubmitHandler = async (userData) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/flower/signin`,
        userData,
      );
      setIsLoading(false);
      LocalStorageHelper.setUserData(data.data?.[0]);
      LocalStorageHelper.setIsUserLoggedIn(true);
      setIsUserLoggedIn(true);
    } catch (err) {
      setIsLoading(false);
      setToasterMessage(err.response.data.message);
      setIsToasterActive(true);
    }
  };

  return {
    signInSubmitHandler,
  };
};
