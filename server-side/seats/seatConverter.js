var Seat = require('./seatDao');

var SeatConverter = {

	jsonToDao : function(req){
		var seatDao = new Seat();
		initFields.call(this, seatDao, req);
		return seatDao;
	},
	daoToJson : function(seatDao){
		var result = {
			_id : seatDao._id,
			position : seatDao.position,
		 	occuped : seatDao.occuped			
		};
		return result;
	},
	daoListToJson : function(seatListDao) {
		var seatsForm = { seats: [] };
		for (var seat of seatListDao) {
			seatsForm.seats.push(this.daoToJson(seat));	
		}
		return seatsForm;
	},
	
	mergeJsonIntoDao : function(seatDao, req) {
		initFields.call(this, seatDao, req);
		
	},
};

function initFields(seatDao, req) {
		var pos = req.body.position
		seatDao._id = pos.row + pos.column;
		seatDao.position = pos;
		seatDao.occuped = req.body.occuped;
}

module.exports = SeatConverter;