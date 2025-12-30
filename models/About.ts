import mongoose from "mongoose"

const aboutSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        imageUrl: {
            type: String,
            required: true
        },
        videoUrl: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const About = mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;