import prompt from "prompt";
import promptSchemaDocument from "../../schemas/prompt-schema-document.js";
import handler from "./handler.js";

async function createValidator() {
  prompt.get(promptSchemaDocument, handler);
  prompt.start();
}

export default createValidator;