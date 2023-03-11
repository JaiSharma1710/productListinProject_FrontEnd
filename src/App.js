import { UseGlobalStates, GlobalContext } from './helper/GlobalContext';

import Toaster from './components/global/Toaster';
import SignInSignUp from './pages/SignInSignUp';
import Modal from './components/global/Modal';

function App() {
  const { globalMethods, globalState } = UseGlobalStates();

  return (
    <GlobalContext.Provider
      value={{ actions: globalMethods, states: globalState }}
    >
      {globalState.isModalActive && <Modal />}
      {globalState.isToasterActive && <Toaster />}
      <SignInSignUp />
    </GlobalContext.Provider>
  );
}

export default App;
