import { SettingsContext } from "contexts/settingsContext";
import { useCallback, useContext, useEffect, useState } from "react";
import useSettings from './useSettings'

import Decimal from "decimal.js";
import TelegramProvider, { useTelegram } from "contexts/TelegramContext";
import useAxios from "./useAxios";

const useUserData = () => {
    const { settings } = useSettings();
    const { callApi } = useAxios()
    const [userData, setUserData] = useState()
    const { user } = useTelegram()
    const fetchUserData = useCallback(async () => {
        if (!settings.token) return;
        try {
            const userData = await callApi('get', '/user/user-data')
            setUserData(userData as any)
        } catch (e) {
            console.log('ignoew')
        }
    }, [settings.token])
    useEffect(() => {
        fetchUserData()
    }, [
        fetchUserData, settings.token
    ])
    return { userData, fetchUserData }
};

export default useUserData;
