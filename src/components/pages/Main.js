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
    <Suspense fallback={""}>
      <DinamicAbout />
    </Suspense>
    <Suspense fallback={""}>
      <DinamicContact />
    </Suspense>
  </main>
);

export default Main;
