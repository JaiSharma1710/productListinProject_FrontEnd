import axios from 'axios';

import { LocalStorageHelper } from '../../helper/StorageHelper';
import { UseGlobalContext } from '../../helper/GlobalContext';

export const UseSignIn = () => {
  const {
    actions: { setToasterMessage, setIsToasterActive, setIsUserLoggedIn },
  } = UseGlobalContext();

  const signInSubmitHandler = async (userData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/flower/signin`,
        userData,
      );
      LocalStorageHelper.setUserData(data.data?.[0]);
      LocalStorageHelper.setIsUserLoggedIn(true);
      setIsUserLoggedIn(true);
    } catch (err) {
      setToasterMessage(err.response.data.message);
      setIsToasterActive(true);
    }
  };

  return {
    signInSubmitHandler,
  };
};
