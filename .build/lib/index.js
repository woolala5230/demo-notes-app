var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stacks/index.js
var stacks_exports = {};
__export(stacks_exports, {
  default: () => main
});
module.exports = __toCommonJS(stacks_exports);

// stacks/StorageStack.js
var import_resources = require("@serverless-stack/resources");
function StorageStack({ stack, app }) {
  const bucket = new import_resources.Bucket(stack, "Uploads");
  const table = new import_resources.Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string"
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" }
  });
  return {
    table,
    bucket
  };
}
__name(StorageStack, "StorageStack");

// stacks/MyStack.js
var import_resources2 = require("@serverless-stack/resources");
function MyStack({ stack }) {
  const api = new import_resources2.Api(stack, "Api", {
    routes: {
      "GET /": "functions/lambda.handler"
    }
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
__name(MyStack, "MyStack");

// stacks/index.js
var import_resources3 = require("@serverless-stack/resources");
function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "backend",
    bundle: {
      format: "esm"
    }
  });
  app.stack(StorageStack);
  app.stack(MyStack);
}
__name(main, "main");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
