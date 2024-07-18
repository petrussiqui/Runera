import { createContext, useEffect, useState } from 'react';
import { THEMES } from 'utils/constants';
import useLocalStorage from 'hooks/useLocalStorage';
const initialSettings = {
  direction: 'ltr',
  theme: THEMES.DARK,
  activeLayout: 'layout1',
  responsiveFontSizes: true,
  token: ''
};
export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: arg => { }
});
const SettingsProvider = ({
  children
}) => {
  const {
    data: settings,
    storeData: setStoreSettings
  } = useLocalStorage("settings", initialSettings);

  const saveSettings = updateSettings => {
    setStoreSettings(updateSettings);
  };

  return <SettingsContext.Provider value={{
    settings,
    saveSettings
  }}>
    {children}
  </SettingsContext.Provider>;
};
export default SettingsProvider;