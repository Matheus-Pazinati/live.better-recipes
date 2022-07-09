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