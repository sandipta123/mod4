(function(window){
	var a=["yaakov","john","jen","paul","frank","larry","paula","laura","jim"];
    for (var i=0;i<a.length;i++){	
     var fn=((a[i]).charAt(0));
     if(fn=='j'){
   	 window.bye.speak(a[i]);
   }
    else{
   	window.hello.speak(a[i]);
   }
}
})(window);

