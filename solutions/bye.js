(function(window){
	var bye={};
	var word="good bye";
	bye.speak=function(a){
		console.log(word+" "+a);
	}
	window.bye=bye;
})(window);