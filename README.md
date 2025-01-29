# Node.js Server Crash Bug

This repository demonstrates a common bug in Node.js applications where the server crashes unexpectedly due to an unhandled exception. The bug is caused by a lack of proper error handling in the request handling logic, which leads to the server process exiting prematurely when faced with a large number of concurrent requests.

## Bug Description

The Node.js server crashes unexpectedly after receiving a large number of requests. This is due to an unhandled exception in the request handling logic. The exception occurs when a request processing function throws an error, and there is no error handling mechanism in place to catch and gracefully handle this exception. As a result, the process terminates abruptly, making the server unavailable.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `node bug.js` to start the server.
4. Simulate a large number of requests using tools such as `wrk` or `ab`.
5. Observe the server crashing due to the unhandled exception.

## Bug Solution

The solution involves implementing proper error handling in the request handling logic to catch and gracefully handle exceptions.  This prevents the server from crashing and ensures its continued operation, even under heavy load.

## Solution Code

The `bugSolution.js` file shows the corrected code with error handling implemented.