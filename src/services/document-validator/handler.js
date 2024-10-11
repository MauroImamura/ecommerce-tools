import chalk from "chalk";
import validateCpf from "./utils/validate-cpf.js";
import validateCnpj from "./utils/validate-cnpj.js";

async function handler(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }

  let isValid = false;
  if(result.type == 1){
    isValid = await validateCpf(result.docId);
  }
  else{
    isValid = await validateCnpj(result.docId);
  }

  if(isValid){
      console.log(chalk.green(`O documento informado é válido.`));
  }
  else{
      console.log(chalk.red(`O documento informado não é válido.`));
  }
}

export default handler;