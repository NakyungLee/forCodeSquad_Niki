/* Na Kyung Lee, 010-3915-0684, ew1415048nk@gmail.com
문제1: 1240 나라*/
function to1240(num){ 

	var divByFour = num/4; 
	var modByFour = num%4;
	var lastNum = 0;
	
	switch (modByFour){	// 1240나라의 1의 자리 숫자를 만든다.
		case 1 : lastNum = 1;
			break;
		case 2 : lastNum = 2;
			break;
		case 3 : lastNum = 4;
			break;
		case 0 : lastNum = 0;
			break;
	}

	var firstNum_str = parseInt(divByFour).toString(); //1의자리 숫자를 제외한 나머지 숫자를 만든다.
	var lastNum_str = lastNum.toString();

	return firstNum_str.concat(lastNum_str); //string 합쳐 리턴
}

function toDec(str){
	var firstNum = parseInt(str.substring(0,str.length-1))*4; // 1의자리를 제외한 나머지를 숫자로 전환하여 4를 곱함
	var lastNum = parseInt(str. substr(str.length-1,1)); // 1의자리를 숫자로 전환

	if(lastNum == 4){ // 1,2,0의 경우 10진수와 1240나라에서의 숫자가 같음. 1240나라의 4의 경우만 10진수로 변화할 때 3으로 바꿔주어야 함.
		lastNum = 3;									
	} 										
	
	return (firstNum+lastNum);

}


for(var i = 1; i < 65; i++){ //test
	
		console.log("num",i);
		console.log("to1240",to1240(i));
		console.log("toDec",toDec(to1240(i)))
		console.log("---------")

}




