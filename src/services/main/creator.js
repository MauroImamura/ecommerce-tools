import promptSchemaMain from "../../schemas/prompt-schema-main.js";
import prompt from "prompt";
import createQRCode from "../qrcode/creator.js";
import createPassword from "../password/creator.js";
import createValidator from "../document-validator/creator.js";

async function createMain(){
    prompt.get(promptSchemaMain, async (err, choise) => {
        if (err) console.log(err);
    
        if (choise.select == 1) await createQRCode();
        if (choise.select == 2) await createPassword();
        if (choise.select == 3) await createValidator();
      });
    
      prompt.start();
}

export default createMain;