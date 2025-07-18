let opcao;
let produtos = [];

do {
  opcao = prompt(
    "Bem-vindo ao cadastro de produtos!\n" +
    "1 - Cadastrar produto\n" +
    "2 - Listar produtos\n" +
    "3 - Excluir produto\n" +
    "4 - Sair"
  );

  if (opcao !== "1" && opcao !== "2" && opcao !== "3" && opcao !== "4") {
    console.log("Opção inválida!");
  } else {
    switch (opcao) {
      case "1":
        let nomeProduto = prompt("Insira o nome do produto:");
        if (nomeProduto.trim() === "") {
          console.log("Nome inválido. Produto não cadastrado.");
        } else {
          produtos.push(nomeProduto.trim());
          console.log(`Produto "${nomeProduto.trim()}" cadastrado com sucesso!`);
        }
        break;

      case "2":
        if (produtos.length === 0) {
          console.log("Nenhum produto cadastrado.");
        } else {
          // Cria array numerado
          let listaNumerada = produtos.map((produto, index) => `${index + 1}. ${produto}`);
          console.log("Lista de produtos:\n" + listaNumerada.join("\n"));
        }
        break;

      case "3":
        if (produtos.length === 0) {
          console.log("Nenhum produto para excluir.");
        } else {
          // Mostra lista numerada para o usuário
          let listaNumerada = produtos.map((produto, index) => `${index + 1}. ${produto}`);
          console.log("Produtos cadastrados:\n" + listaNumerada.join("\n"));

          let produtoExcluir = Number(prompt("Insira o número do produto que deseja excluir:"));
          let indiceExcluir = produtoExcluir - 1;

          if (
            Number.isInteger(produtoExcluir) &&
            produtoExcluir >= 1 &&
            produtoExcluir <= produtos.length
          ) {
            let removido = produtos.splice(indiceExcluir, 1);
            console.log(`Produto "${removido[0]}" excluído com sucesso!`);
          } else {
            console.log("Número inválido! Produto não encontrado.");
          }
        }
        break;

      case "4":
        console.log("Saindo do programa...");
        break;
    }
  }
} while (opcao !== "4");
