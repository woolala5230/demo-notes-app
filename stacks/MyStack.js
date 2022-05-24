import { StackContext, Api } from "@serverless-stack/resources";

/**
 * @param {StackContext} ctx
 */
export function MyStack({ stack }) {
  // Create an HTTP API
  const api = new Api(stack, "Api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });

  // Show the endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
//------------------------------------------
// 원래 있던 내용 - // 포함, 코멘트를 풀것
//------------------------------------------
//import { StackContext, Api } from "@serverless-stack/resources";

/**
 * @param {StackContext} ctx
 */
/*
export function MyStack({ stack }) {
  new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });
}
*/
