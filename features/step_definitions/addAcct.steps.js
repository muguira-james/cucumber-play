const assert = require('assert')
const { Before, Given, When, Then } = require("cucumber");
const WeKnowWho = require("../../weknowwho")

let weknowwho;
let aName = "James"
let aContact = "851-0569"
Given('we have a handle to the WeKnowWho func and db', function () {
    weknowwho = new WeKnowWho()
});

When('we put user name and contact in', function () {
    weknowwho.add_acct(aName, aContact)
});

Then('we should be able to find them in the db', function () {
    let rec = weknowwho.get_first()

    assert.equal(rec.username, aName)
    assert.equal(rec.contact, aContact)
});

When('we add a second user name and contact into addAcct', function () {
    weknowwho.add_acct("Will", "851-3264")
    
  });


  Then('should be {int} entries in db', function (int) {
    let count = weknowwho.count()

    assert.equal(count, 2)
  });

