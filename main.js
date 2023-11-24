// function SkinUpgrade(item){
//     skinPul = [item];
// 	upgradeSkinPul = [upgradeItem = {name: "AK47 - updated",
// 	prise: 14.87,
// 	grade: "Industrial Grade - blue",}];
// 	if(confirm(`Чи хочеш ти покращити ${item.name} за ціною ${item.prise}$ рідкості ${item.grade} до 
// 	${upgradeItem.name} за ціною ${upgradeItem.prise}$ рідкості ${upgradeItem.grade} `)){
// 		change = 0;
// 		swicher = 0;
// 		cof = prompt(`Оберіть коф: 1, 2, 5, 10, 20`, 1);
// 		cofc = Math.pow(9/10,cof) - 1;
// 		if(confirm(`Ваш шанс вийграшу з коївіціентом ${cof} становить ${-cofc.toFixed(2)}, Розпочинаємо гру?`)){
// 			for (let index = 0; index <= cof; index++) {
// 				change = Math.random();
// 				console.log(change);
// 				if(change >= 0.9){
// 					alert("Win");
// 					swicher++;
// 					break;
// 				}
// 				else{
// 					change = 0;
// 				}
// 			}
// 			if(swicher == 0){
// 				alert("You lose");
// 			}
// 		}
// 		else{
// 			alert("Sad(")
// 		}


// 	}
// 	else{
// 		return alert("Sad(");
// 	}
// 	cofOne = Math.random() * 1.1;

// };
// SkinUpgrade(item);

mainCof = 0;
result = document.getElementById("result");
cofShow = document.getElementById("cofShow");
resultForUpdate = 0;

itemArray = [
	item = {
		name: "AK47",
		prise: 1.24,
		grade: "Consumer Grade - white",
},	updatedItem = {
		name: "AK47 - updated",
		prise: 14.48,
		grade: "Industrial Grade - blue",
}
];

//description
name1 = document.getElementById("name");
prise = document.getElementById("prise");
rare = document.getElementById("rare");

function inputItemDescription(item,resultForUpdate){
		name1.innerText = `Name: ${item[resultForUpdate].name}`;
		prise.innerText = `Prise is: ${item[resultForUpdate].prise}$.`;
		rare.innerText = `Rate: ${item[resultForUpdate].grade}.`;
}

inputItemDescription(itemArray,resultForUpdate);

//changeCof
cof1 = document.getElementById("cof1");
cof2 = document.getElementById("cof2");
cof3 = document.getElementById("cof3");
cof4 = document.getElementById("cof4");
cnangeToWin = document.getElementById("cnangeToWin");

function getCof1(){
	mainCof = 1;
	cof1.style.backgroundColor = "blue";
	cof2.style.backgroundColor = "red";
	cof3.style.backgroundColor = "red";
	cof4.style.backgroundColor = "red";
	cofShow.innerText = `Cof is:` + mainCof;
	cnangeToWin.innerText = `Your change to win is: ` + procentToWin(mainCof).toFixed(2);
};
function getCof2(){
	mainCof = 2;
	cof1.style.backgroundColor = "red";
	cof2.style.backgroundColor = "blue";
	cof3.style.backgroundColor = "red";
	cof4.style.backgroundColor = "red";
	cofShow.innerText = `Cof is:` + mainCof;
	cnangeToWin.innerText = `Your change to win is: ` + procentToWin(mainCof).toFixed(2);

};
function getCof3(){
	mainCof = 5;
	cof1.style.backgroundColor = "red";
	cof2.style.backgroundColor = "red";
	cof3.style.backgroundColor = "blue";
	cof4.style.backgroundColor = "red";
	cofShow.innerText = `Cof is:` + mainCof;
	cnangeToWin.innerText = `Your change to win is: ` + procentToWin(mainCof).toFixed(2);

};
function getCof4(){
	mainCof = 10;
	cof1.style.backgroundColor = "red";
	cof2.style.backgroundColor = "red";
	cof3.style.backgroundColor = "red";
	cof4.style.backgroundColor = "blue";
	cofShow.innerText = `Cof is:` + mainCof;
	cnangeToWin.innerText = `Your change to win is: ` + procentToWin(mainCof).toFixed(2);
};

//calculateChangeToWin

function procentToWin(cof){
	return cof = -Math.pow(9/10,cof) + 1;
}

//mainProces

function mainProces(cof){
	if(cof ==  1 || cof ==  2 || cof ==  5 || cof ==  10){
		count = 2;
		for (let index = 0; index < cof; index++) {
			change = Math.random();
			console.log(change);
			if(change >= 0.9){
				count = 1
				break;
			}
			count = 0;
		}
		console.log(count);
		if(count == 0){
			result.innerText = `You lost!!!`;
			cof = 0;
		}
		if(count == 1){
			result.innerText = `You win!!!`;
			resultForUpdate = 1;
			alert(resultForUpdate);
			cof = 0;
		}


	}
	else{
		alert(`Please choose the cof`);
	}
}






// function RandomCard (min, max) {			  						       //Функция рандомного генерирования карт
// 	return Math.floor (Math.random() * (max - min + 1)) + min;
// }

// function calculateSummScore(summScore, score){								//Функция расчета суммы очков
// 	return summScore += score;
// }

