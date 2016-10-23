var Document = require('camo').Document
var EmbeddedDocument = require('camo').EmbeddedDocument
var MetaData = require('./metadata').Metadata
var MetaClass = require('./metadata').MetaClass

class ParamValue extends EmbeddedDocument {
  constructor() {
    super()

    this.defaultValue = String
    this.minValue = String
    this.maxValue = String
    this.metaClass = MetaClass
    this.defaultRef = MetaData
    this.minRef = MetaData
    this.maxRef = MetaData
  }
}
class Parameter extends Document {
  constructor() {
    super()

    this.name = String
    this.description = String
    this.value = ParamValue
    this.parentName = String
  }
}

class Relation extends Document {
  constructor() {
    super()

    this.name = String
    this.description = String
    this.attrList = [Parameter]
  }
}

var pname = "CellParam"
var cellParam = Parameter.create({
  name: pname,
  value: 999,
  description: "...",
  parentName: "CellConf"
})
var cellConf = Relation.create({
  name: "CellConf",
  description: "...",
  attrList: [cellParam]
})

cellParam.save().then(function() {
    console.log('cellParam saved!')
    cellConf.save().then(function() {
      console.log('cellConf saved!')
    })
})