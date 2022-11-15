import { App } from "./app";

const app = new App("Wolverine app");

document.getElementById("title")!.innerText = app.getName()
