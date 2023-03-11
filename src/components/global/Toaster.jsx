import React from 'react';

import { UseGlobalContext } from '../../helper/GlobalContext';

import { ICONS } from '../../constants/ICON_SVG';

function Toaster() {
  const {
    actions: { setIsToasterActive },
  } = UseGlobalContext();

  return (
    <div className="z-[2] absolute right-2 top-4 animate__animated animate__fadeInRight flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <ICONS.CLOSE />
      </div>
      <div className="ml-3 text-sm font-normal">Something went wrong</div>
      <button
        onClick={() => setIsToasterActive(false)}
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span className="sr-only">Close</span>
        <ICONS.CLOSE />
      </button>
    </div>
  );
}

export default Toaster;
