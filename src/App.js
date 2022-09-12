import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import ProjectDetailPage from "pages/ProjectDetailPage";
import TeamPage from "pages/TeamPage";
import DiscussProjectPage from "pages/DiscussProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import Consulting from './pages/Consulting';
import Marketing from './pages/Marketing';
import "assets/css/styles.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/project/:id" component={ProjectDetailPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/discuss-project" component={DiscussProjectPage} />
      <Route exact path="/consulting" component={Consulting} />
      <Route exact path="/Marketing" component={Marketing} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
