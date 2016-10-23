
mondgoDB setup
 - bin
   - chmod a-x mongo-start
 - data
   - db
 - log

mongo-start
"./mongod --directoryperdb --dbpath d:/mongodb/Server/3.2/data/db --logpath d:/mongodb/Server/3.2/log/mongodb.log --logappend"

Document Modeling > Object Modeling > Target System
(document instance) > (object instane) > (system instance)

How to model a system with Object data {parameters, counters, alarms}
How to model a object with Docuemnt schema {MetaClass, MetaData, Parameter, Relation}

Main document > sub-document > sub-document
                a sub-document can be EmbeddedDocument or another sub-document 

