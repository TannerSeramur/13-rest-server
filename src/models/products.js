'use strict';

const schema = require('./products.schema');

class Products {

  constructor() {}

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject); 
  }
  
  post(record) {
    let newRecord = new schema(record); 
    return newRecord.save();
  }

  put(_id, record) {
    schema.update({_id}, {$set:{record}});
    
    return schema.find({_id});
  }

  delete(_id) {
    let id = schema.find(_id);
    sechema.deleteOne(id);
  }

}

module.exports = Products;