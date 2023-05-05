import { Provider } from 'react-redux'
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { Provider as NextAuthProvider } from "next-auth/client"
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';
import store from "../slices/store"
import '../styles/globals.css'

let persistor = persistStore(store)

const progress = new ProgressBar({
  size: 2,
  color: "#DC143C",
  className: "",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextAuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </NextAuthProvider>
  );
}

export default MyApp
