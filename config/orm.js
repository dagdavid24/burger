var connection = require('./connection');

var orm = {

    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function (tableInput, cols, vals, callback) {
        var queryString = "INSERT INTO " + tableInput + " (" 
        + cols.toString() + ") " + "VALUES (" 
        + vals.map(function(val){return "?"}).toString() + ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

      updateOne: function(tableInput, colName, vals, idColName, id, callback) {
        var queryString = "UPDATE " + tableInput + " SET " + colName + " = " + vals + " WHERE " + idColName + " = " + id + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm