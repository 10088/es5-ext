// Return f.call binded to f
// bindCall(f)(args…) =def  f.call(args)

'use strict';

var bind  = Function.prototype.bind
  , call  = Function.prototype.call;

module.exports = function () {
	return bind.apply(call, arguments);
};
