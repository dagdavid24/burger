var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    updateOne: function(eatenID, callback) {
        orm.updateOne("burgers", "devoured", 1, "id", eatenID, function(res) {
            callback(res);
        });
    },

    insertOne: function(val, callback) {
        orm.insertOne("burgers", "burgerName", val, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;