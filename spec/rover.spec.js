const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", () => {
// 7 tests here! 
it('constructor sets position and default values for mode and generatorWatts', () => {
  let myRover = new Rover('NORMAL',110); expect(JSON.stringify(myRover)).toEqual(JSON.stringify({position:'NORMAL', mode:'NORMAL', generatorWatts:110}));
  });
//TEST 8
it('response returned by receiveMessage contains name of message', () => {
  let commands = new Command('NORMAL', 110);
  let message = new Message('New Command', commands);
  let rover = new Rover(110);
  let response = rover.receiveMessage(message);
  expect(response.message).toEqual('New Command');
  });
//TEST9  
it('response returned by receiveMessage includes two results if two commands are sent in the message', () => {
  let commands = [new Command ('NORMAL', 110), new Command ('FULL_POWER')];
  let message = new Message('New Command', commands);
  let rover = new Rover(110);
  let response = rover.receiveMessage(message);
  expect (response.results.length).toEqual(2);
  });
//TEST10
it('Responds correctly to status check command', () => {
  let commands = [new Command('STATUS_CHECK')];
  let message = new Message('New Command', commands);
  let rover = new Rover(2000);
  let response = rover.receiveMessage(message);
  expect(response.results.roverStatus).toBeTrue;
  expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
  expect(response.results[0].roverStatus.position).toEqual(2000);
  expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
});
//TEST11 
it('responds correctly to mode change command', () => {
  let commands = [new Command('MOVE', 98382), new Command('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('New Command', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  expect(rover.position).toEqual(98382);
  expect(response.results[1].complete).toEqual('true');
  expect(rover.mode).toEqual('LOW_POWER');
  });
//TEST12
it('responds with false completed value when attempting to move in LOW_POWER mode', () => {
  let commands = [new Command('MOVE', 500), new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE',1000)];
  let message = new Message('New Command', commands);
  let rover = new Rover(1000);
  let response = rover.receiveMessage(message);
  expect(response.results[2].complete).toEqual('false');
  expect(rover.position).toEqual(500);
  });
//TEST13  
it('responds with position for move command', () => {
  let commands = [new Command('MOVE', 1000), new Command('MOVE',9500)];
  let message = new Message('New Command', commands);
  let rover = new Rover(1000);
  let response = rover.receiveMessage(message);
  expect(rover.position).toEqual(9500);
  });
});