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
import Consultingstartups from './pages/Consultingstartups';
import TechnologiesWebSol from './pages/TechnologiesWebSol';
import TechnologiesMobSol from './pages/TechnologiesMobSol';
import TechnologiesOthSol from './pages/TechnologiesOthSol';
import ConsultingNGOs from './pages/ConsultingNGOs'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/project/:id" component={ProjectDetailPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/discuss-project" component={DiscussProjectPage} />
      <Route exact path="/services/Consulting" component={Consulting} />
      <Route exact path="/services/Marketing" component={Marketing} />
      <Route exact path="/services/Technologies" component={Technologies} />
      <Route exact path="/portfolio/Consulting" component={Portfolioconsulting} />
      <Route exact path="/Portfolio/Marketing" component={Portfoliomarketing} />
      <Route exact path="/Portfolio/Technologies" component={Portfoliotechnologie} />
      <Route exact path="/Portfolio/Consulting/Startups" component={Consultingstartups} />
      <Route exact path="/Portfolio/Consulting/NGO's" component={ConsultingNGOs} />
      <Route exact path="/Portfolio/Technologies/WebSolution" component={TechnologiesWebSol} />
      <Route exact path="/Portfolio/Technologies/MobileSolution" component={TechnologiesMobSol} />
      <Route exact path="/Portfolio/Technologies/OtherSolution" component={TechnologiesOthSol} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
