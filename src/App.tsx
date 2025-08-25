import { Provider } from "react-redux";
import { store } from "./store";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles"

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AppRoutes />
  </Provider>
);

export default App
