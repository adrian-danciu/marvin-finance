import { Provider } from "react-redux";
import "./App.css";
import AppRoutes from "./routes/routes";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="h-[100vh] bg-gray-100">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
