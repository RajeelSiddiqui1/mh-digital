import mongoose from "mongoose"

const offerSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Offer = mongoose.models.Offer || mongoose.model("Offer", offerSchema);

export default Offer;