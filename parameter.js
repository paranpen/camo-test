var Document = require('camo').Document
var EmbeddedDocument = require('camo').EmbeddedDocument

class Metadata extends EmbeddedDocument {
  constructor() {
    super()

    this.default = String
    this.min = String
    this.max = String
    this.enum = [String]
  }
}

class Parameter extends Document {
  constructor() {
    super()

    this.name = String
    this.value = Number
    this.description = String
    this.metadata = Metadata
  }
}

var enumList = ["MIN_CELL_CONF","DEF_CELL_CONF","MAX_CELL_CONF"] 
var metadata = Metadata.create({
  default: "DEF_CELL_CONF",
  min: "MIN_CELL_CONF",
  max: "MAX_CELL_CONF",
  enum: enumList
})
var pname = "CellParam"
var cellParam = Parameter.create({
  name: pname,
  value: 999,
  description: "abcdefg",
  metadata: metadata
})
cellParam.save().then(function() {
    console.log('cellParam saved!');
});