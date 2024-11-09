# 🕹 Desafio Escrevendo as Classes de Um Jogo
#### Desafio GFT Start #6 - Lógica de Programação em Parceria com DIO
Este projeto implementa uma classe genérica que representa heróis de um jogo de aventura, cada um com características únicas e ataques específicos baseados no seu tipo. Este exercício busca aplicar conceitos de orientação a objetos, como classes e métodos, além de estruturas básicas como variáveis, operadores, e decisões condicionais.

## 📋 Funcionalidades
- Criação de heróis com propriedades:
  - `nome`: o nome do herói.
  - `idade`: a idade do herói.
  - `tipo`: a classe do herói (por exemplo, "guerreiro", "mago", "monge", "ninja").
- Métodos para interações:
  - Método `atacar`: Exibe uma mensagem personalizada do ataque com base no tipo do herói.
    - Magos atacam usando magia.
    - Guerreiros atacam usando espada.
    - Monges atacam usando artes marciais.
    - Ninjas atacam usando shuriken.

## 🛠️ Tecnologias Utilizadas
**JavaScript:** O projeto utiliza classes e métodos para estruturar e definir o comportamento dos heróis.

## 🚀 Como Executar
1. **Pré-requisitos:** Certifique-se de ter o `Node.js` instalado.
2. Clone o repositório e navegue até o diretório do projeto:

```
git clone https://github.com/feer-rodriguess90/Classes_de_um_Jogo_JS.git
cd Classes_de_um_Jogo_JS
```
3. **Execute o Arquivo Principal:**
```
node classes_jogo.js
```
## 📄 Exemplo de Uso
No código `classes_jogo.js`, crie instâncias da classe Heroi e chame o método atacar para ver a mensagem personalizada de cada herói.
```
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Conan", 35, "guerreiro");

heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O guerreiro atacou usando espada
```

## 🎯 Objetivo do Projeto
Este desafio foi desenvolvido para aplicar e reforçar conhecimentos em:

- Declaração de variáveis e operadores
- Estruturas condicionais e laços de repetição
- Criação e uso de classes e objetos
- Métodos de classe e manipulação de propriedades

## 🤝🏽 Contribuições
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Happy coding! 👩🏽‍💻

[![linkedin](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/datavizwithfer/) 
[![medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@DataVizWithFer)
