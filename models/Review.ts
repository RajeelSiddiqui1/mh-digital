import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {

        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        clientEmail: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        clientRole: {
            type: String,
            trim: true,
        },

        company: {
            type: String,
            trim: true,
        },

        profilePic: {
            type: String,
            required: false
        },

        reviewText: {
            type: String,
            required: true,
            minlength: 10,
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },

        isApproved: {
            type: Boolean,
            default: false,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        source: {
            type: String,
            enum: ["Website", "Email", "WhatsApp", "LinkedIn"],
            default: "Website",
        },
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
