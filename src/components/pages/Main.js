import loadable from "@loadable/component";
const DinamicHome = loadable(() => import("./Home"));
const DinamicAbout = loadable(() => import("./About"));
const DinamicContact = loadable(() => import("./Contact"));

const Main = () => (
  <main>
    <DinamicHome />
    <DinamicAbout />
    <DinamicContact />
  </main>
);

export default Main;
