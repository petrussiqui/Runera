import { SettingsContext } from "contexts/settingsContext";
import { useCallback, useContext, useEffect, useState } from "react";
import useSettings from './useSettings'

import Decimal from "decimal.js";
import TelegramProvider, { useTelegram } from "contexts/TelegramContext";
import useAxios from "./useAxios";

const useUserActivities = (page: number) => {
    const { settings } = useSettings();
    const { callApi } = useAxios()
    const [userActivities, setUserActivities] = useState()
    const { user } = useTelegram()
    const fetchUserActivities = useCallback(async () => {
        if (!settings.token) return;
        try {
            const userData = await callApi('get', `/user/activities?page=${page}&limit=10`)
            setUserActivities(userData as any)
        } catch (e) {
            console.log('ignoew')
        }
    }, [settings.token])
    useEffect(() => {
        fetchUserActivities()
    }, [
        fetchUserActivities, settings.token
    ])
    return { userActivities, fetchUserActivities }
};

export default useUserActivities;
