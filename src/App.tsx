import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/Routes";
import { Toaster } from "sonner";
import ReduxProvider from "./services/helper/provider/ReduxProvider";

function App() {
  return (
    <>
      <Toaster richColors closeButton position="top-right" />
      <ReduxProvider>
        <RouterProvider router={routes} />
      </ReduxProvider>
    </>
  );
}

export default App;
