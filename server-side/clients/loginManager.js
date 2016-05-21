var seatService = require('../seats').services;

var loginManager = {
    
    load : function(callback) {
        var loginView = {
            firstname: "",
            lastname: "",
            seatNumber: ""
        }
        return loginView;
    },
    login : function(req, callback) { 
        console.log("from loginManager: " + req);
        var loginForm = {
          seat: {},
          links: [
            {
                rel: "Continue",
                herf: "/clients/home/"
            }
          ]
        };
        seatService.getSeatByPosition(req.body.position, function(err, result) {
            if(!err) {
                console.log("from loginManager: " + result);
                loginForm.seat = result;
                callback(null, loginForm);
            } else {
                console.log("from loginManager: " + err);
                callback(err, null);
            }
        });
        
    }
};

module.exports = loginManager;