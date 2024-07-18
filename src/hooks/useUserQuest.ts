import { SettingsContext } from "contexts/settingsContext";
import { useCallback, useContext, useEffect, useState } from "react";
import useSettings from './useSettings'

import Decimal from "decimal.js";
import TelegramProvider, { useTelegram } from "contexts/TelegramContext";
import useAxios from "./useAxios";

const useUserQuest = () => {
    const { settings } = useSettings();
    const { callApi } = useAxios()
    const [userQuest, setUserQuest] = useState()
    const { user } = useTelegram()
    const fetchUserQuest = useCallback(async () => {
        if (!settings.token) return;
        try {
            const userQuestResponse = await callApi('get', '/user/quest')
            setUserQuest(userQuestResponse as any)
        } catch (e) {
            console.log('ignoew')
        }
    }, [settings.token])
    useEffect(() => {
        fetchUserQuest()
    }, [
        fetchUserQuest, settings.token
    ])
    return { userQuest, fetchUserQuest }
};

export default useUserQuest;
