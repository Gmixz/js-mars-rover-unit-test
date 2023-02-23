const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

//TEST 1
describe("Command class", () => {
  it("throws error if command type is NOT passed into constructor as the first parameter", () => {
    expect( () => { new Command();}).toThrow(new Error('Command type required.'));
  });
//TEST2
 it('constructor sets command type', () => {
   const test = new Command('test1', null);
    expect(test.commandType).toEqual('test1');
  });
//TEST3
 it('constructor sets a value passed in as the 2nd argument', () => {
   const test2 = new Command('test1','test2');
expect(test2.value).toEqual('test2');
  });
});

