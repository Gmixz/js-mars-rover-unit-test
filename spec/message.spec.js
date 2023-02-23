const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

//TEST 4
describe("Message class", () => {
  it( "throws error if a name is NOT passed into the constructor as the first parameter", () => {
    expect( () => { new Message();}).toThrow(new Error('A name is required.'));
  });
//TEST5
 it('constructor sets name', () => {
   const test = new Message('Test1', null);
   expect(test.name).toEqual('Test1');
  });
//TEST6
 it('contains a commands array passed into the constructor as 2nd argument', () => {
   const test2 = new Message('Test1', [1, 2, 3]);
   expect(test2.commands).toEqual([1, 2, 3]);
  });
});

