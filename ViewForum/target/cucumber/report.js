$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/ViewForum/ViewForum/src/test/java/ViewForum/1_COMMUNITY-5.feature");
formatter.feature({
  "line": 3,
  "name": "Forum",
  "description": "",
  "id": "forum",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-814"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-5"
    }
  ]
});
formatter.before({
  "duration": 17366204000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Tests As a user I want to be able to navigate the forum"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Acceptance Criteria :"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "## create a navigation bar with the following functions"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#a) Home ( landing page )"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#b) Following or Subscription  (Showing categories or threads subscribed to)"
    },
    {
      "line": 14,
      "value": "#"
    },
    {
      "line": 15,
      "value": "#c) Button to initiate a thread or a discussion"
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "#d) Category ie Business , Science , Technology , Loans \u0026 Grants , Scholarship , health etc"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#e) Provide Filter : by category , topics posted ,  popular post"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 21,
      "value": "#2.Forum must have rule to promote healthy conversation the following forum rules should be set"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#* No Spam / Advertising / Self-promote in the *forum*"
    },
    {
      "line": 24,
      "value": "#* Do not post copyright-infringing material"
    },
    {
      "line": 25,
      "value": "#* Do not post “offensive” posts, links or images"
    },
    {
      "line": 26,
      "value": "#* Do not cross post questions"
    },
    {
      "line": 27,
      "value": "#* Remain respectful of other members at all times"
    }
  ],
  "line": 29,
  "name": "User viewing and interacting with posts",
  "description": "",
  "id": "forum;user-viewing-and-interacting-with-posts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TEST_COMMUNITY-850"
    },
    {
      "line": 28,
      "name": "@REQ_COMMUNITY-799"
    },
    {
      "line": 28,
      "name": "@TESTSET_COMMUNITY-811"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user navigates to the forum",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User should see all the posts",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user should be able to vote or comment on a post",
  "keyword": "And "
});
formatter.match({
  "location": "ViewPostsSteps.user_navigates_to_the_forum()"
});
formatter.result({
  "duration": 2924045000,
  "status": "passed"
});
formatter.match({
  "location": "ViewPostsSteps.user_should_see_all_the_posts()"
});
formatter.result({
  "duration": 35279300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[http://20.52.44.20/partnerships]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.ViewPostsSteps.user_should_see_all_the_posts(ViewPostsSteps.java:49)\r\n\tat ✽.Then User should see all the posts(F:/ViewForum/ViewForum/src/test/java/ViewForum/1_COMMUNITY-5.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ViewPostsSteps.user_should_be_able_to_vote_or_comment_on_a_post()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1024302700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6APU30H\u0027, ip: \u0027192.168.3.54\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat steps.ViewPostsSteps.end(ViewPostsSteps.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});