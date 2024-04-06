import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import AppRoutes from "./routes/routes";
import { persistor, store } from "./store/store";

function App() {
  return (
    <div className="h-[100%] bg-gray-100">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
