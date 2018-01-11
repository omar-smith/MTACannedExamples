# MTACannedExamples

## Overview
The purpose of these builds are to show you what can be done in a canned fashion.  These builds can be great learning tools and even jumping off points into other applications on the RHMAP platform.

Keep in mind that builds here, while they are catered for RHMAP, can be spun up locally and ran pretty much anywhere.

## Tools Required
In order to use the examples appropriatly, please have the following installed.
* nvm (or alternative for Windows)
* VSCode 
* Docker running Redis and Mongo


## Directions
For all applications, ensure that you run `npm install` for each subfolder to ensure that you have required libraries installed.

Please ensure that you have `grunt` installed locally: `npm install -g grunt`.

Please ensure that redis and mongo are up and running within docker.  

To start mongo:
```
docker run -p 27017:27017 --name mongo -d mongo
```

To start redis:
```
docker run -p 6379:6379 --name redis -d redis
```

_Keep in mind that **mongo** or **redis** can be restarted by simply typing in the name._
```
docker start mongo (or redis)
```

_If you need to make changes to the parameters associated with the container, you'll need to remove and restart the container with arguments (like above)._
```
docker rm mongo (or redis)
```

## Overviews and Tasks
1. First Express Application
    * Overview
        * Utilize **example_01_express_app**.
        * After `npm` has completed, execute and run the application: `grunt serve`
        * In a separate terminal or using Postman, interact with the cloud application by issuing a `curl localhost:8001/hello`.
            * This should return a JSON response to your caller:
            ```
            {"msg":"Hello World"}
            ```
    * Tasks
        1. Add a new library and endpoint.  Ensure that you can call using the `curl` command.
        2. Ensure that you get a return to your calling application to validate things are working correctly.
2. Debugging Node.js Applications
    * Overview
        * Utilize **example_01_express_app**.
        * There are many alternatives to use for debugging.  In this example, we're going to utilize VSCode for Debugging.
        * A great guide is located here: https://code.visualstudio.com/docs/editor/debugging.
        * Please read and follow instructor for how to use.
    * Tasks
        * Utilizing the built in debugging, choose the debugger icon on the left.  
        * Before starting the build, ensure that **_Launch Example 1_** is selected.  Hit start and the build should start.
        * Set a breakpoint in the code.  Utilizing `curl localhost:8001/hello`, hit one of the endpoints.  VSCode should pause on the breakpoint and require you to continue.
3. Debugging Node.js - Finding the Bugs
    * Overview
        * Utilize **example_02_find_bugs**.
        * There are 3 bugs within the application.  Use the debugger to find them.
        * In order to start the build, use **_Launch Example 2_**
    * Tasks
        * Utilizing the debugging application, attempt to trace and find the bugs.  There are 3 bugs.
            * #1 -- `curl localhost:8001/bug1` should return the following (note that curl defaults to GET):
            ```
            ["1","2","3","4"]
            ```
            * #2 -- `curl localhost:8001/bug2` should return the following:
            ```
            [[1,2,3,4],["hi","there"]]
            ```
            * #3 -- `curl localhost:8001/bug3` should return the following:
            ```
            {"msg":"Hello World"}
            ```
4. Utilizing Unit Tests
    * Overview
        * Utilize **example_03_unit_test**.
        * Shows unit testing, how it's completed and allows student to create unit test themselves.
        * Currently there are 10 unit tests located in test/unit.
        * In order to run tests run `grunt unit` from a terminal of your choosing.
    * Tasks
        1. Create unit tests for endpoint library called `newLibrary`.  Place the unit test file within `./test/unit/test-newLibrary.js`.
        2. Reference `./test/unit/test-hello.js` for how to structure your unit tests.
5.  RESTful Interfaces
    * Overview
        * Utilize **example_04_restful_interface**.
        * Things to keep in mind:
            * GET — retrieve a particular resource’s object or list all objects
            * POST — create a new resource’s object
            * PATCH — make a partial update to a particular resource’s object
            * PUT — completely overwrite a particular resource’s object
            * DELETE — remove a particular resource’s object
    * Tasks
        * Follow the script:
            1. `curl http://localhost:8001/hello` - A GET which will return values associated with the class.
            2. `curl -d '{"val":"2"}' -H "Content-Type: application/json" -X POST localhost:8001/hello` - A POST which allows you to send data in.
                * Run subsequent `curl http://localhost:8001/hello` to validate values are stored.
                * Advised to run more than once to add multiple values.
            3. `curl -X DELETE localhost:8001/hello` - A DELETE which pops off the values at the end of the array.
                * Run subsequent `curl http://localhost:8001/hello` to validate values are removed.
            4. `curl -X PUT localhost:8001/hello` - A PUT which pops overwrites the array for every object..
                * Run subsequent `curl http://localhost:8001/hello` to validate array is empty.
6. Mongo DB Interaction
    * Overview
        * Utilize **example_05_mongo_db**.
    * Tasks
        1. Observe how the adding and reading record works.
            * Add: `curl http://localhost:8001/db/add`
            * Adds canned data to the database running locally.
        2. Utilizing a query tool such as MongoHub (Pre-Compiled: https://mongohub.s3.amazonaws.com/MongoHub.zip), open and query the Mongo DB Container.
            * Default Collection: `FH_LOCAL`
            * Default Table: `myFirstEntity`
        3. Once you have the guid, utilizing your endpoints, read from the database.
            * Read: `curl http://localhost:8001/db/read/<guid>`
        4. Utilzing the documentation, provide endpoints for `update (single field)` and `delete`. 

