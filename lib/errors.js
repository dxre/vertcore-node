'use strict';

var createError = require('errno').create;

var vertcoreNodeError = createError('vertcoreNodeError');

var RPCError = createError('RPCError', vertcoreNodeError);

module.exports = {
  Error: vertcoreNodeError,
  RPCError: RPCError
};
