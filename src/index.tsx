import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import "./index.css"
import App from "./App"
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

serviceWorkerRegistration.register();
