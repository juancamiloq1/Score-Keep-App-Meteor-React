import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup( () => {
	class Person {
		constructor(name = 'Anonymous', age = 0) {
				this.name = name;
				this.age = age;
		}
		getGreeting(){
				return `Hola! Soy ${this.name}.`;
		}
		getPersonDescription(){
				return `Andrew tiene ${this.age} años.`;
		}
	}
	class Employee extends Person{
		constructor( name, age, title){
				super(name, age);
				this.title = title;
		}
		getGreeting(){
			if (this.title){
				return `Hola! Soy ${this.name}. Trabajo como ${this.title}.`
			} else {
				return super.getGreeting();
			}
		}
		hasJob(){
			return !!this.title;
		}
	}

	class Programmer extends Person{
		constructor( name, age, preferredLanguage = 'assembly'){
			super(name, age);
			this.preferredLanguage = preferredLanguage;
		}
		getGreeting(){
			return `Hola! Soy ${this.name}. Soy desarrollador de ${this.preferredLanguage}.`;
		}
	}

	let userOne = new Programmer('Juancha', 31, 'JavaScript');
	console.log(userOne.getGreeting());

});