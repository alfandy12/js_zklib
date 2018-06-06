exports.Commands = Object.freeze({
  CONNECT: 1000,
  EXIT: 1001,
  ENABLEDEVICE: 1002,
  DISABLEDEVICE: 1003,
  ACK_OK: 2000,
  ACK_ERROR: 2001,
  ACK_DATA: 2002,
  PREPARE_DATA: 1500,
  DATA: 1501,
  USER_WRQ: 8,
  USERTEMP_RRQ: 9,
  ATTLOG_RRQ: 13,
  CLEAR_DATA: 14,
  CLEAR_ATTLOG: 15,
  DELETE_USER: 18,
  WRITE_LCD: 66,
  GET_TIME: 201,
  SET_TIME: 202,
  VERSION: 1100,
  DEVICE: 11,
  CLEAR_ADMIN: 20,
  START_ENROLL: 61 //,
  //SET_USER: 8
});

exports.Levels = Object.freeze({
  USER: 0,
  ADMIN: 14
});

exports.States = Object.freeze({
  FIRST_PACKET: 1,
  PACKET: 2,
  FINISHED: 3
});

exports.USHRT_MAX = 65535;