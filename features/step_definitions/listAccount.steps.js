

const assert = require('assert')
const { Before, Given, When, Then } = require("cucumber");
const WeKnowWho = require("../../weknowwho")

let weknowwho;
let aName = "Fred"
let aContact = "851-0981"

Given('we have a db', function () {
    weknowwho = new WeKnowWho()
});


When('I call list_account', function () {
    weknowwho.add_acct(aName, aContact)
});

Then('I see it', function () {
    let db = weknowwho.listAll()

    assert.equal(db.length, 3)
    // console.log("db 0==>", db)
});

