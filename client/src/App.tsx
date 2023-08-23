import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
