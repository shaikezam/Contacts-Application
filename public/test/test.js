"use strict";

let preem = new Preem({
    type: Preem.CONSTANTS.TESTTYPE.SYNC,
    networkManager: {
        appPath: "/",
        data: "data/dataa.json"
    },
    downloadReport: {
        format: Preem.CONSTANTS.DOWNLAODFORMAT.JSON,
        name: "Test123"
    },
    title: "Preem demonstration",
    onStart: function () {
        console.log("***TESTS STARTED***");
    },
    onFinish: function () {
        console.log("***TESTS FINISHED***");
    }
});

preem.testModule("Test contacts list", function (beforeEach, checkIf, when, then) {

    beforeEach(function () {
        console.log("Before each checkIf");
    });

    when().iCanSeeElement({
        el: function (app) {
            return app.document.getElementById('main-panel');
            //return $('#main-panel')[0];
        }
    }, "Can see the main panel", "Can't see the main panel");


    when().iCanSeeElement({
        el: function (app) {
            return app.$('#welcome-panel')[0];
        }
    }, "Can see the welcome panel", "Can't see the welcome panel");

    then().iCanSeeElement({
        el: function (app) {
            return app.$('#contacts-list')[0];
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "can see the main panel", "can't see the main panel");

    when().iCanSeeElement({
        el: {
            //id: "main-panel",
            tag: "div",
            class: "btn btn-primary"
        }

    }, "Can see the main panel", "Can't see the main panel");

    then().iCanSeeElement({
        el: function (app) {
            return app.$('#usr')[0];
        }
    }, 'Can see search contact element', 'Cant see search contact element');
});

preem.testModule("Test contacts pagination", function (beforeEach, checkIf, when, then) {

    when().iCanSeeElement({
        el: function (app) {
            return app.$('#contacts-pagination')[0];
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "When: I click the contacts pagination button", "Can't click the contacts pagination button");

    then().iCanSeeElement({
        el: function (app) {
            return app.$("ul")[0];
        }
    }, "Can see the contacts pagination button", "Can't see the contacts pagination button");
});

preem.start();