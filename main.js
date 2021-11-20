class Recipe { //Cria classe Recipe, com nome, descrição, e um método para mostrar na página
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  show(title, description) {
    title.textContent = this.name;
    description.textContent = this.description;
  }
}

const Modal = { 
  container: document.querySelector('.modal'),//Selecionando o modal, para aplicar ou remover o active
  title: document.querySelector('.modal-title'), //Local onde ficará o título da receita na modal
  description: document.querySelector('.modal-description'),//Local onde ficará a descrição da receita na modal
  open(){
    Modal.container.classList.add('active') //Método para abrir a modal, adicionando a classe active
  },
  close(){
    Modal.container.classList.remove('active')// Método para remover a modal, removendo a classe active
  }
}

let recipeDescriptions = [] //Array que armazena a descrição de cada uma das receitas
recipeDescriptions[0] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis perspiciatis, esse possimus eaque totam, sed repudiandae eligendi iusto dolorum a pariatur voluptate sunt explicabo similique, quos qui odit illo?"
recipeDescriptions[1] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis perspiciatis, esse possimus eaque totam, sed repudiandae eligendi iusto dolorum a pariatur voluptate sunt explicabo similique, quos qui odit illo?"
recipeDescriptions[2] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis perspiciatis, esse possimus eaque totam, sed repudiandae eligendi iusto dolorum a pariatur voluptate sunt explicabo similique, quos qui odit illo?"
recipeDescriptions[3] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis perspiciatis, esse possimus eaque totam, sed repudiandae eligendi iusto dolorum a pariatur voluptate sunt explicabo similique, quos qui odit illo?"
recipeDescriptions[4] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis perspiciatis, esse possimus eaque totam, sed repudiandae eligendi iusto dolorum a pariatur voluptate sunt explicabo similique, quos qui odit illo?"
recipeDescriptions[5] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis perspiciatis, esse possimus eaque totam, sed repudiandae eligendi iusto dolorum a pariatur voluptate sunt explicabo similique, quos qui odit illo?"

let Abacate = new Recipe();
let Kiwi = new Recipe();
let Vegetais = new Recipe();
let Juliana = new Recipe();
let Oriental = new Recipe();
let Beterrabas = new Recipe();

let recipes = [Abacate, Kiwi, Vegetais, Juliana, Oriental, Beterrabas]//Armazena cada uma das receitas de classe Recipe
let recipeTitles = document.querySelectorAll('.recipe-title') //Seleciona o título das receitas no HTML

recipes.forEach((recipe, index) => { //Para cada uma das receitas (Recipe)
  recipe.name = recipeTitles[index].textContent //O nome de cada uma será de acordo com o nome no HTML
  recipe.description = recipeDescriptions[index]//Definindo a descrição de cada receita
})

const recipeButtons = document.querySelectorAll('[data-recipe-button]')//Seleciona todos os botões Ver receita
recipeButtons.forEach((button, index) => { //Pra cada botão...
  let chosenRecipe = recipes[index]//Neste momento, chosenRecipe pode ser qualquer receita
  button.addEventListener('click', () => { //Quando eu clicar emum dos botões de Ver receita...
    Modal.open()//Abra o modal
    chosenRecipe.show(Modal.title, Modal.description)//Neste momento, chosenRecipe vai ser a receita que foi clicada, e então executa o método da classe Recipe
  })
})