// function play(){															//Основная функция игры
// 	var advantagesOfCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "В", "Д", "К", "Т"]; //Массив достоинства карт
// 	var suitCards 		  = ["\u2660", "\u2663", "\u2666", "\u2665"];	    //Массив мастей карт
// 	var pointsCard		  = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11]; 	    //Массив очков карт
// 	var playerSuitIndex   = 0;												//Индекс мастей игрока
// 	var playerValueIndex  = 0;												//Индекс достоинства игрока
// 	var botSuitIndex      = 0;												//Индекс мастей бота
// 	var botValueIndex	  = 0;												//Индекс достоинства бота
// 	var playerScore		  = 0;												//Сумма очков игрока
// 	var botScore		  = 0;												//Сумма очков бота
// 	var playerCardLine	  = " Ваши карты: ";								//Строка для вывода карт игрока
// 	var botCardLine		  = "Карты компьютера: ";							//Строка для вывода карт бота
// 	var cardDecks		  = [];												//Итоговая колода карт
// 	for (var i=0; i<4; i++) {												//Заполнение колоды карт
// 		cardDecks[i] = [];
// 		for (var j=0; j<9; j++) {
// 			cardDecks[i][j] = {
// 				dignity : advantagesOfCards[j] + suitCards[i],				//Достоинство карты
// 				score : pointsCard[j],										//Очки карты
// 				using : 1													//Использование карты
// 			}
// 		}
// 	}
	
// 	var exitFlag		  = true;											//Флаг выхода из игры	
	
// 	while (exitFlag) {														//Цикл игры
// 		playerSuitIndex   = RandomCard (0, 3);								//Рандомное заполнение индекса масти у игрока
// 		playerValueIndex  = RandomCard (0, 8);								//Рандомное Заполнение индекса достоинства у игрока
		
// 		debugger;
// 		while (cardDecks[playerSuitIndex][playerValueIndex].using === 0) {	//Проверка, не использовалась ли карта
// 			playerSuitIndex   = RandomCard (0, 3);							//Рандомное заполнение индекса масти у игрока
// 			playerValueIndex  = RandomCard (0, 8);							//Рандомное Заполнение индекса достоинства у игрока
// 		}
// 		cardDecks[playerSuitIndex][playerValueIndex].using = 0;				//Карта используется
		
// 		botSuitIndex   = RandomCard (0, 3);									//Рандомное заполнение индекса масти у бота
// 		botValueIndex  = RandomCard (0, 8);									//Рандомное Заполнение индекса достоинства у бота
		
// 		while (cardDecks[botSuitIndex][botValueIndex].using === 0) {		//Проверка, не использовалась ли карта
// 			botSuitIndex   = RandomCard (0, 3);								//Рандомное заполнение индекса масти у бота
// 			botValueIndex  = RandomCard (0, 8);								//Рандомное Заполнение индекса достоинства у бота
// 		}
// 		cardDecks[botSuitIndex][botValueIndex].using = 0;					//Карта используется
// 		playerCardLine = playerCardLine + cardDecks[playerSuitIndex][playerValueIndex].dignity;
		
// 		playerScore = calculateSummScore (playerScore, cardDecks[playerSuitIndex][playerValueIndex].score);//расчет суммы игрока
// 		botScore 	= calculateSummScore (botScore, cardDecks[botSuitIndex][botValueIndex].score);//расчет суммы бота
		
// 		alert (playerCardLine + " Ваши очки " + playerScore);				//Вывод строки карт игрока
// 		botCardLine += cardDecks[botSuitIndex][botValueIndex].dignity;		//Вывод строки карт бота
		
		
		
// 		if (playerScore == 21){												//Если у игрока 21
// 			if (botScore == 21){											//Если у игрока и бота 21
// 				alert ("Ничья! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 				break;
// 			}
// 			alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 			break;
// 		}		
		
// 		if (playerScore > 21){												//Если у игрока перебор
// 			if (botScore == 21){											//И у бота 21
// 				alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 				break;
// 			}
			
// 			if (botScore > 21){												// И у бота перебор
// 				alert ("Ничья! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 				break;
// 			}
			
// 			alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 			break;
// 		}
		
// 		if (playerScore < 21){												//Если меньше 21 у игрока
// 			if (botScore == 21){											//И у бота 21
// 				alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 				break;
// 			}
			
// 			if (botScore > 21){												//И у бота перебор	
// 				alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 				break;
// 			}
			
// 			exitFlag = confirm ("Желаете взять еще карту?");				//Спросить, нужно ли еще
// 			if (!exitFlag){													//Если нет
// 				while (botScore <= 19){										//Бот набирает карты
// 					botSuitIndex   = RandomCard (0, 3);						//Рандомное заполнение индекса масти у бота
// 					botValueIndex  = RandomCard (0, 8);						//Рандомное Заполнение индекса достоинства у бота
		
// 					while (cardDecks[botSuitIndex][botValueIndex].using == 0) {	//Проверка, не использовалась ли карта
// 						botSuitIndex   = RandomCard (0, 3);					//Рандомное заполнение индекса масти у бота
// 						botValueIndex  = RandomCard (0, 8);					//Рандомное Заполнение индекса достоинства у бота
// 					}
					
// 					cardDecks[botSuitIndex][botValueIndex].using = 0;		//Карта используется
// 					botCardLine += cardDecks[botSuitIndex][botValueIndex].dignity;//Вывод строки карт бота
// 					botScore 	= calculateSummScore (botScore, cardDecks[botSuitIndex][botValueIndex].score);//расчет суммы бота
// 				}
				
// 				if (botScore == 21){										//И у бота 21
// 					alert ("Вы проиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 					break;
// 				}
				
// 				if (botScore > 21){											//И у бота перебор	
// 					alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 					break;
// 				}
				
// 				if (playerScore > botScore) {
// 					alert ("Вы выиграли! Ваша сумма очков " + playerScore + "\n" + botCardLine + "Количество очков компьютера " + botScore);
// 					break;
// 				}
// 			}
// 		}
// 	}
// }

