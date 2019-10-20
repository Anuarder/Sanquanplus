const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema(
    {
        name: {
            ru: String,
            en: String
        },
        is_hidden: Boolean,
    }
)

const categorySchema = new Schema(
    {
        name: {
            ru: String,
            en: String
        },
        is_hidden: Boolean,
        subcategories: [subcategorySchema]
    },
    {
        collection: "categories"
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Category", categorySchema);