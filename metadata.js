var Document = require('camo').Document
var EmbeddedDocument = require('camo').EmbeddedDocument

// define schema
class MetaData extends Document {
  constructor() {
    super()

    this.name = String
    this.description = String
    this.parentName = String
    this.value = Number
    this.customer = MetaData
    this.neType = MetaData
    this.sysType = MetaData
  }
}

class MetaClass extends Document {
  constructor() {
    super()

    this.name = String
    this.description = String
    this.classType = [String]
    this.attrList = [MetaData]
  }
}

// populate data
var m1 = MetaData.create({name: "MIN_CELL_CONF", description:"...", parentName:"ENUM_CELL_CONF", value: 0})
var m2 = MetaData.create({name: "DEF_CELL_CONF", description:"...", parentName:"ENUM_CELL_CONF", value: 5})
var m3 = MetaData.create({name: "MAX_CELL_CONF", description:"...", parentName:"ENUM_CELL_CONF", value: 10})
var enumCellConf = MetaClass.create({
  name: "ENUM_CELL_CONF",
  description: "...",
  attrList: [m1, m2, m3]
})

m1.save().then(function() {
  m2.save().then(function() {
    m3.save().then(function() {
      enumCellConf.save().then(function() {
        console.log('enumCellCOnf saved!')
      })
    })
  })
})

module.exports = {
  MetaClass: MetaClass,
  MetaData:MetaData 
};