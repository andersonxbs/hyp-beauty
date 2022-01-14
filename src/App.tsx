import { FlagsmithProvider } from "flagsmith-react";
import AppRoutes from "./Routes";

const App = ({ flagsEnvironmentKey, flagsApi }) =>  (
  <FlagsmithProvider environmentId={flagsEnvironmentKey} api={flagsApi}>
    <AppRoutes />
  </FlagsmithProvider>
);

export default App;
