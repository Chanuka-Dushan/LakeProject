const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LostNFoundSchema = new Schema(
  {
    userName: { type: Schema.Types.ObjectId, ref: "Customer", required: true },

    email: { type: String, required: true },

    contactNumber: { type: Number, default: 0 },

    foundItemsCategory: {
      type: String,
      enum: ["Sport", "Accessories"],
      required: true,
    },

    foundItem: { type: String, required: true },

    foundItemPlace: { type: String, required: true },

    isFound: { type: Boolean, default: false },

    founder: { type: Schema.Types.ObjectId, ref: "Customer"},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LostNFound", LostNFoundSchema);
