const mongoose = require("mongoose");

const codSchema = new mongoose.Schema({
  // resultInfo: {
  //     resultStatus: {
  //         type: String,
  //         required: true
  //     },
  //     resultCode: {
  //         type: String,
  //         required: true
  //     },
  //     resultMsg: {
  //         type: String,
  //         required: true
  //     },
  // },
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  // createdAt: {
  //     type: Date,
  //     default: Date.now
  // }
});

module.exports = mongoose.model("COD", codSchema);
