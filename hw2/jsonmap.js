/* Na Kyung Lee, 010-3915-0684, ew1415048nk@gmail.com
문제2: 맵 문자열을 변환하고 출력하는 프로그램*/


String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

function parseData(map_string){

	var mid = map_string.split("\n");
	var mmid = mid[0].split(',');
	var data ="";
	for(var i=1; i<mid.length; i++){
		data = data+mid[i];
	}

	var obj = { "width" : mmid[0], "height" : mmid[1], "data" : data }

	var json_str = JSON.stringify(obj);
	var json_obj = JSON.parse(json_str);
	
	return json_obj;
}

function drawMap(json){
	var arr =[];
	for(var i=0 ; i<json.height ; i++){
		arr[i] = json.data.substr(i*json.width,json.width);
		console.log(arr[i].replaceAll("-"," ")+"\n");
	}
}

var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
var json_data = parseData(map);
drawMap(json_data);
