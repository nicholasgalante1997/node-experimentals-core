import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { HeroWidget } from "../widgets/hero/component";
import { Frame, StyledNavbar } from "./views";

import "./index.css";

const routeMeta = [
  {
    route: "hero-text",
    component: HeroWidget,
    componentProps: {
      background: "black",
      text: "It's Always Sunny in Philadelphia",
      textColor: "white",
      textElement: "h1",
      gridNumber: 5,
      height: "220px",
      className: "hero",
    },
  },
  {
    route: "hero-image",
    component: HeroWidget,
    componentProps: {
      background: "linear-gradient(to right, cyan, violet)",
      imageSrc: "https://w7.pngwing.com/pngs/97/276/png-transparent-pokemon-eevee-illustration-pokemon-go-pokemon-x-and-y-pikachu-eevee-pokemon-mammal-vertebrate-cartoon-thumbnail.png",
      imageHeight: "200px",
      imageWidth: "auto",
      gridNumber: 5,
      height: "330px",
      className: "hero-image",
    },
  },
  {
    route: "hero-text-w-subtitle",
    component: HeroWidget,
    componentProps: {
      background: "https://assets.fortnitecreativehq.com/wp-content/uploads/2020/11/24084718/7153-0441-1172.jpg",
      text: 'Fortnite',
      textElement: 'h3',
      textColor: 'black',
      subtitle: 'Come join the online sensation.',
      gridNumber: 4,
      height: "300px",
      className: "hero-subtitle",
      p: 1,
    },
  },
  {
    route: "",
    component: () => <Frame>naml webpack dev server / route</Frame>,
    componentProps: {},
  },
];

function ReactRouterDOMNavbar() {
  return (
    <StyledNavbar>
      {routeMeta.map((rm) => (
        <Link to={"/" + rm.route}>/{rm.route}</Link>
      ))}
    </StyledNavbar>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <ReactRouterDOMNavbar />
      <div style={{ position: "relative" }}>
        <Switch>
          {routeMeta.map(({ component: Component, componentProps, route }) => (
            <Route
              path={"/" + route}
              children={<Component {...(componentProps as any)} />}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function mountDevServerApp() {
  const root = createRoot(document.getElementById("dev-root")!);
  root.render(<Router />);
}

mountDevServerApp();
