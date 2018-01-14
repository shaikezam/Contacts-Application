"use strict";

let preem = new Preem({
    type: Preem.CONSTANTS.TESTTYPE.SYNC,
    networkManager: {
        appPath: "/",
        data: "/FourArrow/tests/data/data.json"
    },
    title: "Preem demonstration",
    onStart: function () {
        console.log("***TESTS STARTED***");
    },
    onFinish: function () {
        console.log("***TESTS FINISHED***");
    }
});

preem.testModule("Test sign of players", function (beforeEach, checkIf, when, then) {

    beforeEach(function () {
        console.log("Before each checkIf");
    });

    when().iCanSeeElement({
        id: 'main-panel'
    }, "can see the main panel", "can't see the main panel");

    then().iDoActionOnElement({
        id: 'contacts-list',
        action: Preem.CONSTANTS.ACTIONS.CLICK
    }, 'Click on contacts list link', 'Cant click on contacts list link');

    when().iCanSeeElement({
        id: 'usr'
    }, 'Can see search contact element', 'Cant see search contact element');

    then().iDoActionOnElement({
        id: 'p2',
        action: Preem.CONSTANTS.ACTIONS.TYPE,
        text: 'Player2'
    }, 'Player 2 user name is typed', 'Player 2 user name is typed');

    when().iCanSeeElement({
        id: 'p1-pass'
    }, 'Player 1 password field found', 'Player 1 password field not found');

    then().iDoActionOnElement({
        id: 'p1-pass',
        action: Preem.CONSTANTS.ACTIONS.TYPE,
        text: 'Player1Password'
    }, 'Player 1 password is typed', 'Player 1 password is not typed');

    when().iCanSeeElement({
        id: 'p2-pass'
    }, 'Player 2 password field found', 'Player 2 password field not found');

    then().iDoActionOnElement({
        id: 'p2-pass',
        action: Preem.CONSTANTS.ACTIONS.TYPE,
        text: 'Player2Password'
    }, 'Player 2 password is typed', 'Player 2 password is not typed');

    when().iCanSeeElement({
        id: 'start_game'
    }, 'start game button found', 'start game button not found');

    then().iDoActionOnElement({
        id: 'start_game',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on start game button', "Can't click on start game button");


});

preem.testModule("Test game", function (beforeEach, checkIf, when, then) {

    when().isObject({
        id: 'game-panel',
        property: ':visible'
    }, 'Can see the game board', 'Can not see the game board');

    then().iDoActionOnElement({
        id: '00',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '01',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '00',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '01',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '00',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '01',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '00',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '01',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().iDoActionOnElement({
        id: '01',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on game button', "Can't click on game button");

    then().isElementContainsText({
        id: 'header',
        text: "Player1 is the winner!!!",
    }, "Game is over, player is won", "Game is not over, player is won");
});

preem.testModule("Test fastest game and close it", function (beforeEach, checkIf, when, then) {

    when().isObject({
        id: 'game-panel',
        property: ':visible'
    }, 'Can see the game board', 'Can not see the game board');

    then().iDoActionOnElement({
        id: 'fastets_game',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on fastets game button', "Can't click on fastets game button");

    then().isObject({
        id: 'my-modal',
        property: ':visible'
    }, 'fastets game modal is showed', "fastets game modal is not showed");

    then().isElementTextEquals({
        id: 'modal-title',
        text: "Fastest game",
    }, "fastets game header is 'Fastest game'", "fastets game header is not 'Fastest game'");

    when().iDoActionOnElement({
        id: 'submit-button',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on ok button of fastets game modal', "Can't click on ok button of fastets game modal");

});

preem.testModule("Test top 5 and close it", function (beforeEach, checkIf, when, then) {

    when().isObject({
        id: 'game-panel',
        property: ':visible'
    }, 'Can see the game board', 'Can not see the game board');

    then().iDoActionOnElement({
        id: 'top5',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on top 5 button', "Can't click on top 5 button");

    then().isObject({
        id: 'my-modal',
        property: ':visible'
    }, 'top 5 modal is showed', "top 5 modal is not showed");

    then().isElementTextEquals({
        id: 'modal-title',
        text: "Top 5",
    }, "Top 5 header is 'Top 5'", "Top 5 header is not 'Top 5'");

    when().iDoActionOnElement({
        id: 'submit-button',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on ok button of fastets game modal', "Can't click on ok button of fastets game modal");

});

preem.testModule("Test all games and close it", function (beforeEach, checkIf, when, then) {

    when().isObject({
        id: 'game-panel',
        property: ':visible'
    }, 'Can see the game board', 'Can not see the game board');

    then().iDoActionOnElement({
        id: 'all_games',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on all games button', "Can't click on all games button");

    then().isObject({
        id: 'my-modal',
        property: ':visible'
    }, 'all games modal is showed', "all games modal is not showed");

    then().isElementTextEquals({
        id: 'modal-title',
        text: "All games",
    }, "All games header is 'All games'", "All games header is not 'All games'");

    when().iDoActionOnElement({
        id: 'submit-button',
        action: Preem.CONSTANTS.ACTIONS.CLICK,
    }, 'Click on ok button of fastets game modal', "Can't click on ok button of fastets game modal");

});

preem.start();