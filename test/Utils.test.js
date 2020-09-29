// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {compareNumbers} from '../mathUtils.js';

const test = QUnit.test;

test('if input guess is 5 and correctNumber is 1 it should return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5,1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if input guess is 5 and correctNumber is 10 it should return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5,10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if input guess is 5 and correctNumber is 5 it should return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5,5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

