import { PLATFORM } from "aurelia-framework"

export class App {

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./modules/home/home') },
      { route: 'colaboradores', name: "colaboradores", moduleId: PLATFORM.moduleName('./modules/colaboradores/colaboradores'), title: 'Colaboradores' },
      { route: 'c', name: 'c', moduleId: PLATFORM.moduleName('./modules/c/c'), title: 'xxx' }
    ]);
  }
}
