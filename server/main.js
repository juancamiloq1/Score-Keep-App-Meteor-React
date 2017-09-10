import {Meteor} from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function() {
  let numbers = [9 , 99 , 19 , 34, 45];
  let newNumbers = numbers.map( (number) => number + 1);
    console.log(newNumbers);
});