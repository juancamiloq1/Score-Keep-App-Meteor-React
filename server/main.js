import {Meteor} from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function() {
  Players.insert(
    {
      name: 'JuanCammmiloQ',
      score: 95
    }
  );
  console.log(Players.find().fetch());
   
});