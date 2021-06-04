import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { Provider } from "@fluentui/react-teams";
import { themeNames } from "@fluentui/react-teams";
import ChildComponent from "./components/ChildComponent"

const initTeamsTheme = (theme: string | undefined) : themeNames => {
  switch (theme) {
    case "dark":
      return themeNames.Dark;
    case "contrast":
      return themeNames.HighContrast;
    default:
      return themeNames.Default;
  }
}

function App() {
  const [appContext, setAppContext] = useState<microsoftTeams.Context>();
  const [appAppearance, setAppAppearance] = useState<themeNames>(
    themeNames.Default
  );

  useEffect(() => {
    microsoftTeams.getContext((context) => {
      setAppContext(context);
      setAppAppearance(initTeamsTheme(context.theme));

      microsoftTeams.appInitialization.notifySuccess();
    });

    microsoftTeams.registerOnThemeChangeHandler((theme) => {
      setAppAppearance(initTeamsTheme(theme));
    });
  }, []);

  return (
    <BrowserRouter>
      <Provider themeName={appAppearance} lang="en-US">
          <Switch>
            <Route exact path="/" component={ChildComponent} />
          </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
