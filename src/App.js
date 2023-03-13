import { useEffect } from 'react';

import { UseGlobalStates, GlobalContext } from './helper/GlobalContext';
import { LocalStorageHelper } from './helper/StorageHelper';

import Toaster from './components/global/Toaster';
import SignInSignUp from './pages/SignInSignUp';
import Modal from './components/global/Modal';
import Index from './pages/Index';
import Loader from './components/global/Loader';

function App() {
  const { globalMethods, globalState } = UseGlobalStates();

  useEffect(() => {
    globalMethods.setIsUserLoggedIn(
      LocalStorageHelper.getIsUserLoggedIn() === 'true',
    );
  }, []);

  return (
    <GlobalContext.Provider
      value={{ actions: globalMethods, states: globalState }}
    >
      {globalState.isLoading && <Loader />}
      {globalState.isModalActive && <Modal />}
      {globalState.isToasterActive && <Toaster />}
      {globalState.isUserLoggedIn ? <Index /> : <SignInSignUp />}
    </GlobalContext.Provider>
  );
}

export default App;
