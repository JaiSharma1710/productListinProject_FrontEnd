import { UseGlobalStates, GlobalContext } from './helper/GlobalContext';

import Toaster from './components/global/Toaster';
import SignInSignUp from './pages/SignInSignUp';
import Modal from './components/global/Modal';
import Index from './pages/Index';
import { LocalStorageHelper } from './helper/StorageHelper';
import { useEffect } from 'react';

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
      {globalState.isModalActive && <Modal />}
      {globalState.isToasterActive && <Toaster />}
      {globalState.isUserLoggedIn ? <Index /> : <SignInSignUp />}
    </GlobalContext.Provider>
  );
}

export default App;
