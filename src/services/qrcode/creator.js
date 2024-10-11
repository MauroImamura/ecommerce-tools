import prompt from "prompt";
import promptSchemaQRCode from "../../schemas/prompt-schema-qrcode.js";
import handler from "./handler.js";

async function createQRCode() {
  prompt.get(promptSchemaQRCode, handler);
  prompt.start();
}

export default createQRCode;