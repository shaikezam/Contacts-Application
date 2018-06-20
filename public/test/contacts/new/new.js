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
    title: "Integration test for create new contact",
    onStart: function () {
        console.log("***TESTS STARTED***");
    },
    onFinish: function () {
        console.log("***TESTS FINISHED***");
    }
});

preem.testModule("I was able to load the application and load new contact form", function (beforeEach, when, then) {

    when().iCanSeeElement({
        el: function (app) {
            return app.document.getElementById('welcome-panel');
        }
    }, "When: I can see the main panel", "Can't see the main panel");

    then().iCanSeeElement({
        el: {
            class: 'add-new-contact',
            tag: 'a'
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "Then: I click the add new contact button", "Can't click on new contact button");
});

preem.testModule("I was able to add fields to new contact form", function (beforeEach, when, then) {

    let formData = ["John", "Doe", "jd@test-company.com", "male", "38 Sample Street", "10.05.1977"],
            ids = ["contact-first-name", "contact-last-name", "contact-email", "contact-gender", "contact-address", "contact-birthday"],
            messages = ["first name", "last name", "email", "gender", "address", "birthday"];

    for (let i = 0; i < formData.length; i++) {
        when().iCanSeeElement({
            el: function (app) {
                return app.document.getElementById(ids[i]);
            },
            action: Preem.CONSTANTS.ACTIONS.CLICK
        }, "When: I can see the " + messages[i] + " input field", "Can't see the " + messages[i] + " input field");

        then().iCanSeeElement({
            el: function (app) {
                return app.document.getElementById(ids[i]);
            },
            action: Preem.CONSTANTS.ACTIONS.TYPE,
            text: formData[i]
        }, "Then: I add " + messages[i] + ": " + formData[i], "Can't add first name");
    }

    when().iCanSeeElement({
        el: {
            id: "create-new-contact"
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "Then: I click the create button", "Can't click the create button");

});

preem.testModule("Test that I added new contact", function (beforeEach, when, then) {
    when().iCanSeeElement({
        el: function (app) {
            return app.document.getElementById('welcome-panel');
        }
    }, "When: I can see the main panel", "Can't see the main panel");

    then().iCanSeeElement({
        el: function(app) {
            return app.$('#contacts-list')[0]
        },
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, "Then: I click the add new contact button", "Can't click on new contact button");
    
    then().iCanSeeElement({
        el: function(app) {
            if(app.$('a:contains("24")').length === 1) {
                return app.$('a:contains("24")')[0];
            }
            return false;
        },
    }, "Then: I found the enw element (#24)", "Can't found the enw element (#24)");

});

preem.start();