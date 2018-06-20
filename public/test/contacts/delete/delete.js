"use strict";

let preem = new Preem({
    networkManager: {
        appPath: "/",
        data: "./data.json"
    },
    downloadReport: {
        format: Preem.CONSTANTS.DOWNLAODFORMAT.JSON,
        name: "Test123"
    },
    title: "Integration test for delete contact",
    onStart: function () {
        console.log("***TESTS STARTED***");
    },
    onFinish: function () {
        console.log("***TESTS FINISHED***");
    }
});

preem.testModule("I was able to search contact names Shay Zambrovski", function (beforeEach, when, then) {

    when().iCanSeeElement({
        el: function (app) {
            return app.document.getElementById('welcome-panel');
        }
    }, "When: I can see the main panel", "Can't see the main panel");

    then().iCanSeeElement({
        el: function (app) {
            return app.$('#contacts-list')[0];
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "Then: I click the add new contact button", "Can't click on new contact button");

    then().iCanSeeElement({
        el: {
            id: "usr"
        },
    }, "Then: I can see the search input", "Can't see the search input");
});

preem.testModule("I was able to delete contact with name Shay Zambrovski", function (beforeEach, when, then) {

    when().iCanSeeElement({
        el: {
            id: "usr"
        },
        action: Preem.CONSTANTS.ACTIONS.TYPE,
        text: "Shay Zambrovski"
    }, "When: I search for contact", "Can't search for contact");

    when().iCanSeeElement({
        el: function (app) {
            return app.$('a:contains("Delete")')[0];
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "When: I click the delete button", "Can't click the delete button");
    
    when().iCanSeeElement({
        el: {
            id: "delete-contact"    
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "When: I click the delete button", "Can't click the delete button");
    
    then().iCanSeeElement({
        el: function (app) {
            return app.document.getElementById('welcome-panel');
        }
    }, "Then: I can see the main panel", "Can't see the main panel");
});

preem.start();