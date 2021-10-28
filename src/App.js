import React           from "react";
import { Provider }    from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/index";
import { AppRouter }        from  "../src/routes/AppRouter";
import "./index.css";

const App = () => {
  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};
export default App;
