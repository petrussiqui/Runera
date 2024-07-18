import React from "react";

// ROOT APP COMPONENT
import App from "./App";

// SITE SETTINGS CONTEXT
import SettingsProvider from "contexts/settingsContext";
import { render } from "react-dom";

// ALL THIRD PARTY LIBRARIES CSS
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "nprogress/nprogress.css";
import "react-quill/dist/quill.snow.css";
import "simplebar-react/dist/simplebar.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";
const rootElement = document.getElementById("root");

async function enableMocking() {}
global.Buffer = global.Buffer || require("buffer").Buffer;

enableMocking().then(() =>
  render(
    <React.StrictMode>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// // https://github.com/atlassian/react-beautiful-dnd/issues/2407
// root.render(
//   <SettingsProvider>
//     <App />
//   </SettingsProvider>
// );
