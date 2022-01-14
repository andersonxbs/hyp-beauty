import { FlagsmithProvider } from "flagsmith-react";
import Routes from "./Routes";

const App = ({ flagsEnvironmentKey, flagsApi }) =>  (
  <FlagsmithProvider environmentId={flagsEnvironmentKey} api={flagsApi}>
    <Routes />
  </FlagsmithProvider>
);

export default App;
