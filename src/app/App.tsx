import { BrowserRouter } from "react-router";
import "@/shared/config";
import { AppRouter } from "./router";

export const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
