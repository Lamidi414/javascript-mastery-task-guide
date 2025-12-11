/** 
 * Create Call Stack Execution Diagram for this flow
 * ------------------------------------------------------------------------
 *  function f1() {}
    function f2() {
        f1();
    }
    f2();

/*
Call Stack Execution Diagram:

1. Global execution context starts.
  Stack: [Global]

2. f2() is called.
  Stack: [Global, f2]

3. Inside f2(), f1() is called.
  Stack: [Global, f2, f1]

4. f1() executes (empty function) and returns.
  Stack: [Global, f2]

5. f2() finishes and returns.
  Stack: [Global]

6. Global execution completes.
   Stack: []
*/

function f1() {}

function f2() {
    f1();
}

f2();
