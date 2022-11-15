class Application {

  private appName: string;

    constructor(appName: string) {

      this.appName = appName;
    }

    getName(): string {
      
      return this.appName;
    }
 }
 
 export { Application as App };