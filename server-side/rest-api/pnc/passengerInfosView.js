var DateFormat = require('dateformat');
DateFormat.masks.frenchDate = 'dd-mm-yyyy';

var PassengerView = function (passenger) {
    console.log(passenger.personnalInfos.birthdate);
    this.personnalInfos = {};
    this.personnalInfos.title = passenger.personnalInfos.title;
    this.personnalInfos.firstname = passenger.personnalInfos.firstname;
    this.personnalInfos.lastname = passenger.personnalInfos.lastname;
    this.personnalInfos.birthdate = DateFormat(passenger.personnalInfos.birthdate, "frenchDate");
    /*
    this.meals = [];
    for(var meal of passenger.meals) {
        var mealView = {};
        mealView.label = meal.label;
        this.meals.push(mealView);
    }
    */
    this.seat = {};
    this.seat.label = "Siège " + passenger.seat;
    this.seat.fareClass = passenger.seat.fareClass;
    this.seat.link = {
        label: "Détails",
        rel: "details",
        href: "/pnc/seats/" + passenger.seat
    };
    if(passenger.orders && passenger.orders.length > 0) {
        this.order = {};
        this.order.label = "Commandes";
        this.order.link = {
            label: "Détails",
            rel: "details",
            href: "/pnc/bookings/" + passenger._id
        };
    }
};

module.exports = PassengerView;
