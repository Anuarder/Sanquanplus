const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const categorySchema = new Schema(
    {
        name: {
            ru: String,
            en: String
        },
        is_hidden: Boolean,
    },
    {
        collection: "categories"
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Category", categorySchema);