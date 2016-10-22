var Document = require('camo').Document
var EmbeddedDocument = require('camo').EmbeddedDocument

class EnumValue extends EmbeddedDocument {
  constructor() {
    super()

    this.name = String
    this.value = Number
  }
}

class EnumList extends Document {
  constructor() {
    super()

    this.name = String
    this.list = [EnumValue]
    this.description = String
  }
}

var enumValue1 = EnumValue.create({
  name: "MIN_CELL_CONF",
  value: 0
})

var enumValue2 = EnumValue.create({
  name: "DEF_CELL_CONF",
  value: 5
})

var enumValue3 = EnumValue.create({
  name: "MAX_CELL_CONF",
  value: 10
})


var enumList = EnumList.create({
  name: "ENUM_CELL_CONF",
  description: "...",
  list: [enumValue1, enumValue2, enumValue3]
})

enumList.save().then(function() {
    console.log('enumList saved!');
});