import { UseGlobalContext } from '../helper/GlobalContext';
import { LocalStorageHelper } from '../helper/StorageHelper';

export const UserHeaderLogic = () => {
  const {
    actions: { setIsUserLoggedIn },
  } = UseGlobalContext();

  const HandleLogOut = () => {
    console.log('hello');

    setIsUserLoggedIn(false);
    LocalStorageHelper.setIsUserLoggedIn(false);
    LocalStorageHelper.removeUserData();
  };

  return {
    HandleLogOut,
  };
};
