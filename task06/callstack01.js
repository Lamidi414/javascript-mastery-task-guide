/**
 * Create Call Stack Execution Diagram for this flow
 * ------------------------------------------------------------------------
 * function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
 */

/*
Call Stack Execution Diagram:

1. Global execution context starts.
   Stack: [Global]

2. f2() is called.
   Stack: [Global, f2]

3. f2() executes (empty) and returns.
   Stack: [Global]

4. f3() is called.
   Stack: [Global, f3]

5. Inside f3(), f1() is called.
   Stack: [Global, f3, f1]

6. f1() executes (empty) and returns.
   Stack: [Global, f3]

7. f3() finishes and returns.
   Stack: [Global]

8. f1() is called directly.
   Stack: [Global, f1]

9. f1() executes (empty) and returns.
   Stack: [Global]

10. Global execution completes.
    Stack: []
*/

function f1() {}

function f2() {}

function f3() {
    f1();
}

f2();
f3();
f1();
