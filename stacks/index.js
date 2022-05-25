import { StorageStack } from "./StorageStack";
import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "backend",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack);
  app.stack(MyStack);
}

