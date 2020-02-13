let db = []

class WeKnowWho {

    constructor() {

    }
    add_acct(userName, contact) {
        let rec = {}
        rec.username = userName
        rec.contact = contact
        db.push(rec)
    }
    get_first() {
        return db[0]
    }
    count() {
        return db.length
    }
    listAll() {
        return db
    }
}



module.exports = WeKnowWho;