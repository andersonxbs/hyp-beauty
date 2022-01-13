import { FlagsmithProvider } from "flagsmith-react";
import Routes from "./Routes";

const App = () => (
  <FlagsmithProvider environmentId="AzTqDA3W7XiaDLPZkfeNtg" api="http://localhost:8000/api/v1/">
    <Routes />
  </FlagsmithProvider>
);

export default App;
