require('es5-shim')
require('es5-shim/es5-sham')

var brofist = require('brofist')
var reporter = require('brofist-tap')
var specs = require('./specs')

brofist.run(specs, reporter())