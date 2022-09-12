import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import ProjectDetailPage from "pages/ProjectDetailPage";
import TeamPage from "pages/TeamPage";
import DiscussProjectPage from "pages/DiscussProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import Consulting from './pages/Consulting';
import Marketing from './pages/Marketing';
import Technologies from './pages/Technologies';
import "assets/css/styles.css";
import Portfolioconsulting from './pages/Portfolioconsulting';
import Portfoliomarketing from './pages/Portfoliomarketing';
import Portfoliotechnologie from './pages/Portfoliotechnologie';

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
      <Route exact path="/Technologies" component={Technologies} />
      <Route exact path="/Portfolioconsulting" component={Portfolioconsulting} />
      <Route exact path="/Portfoliomarketing" component={Portfoliomarketing} />
      <Route exact path="/Portfoliotechnologie" component={Portfoliotechnologie} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
