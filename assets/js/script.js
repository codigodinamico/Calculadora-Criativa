let equal_pressed = 0;
//Consulte todos os botões excluindo AC e DEL
let button_input = document.querySelectorAll(".input-button");
//Consulte os botões input, equal, clear e erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

//Acesse cada classe usando forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }

        //Valor de exibição de cada botão
        input.value += button_class.value;
    });
});

//Resolver a operação quando o usuário clicar no sinal de igual
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        //Evoluir os números para o input
        let solution = eval(inp_val);
        //True para números naturais
        //false para decimais
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        //Se o usuário inseriu uma entrada invalida
        alert("Invalid Input");
    }
});

//Limpar o campo de input
clear.addEventListener("click", () => {
    input.value = "";
});

//Apagar um dígito
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});