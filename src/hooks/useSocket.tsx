import { useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import useSettings from "./useSettings";

interface SocketEventHandlers {
  [eventName: string]: (...args: any[]) => void;
}

const useSocket = (url?: string) => {
  const SOCKET = process.env.REACT_APP_IS_DEV
    ? "http://localhost:2000/"
    : "https://api.tonetapp.co/";
  const { settings } = useSettings();

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Connect to WebSocket server
    if (!settings.token) return;
    socketRef.current = io(SOCKET, {
      auth: {
        authorization: settings.token,
      },
    });

    // Renew connection if disconnected
    const renewConnection = () => {
      if (socketRef.current && !socketRef.current.connected) {
        socketRef.current.connect();
      }
    };

    const renewInterval = setInterval(renewConnection, 50000000); // Renew connection every 5 seconds

    // Disconnect WebSocket when unmounting
    return () => {
      clearInterval(renewInterval);
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [url, settings.token]);

  // Function to listen for events
  const on = (eventName: string, callback: (...args: any[]) => void) => {
    if (socketRef.current) {
      socketRef.current.on(eventName, callback);
    }
  };
  const off = (eventName: string, callback: (...args: any[]) => void) => {
    if (socketRef.current) {
      socketRef.current.off(eventName, callback);
    }
  };
  return { on, off };
};

export default useSocket;
