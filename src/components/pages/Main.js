import loadable from "@loadable/component";
import { Suspense } from "react";
import { lazy } from "@loadable/component";

const DinamicHome = loadable(() =>
  import(/* webpackChunkName: "home" */ "./Home")
);
const DinamicAbout = lazy(() =>
  import(/* webpackChunkName: "about" */ "./About")
);

const DinamicContact = lazy(() =>
  import(/* webpackChunkName: "contact" */ "./Contact")
);

const Main = () => (
  <main>
    <DinamicHome />
    <Suspense fallback={<div>Loading...</div>}>
      <DinamicAbout />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <DinamicContact />
    </Suspense>
  </main>
);

export default Main;
