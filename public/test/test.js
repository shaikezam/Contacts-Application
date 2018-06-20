"use strict";

let preem = new Preem({
    type: Preem.CONSTANTS.TESTTYPE.SYNC,
    networkManager: {
        appPath: "/",
        data: "data/data.json"
    },
    downloadReport: {
        format: Preem.CONSTANTS.DOWNLAODFORMAT.XML,
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

preem.testModule("Test contacts list", function (beforeEach, when, then) {

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
            return app.document.getElementsByTagName('b')[0].innerHTML === "AngularJS and Node.js";
            //return $('#main-panel')[0];
        }
    }, "AngularJS and Node.js is written in bold style", "Can't see AngularJS and Node.js text");

    when().iCanSeeElement({
        el: function (app) {
            return app.$('#welcome-panel')[0];
        }
    }, "Can see the welcome panel", "Can't see the welcome panel");

    then().iCanSeeElement({
        /*el: function (app) {
            return app.$('#contacts-list')[0];
        },*/
        el: {
            id: 'contacts-list'
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "can see the main panel", "can't see the main panel");

    then().iCanSeeElement({
        el: function (app) {
            return app.$('#usr')[0];
        }
    }, 'Can see search contact element', 'Cant see search contact element');
});

preem.testModule("Test contacts pagination", function (beforeEach, when, then) {

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

    then().iCanSeeElement({
        el: function (app) {
            return app.document.getElementById('contacts-list');
        },
        action: Preem.CONSTANTS.ACTIONS.MOUSEOVER
    }, "When I blur the contacts list button", "Can't find the contacts list button");
});

preem.start();