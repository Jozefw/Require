// jquery was already defined for us,but now we have to define what message is('selector')

// we are first defining what the module, first param.  you could also list some dependencies in an array if this module needed, like say jquery

// define default is: define(moduleId, [dependencies, dependencies], function Definition(){});

define('message', function(){
	return "Hello, I must be going...message";
});

