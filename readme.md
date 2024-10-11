## Projeto de ferramentas para e-commerce

Projeto para desafio da dio.me "Criando um Gerador de QR Codes para E-commerces com Node.js".

Este projeto trata de serviços de gerador de QRcode, gerador de senhas, validados de cnpj e cpf.

<div style="text-align: center;">
    <img src="./assets/cover-image.png" alt="Ecommerce-tools-cover" width="500" height="500">
</div>

---
### Dependências:
  - chalk
  - prompt
  - qrcode-terminal

### Uso:
  - executar restore das dependências:
    ```
    npm install
    ```
  - configurar as variáveis de ambiente no arquivo .env da raiz do projeto:
    ```
    UPPERCASE_LETTERS: booleano para aceitar letras maiúsculas,
    LOWERCASE_LETTERS: booleano para aceitar letras minúsculas,
    NUMBERS: booleano para aceitar números,
    SPECIAL_CHARACTERS: booleano para aceitar símbolos,
    PASSWORD_LENGTH: inteiro referente ao número de caracteres das senhas geradas,
    ```

  - executar o script de inicialização:
    ```
    npm run start
    ```

### Agradecimentos:

  Baseado no [projeto de Felipe Aguiar](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/projeto-qrcode) desenvolvido durante o bootcamp de node.js da dio.me, com alterações de nomenclatura, organização de código e extensão de recursos para incluir novas funcionalidades ao projeto original.
