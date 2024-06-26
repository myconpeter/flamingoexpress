const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const UserSchema  = new mongoose.Schema({

fullname :{
      type  : String,
      required : true
  } ,
  username :{
    type  : String,
    required : true
} ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,

refcode :{
    type  : String,
} ,

secret :{
    type  : String,
    required : true
} ,

telephone :{
    type  : Number,
    required : true
} ,

totalAmount: {
     type: Number, 
     default: 0
     },

currentInvestment: { 
    type: Number,
     default: 0 
    },

investmentReturn: { 
    type: Number,
        default: 0 
    },

withdrawAmount: { 
    type: Number,
     default: 0 
    },


recievedAmount: { 
        type: Number,
         default: 0 
        },
    
isInvested: {
    type :Boolean,
    default : false
},

refCodeBonus: {
    type :Boolean,
    default : false
},

refCodeAmount: {
    type :Number,
    default : 0
},

isReffered: {
    type :Boolean,
    default : false
},

investPlans: {
    type :String,
},

investedDate: {
    type: Date,
},

investedMatureDate: {
    type: Date,
},

isWithdrawable: {
    type: Boolean,
    default : false
},

date :{
    type : Date,
    default :Date.now()
}


});




const User= mongoose.model('User' ,UserSchema);

module.exports = User;