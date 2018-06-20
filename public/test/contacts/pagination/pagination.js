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
    title: "Integration test for pagination in contacts",
    onStart: function () {
        console.log("***TESTS STARTED***");
    },
    onFinish: function () {
        console.log("***TESTS FINISHED***");
    }
});

preem.testModule("I was able to nevigate to pagination page", function (beforeEach, when, then) {

    when().iCanSeeElement({
        el: function (app) {
            return app.document.getElementById('welcome-panel');
        }
    }, "When: I can see the main panel", "Can't see the main panel");
    
    then().iCanSeeElement({
        el: function (app) {
            return app.$('#contacts-pagination')[0];
        }
    }, "Then: I can see the contacts-pagination button", "Can't see on contacts-pagination button");
    
});

preem.testModule("I was able to nevigate to pagination pages by their number", function (beforeEach, when, then) {

    when().iCanSeeElement({
        el: function (app) {
            return app.$('#contacts-pagination')[0];
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "Then: I click the contacts-pagination button", "Can't click on contacts-pagination button");

    for (let i = 2; i < 6; i++) {

        when().iCanSeeElement({
            el: function (app) {
                return app.$('table tr').length === 6;
            }
        }, "When: I can see the rows in the table", "Can't see the rows in the table");

        then().iCanSeeElement({
            el: function (app) {
                if (app.$('a:contains("' + i + '")').length === 2) {
                    return app.$('a:contains("' + i + '")')[1];
                } else if (app.$('a:contains("' + i + '")').length === 1) {
                    return app.$('a:contains("' + i + '")')[0];
                }
                return false;
            },
            action: Preem.CONSTANTS.ACTIONS.CLICK
        }, "Then: I click the next page", "Can't click on the next page button");

    }
});

preem.testModule("I was able to nevigate to pagination pages First and Last", function (beforeEach, when, then) {

    when().iCanSeeElement({
        el: function (app) {
            return app.$('table tr').length === 5;
        }
    }, "When: I can see the rows in the table", "Can't see the rows in the table");

    then().iCanSeeElement({
        el: function (app) {
            if (app.$('a:contains("First")').length === 1) {
                return app.$('a:contains("First")')[0];
            }
            return false;
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "Then: I click the next page", "Can't click on the next page button");
    
    when().iCanSeeElement({
        el: function (app) {
            return app.$('table tr').length === 6;
        }
    }, "When: I can see the rows in the table", "Can't see the rows in the table");

    then().iCanSeeElement({
        el: function (app) {
            if (app.$('a:contains("Last")').length === 1) {
                return app.$('a:contains("Last")')[0];
            }
            return false;
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "Then: I click the next page", "Can't click on the next page button");
});

preem.start();