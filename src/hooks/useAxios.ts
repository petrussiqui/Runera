import axios, { AxiosResponse } from "axios";
import useSettings from './useSettings'
const useAxios = (accessToken?: string) => {

    const API = process.env.REACT_APP_IS_DEV ? 'http://localhost:2000/api' : 'https://api.tonetapp.co/api';

    const { settings } = useSettings();
    const headers = {
        Authorization: `Bearer ${settings.token || accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "Content-Security-Policy-Report-Only":
            "script-src https://accounts.google.com/gsi/client; frame-src https://accounts.google.com/gsi/; connect-src https://accounts.google.com/gsi/",
    };

    async function callApi<ReqData, ResData>(
        method: "get" | "post" | "put" | "delete",
        endpoint: string,
        requestData?: ReqData
    ): Promise<ResData> {
        try {
            let url = API + endpoint;
            let response: AxiosResponse<ResData>;
            switch (method) {
                case "get":
                    response = await axios.get<ResData>(url, {
                        params: requestData,
                        headers: headers,
                    });
                    break;
                case "post":
                    response = await axios.post<ResData>(url, requestData, {
                        headers: headers,
                    });
                    break;
                case "put":
                    response = await axios.put<ResData>(url, requestData, {
                        headers: headers,
                    });
                    break;
                case "delete":
                    response = await axios.delete<ResData>(url, {
                        params: requestData,
                        headers: headers,
                    });
                    break;
                default:
                    throw new Error("Invalid HTTP method");
            }

            switch (response.status) {
                case 200:
                case 201:
                    return response.data;
                case 401:
                    throw new Error("Unauthorized");
                case 403:
                    throw new Error("Forbidden");
                case 500:
                    throw new Error("Internal server error");
                case 502:
                    throw new Error("Service unavailable");
                case 526:
                    throw new Error("Please connect to VPN");
                default:
                    throw new Error("Undefined");
            }
        } catch (error) {
            throw error;
        }
    }

    return { callApi };
};

export default useAxios;
