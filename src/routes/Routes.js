import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
//pages
import { AboutUsPage } from "../pages/AboutUs";
import { AboutPage } from "../pages/About";
import { ClippingPage } from "../pages/Clipping";
import { ContactPage } from "../pages/Contact";
import { FlexibilizationPage } from "../pages/Flexibilization";
import { PanelPB } from "../pages/PanelPB";
import { Home } from "../pages/Home";

import { HealthOrganization } from "../pages/HealthOrganizations";
import { Articles } from "../pages/Articles";
import { News } from "../pages/News";
import { Newsletter } from "../pages/Newsletters";
import { PodcastsVideos } from "../pages/PodcastsVideos";

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/painelpb" component={PanelPB}></Route>
          <Route path="/quemsomos" component={AboutUsPage}></Route>
          <Route path="/sobre" component={AboutPage}></Route>
          <Route path="/clipping" component={ClippingPage}></Route>
          <Route path="/contato" component={ContactPage}></Route>
          <Route path="/reabertura" component={FlexibilizationPage}></Route>

          <Route path="/artigos" component={Articles}></Route>
          <Route path="/boletins" component={Newsletter}></Route>
          <Route path="/noticias" component={News}></Route>
          <Route path="/orgsaude" component={HealthOrganization}></Route>
          <Route path="/podcastsevideos" component={PodcastsVideos}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
