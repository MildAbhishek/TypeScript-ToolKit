var RoomNo;
(function (RoomNo) {
    RoomNo[RoomNo["AISLE"] = 1001] = "AISLE";
    RoomNo[RoomNo["MIDDLE"] = 1002] = "MIDDLE";
    RoomNo[RoomNo["WINDOW"] = 1003] = "WINDOW";
})(RoomNo || (RoomNo = {}));
var roomNo = RoomNo.AISLE;
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice["WINDOW"] = "window";
})(SeatChoice || (SeatChoice = {}));
var seat = "aisle" /* SeatChoices.AISLE */;
