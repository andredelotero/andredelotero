import loadable from "@loadable/component";
const DinamicHome = loadable(() =>
  import(/* webpackChunkName: "home" */ "./Home")
);
const DinamicAbout = loadable(() =>
  import(/* webpackChunkName: "about" */ "./About")
);
const DinamicContact = loadable(() =>
  import(/* webpackChunkName: "contact" */ "./Contact")
);

const Main = () => (
  <main>
    <DinamicHome />
    <DinamicAbout />
    <DinamicContact />
  </main>
);

export default Main;
