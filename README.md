# How to run vouchercodes_test: 

## Step 1: 
Use `git clone https://github.com/BondarenkoAlexandra/vouchercodes_test.git` to clone project to your local machine.

## Step 2:
To install the dependencies use `npm i`.

## Step 3: 
Then `npm run test` to start the test in the command line.


**Description:**
Test script contains one test suite "Search offers" with two test cases "Search restaurant in London" and "Get student sign-in page".

"Search restaurant in London" test case was designed with assumption that the expected result is "there are no results" with this search criteria.

*Note: I assume that something wrong there as I'm not able to get results for each combination of search input. Possible steps to investigate: check the DB to make sure that results "exist/don't exist" for the given search criteria.*

"Get student sign-in page" test case will fail on purpose. 
+ The video record of fail will be stored in the video folder of cypress project.
+ The screenshot of fail will be stored in the screenshot folder of cypress project.
