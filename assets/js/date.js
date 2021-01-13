/*Método de Criação de Datas*/
let date = new Date();

/*Manipulação de data, setando uma data ao seu critério*/
date.setFullYear(2015);

/*Manipulação de data, setando um mês ao seu critério*/
date.setMonth(1);

/*Manipulação de data, setando um dia ao seu critério*/
date.setDate(14);

/*Manipulação de data, adicionando dias no atual dia (caso particular)*/
date.setDate( date.getDate() + 1 );

/*
    O mesmo vale para os demais métodos abaixo:
    date.setHours(24);
    date.setMinutes(10)
    date.setMilliseconds(300);

*/

document.getElementById("date").innerHTML = date;