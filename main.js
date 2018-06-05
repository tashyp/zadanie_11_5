//scripts.js
/*
var person = {
	name: 'Jan',
	sayHello: function() {
		setTimeout(function() {
			console.log('Hello '  + this.name + '!');
        }, 1000);
    }
};
person.sayHello(); // Hello !

var person = {
	name: 'Jan',
	sayHello: function() {
    var self = this;
	setTimeout(function(){
		console.log('Hello '  + self.name + '!');
        }, 1000)
    }
};
person.sayHello() // Hello Jan!
*/
function Button(text) {
	this.text = text;
	function Button(text) {
		this.text = text || 'Hello';
	}
}	
Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}
var btn1 = new Button('Hello!');
btn1.create();