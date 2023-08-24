import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import AppRoutes from "./routes/routes";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <AppRoutes />
    </Provider>
  );
}

export default App;
