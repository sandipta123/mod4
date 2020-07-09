(function(window){
	var hello={};
	var word="Hello";
	hello.speak=function(a) {
		console.log(word+" "+a);
	}
	window.hello=hello;
})(window);