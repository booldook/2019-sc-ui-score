var arr = [];
var arr2 = new Array();
arr2.length;	// Propertie (객체의 변수는 Propertie)
arr2.push("A");	// Method (객체의 변수는 Method)

console.log(arr2.length);
console.log(arr2);
arr2.push("B");
console.log(arr2.length);
console.log(arr2);

var hongkd = {
	name: "홍길동",
	age: 25,
	gender: "M",
	run: function(){
		return "동에번쩍 서에번쩍";
	}
};
hongkd.age = 27;
console.log(hongkd);
var hongks = {
	name: "홍길순",
	age: 225,
	gender: "F",
	run: function(){
		return "동에번쩍 서에번쩍";
	}
};

//immediately function - 즉시실행함수
(function abc() {
	console.log("ABC!!");
}());

//제대로된 ES5 자바스크립트 객체
var Hong = (function(){
	// Constructor 생성자
	function Hong(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	};
	Hong.prototype.run = function(){
		console.log(this.name + " 이 동에번쩍 서에번쩍");
	};
	return Hong;
}());

var hkd = new Hong("홍길동", 25, "M");
var hks = new Hong("홍길순", 21, "F");
console.log(hkd.name);
console.log(hks.name);
hkd.run();
hks.run();


/* ES6 Class
class Hong2 {
	constructor() {

	}
	fun = () => {

	}
}
*/