enum RoomNo {
    AISLE = 1001,
    MIDDLE, // 1002
    WINDOW, // 1003
}
const roomNo = RoomNo.AISLE

enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window',
}

// adding cont means it will generate clean js code
const enum SeatChoices {
    AISLE = 'aisle',
    MIDDLE = 1002,
    WINDOW, // 1003
}

const seat = SeatChoices.AISLE