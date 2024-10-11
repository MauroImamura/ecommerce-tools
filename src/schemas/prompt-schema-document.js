import chalk from "chalk";

const promptSchemaDocument = [
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de documento (1- CPF ou (2- CNPJ"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
  {
    name: "docId",
    description: chalk.yellow("Digite o documento para validação:"),
  },
];

export default promptSchemaDocument;