const buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach(button => {
      button.addEventListener("click",()=> console.log('hello'));
 });