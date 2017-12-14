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

1. First Express Application
    * Overview
        * After `npm` has completed, execute and run the application: `grunt serve`
        * In a separate terminal or using Postman, interact with the cloud application by issuing a `curl localhost:9001/hello`.
            * This should return a JSON response to your caller:
            ```
            {"msg":"Hello World"}
            ```
    * Tasks
        1. Add a new library and endpoint.  Ensure that you can call using the `curl` command.
2. Debugging Node.js Applications
    * Overview
        * There are many alternatives to use for debugging.  In this example, we're going to utilize VSCode for Debugging.
        * A great guide is located here: https://code.visualstudio.com/docs/editor/debugging.
        * Please read and follow instructor for how to use.