import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    position: {
      type: String,
      enum: ["Manager", "TeamLead", "Employee", "Boss"],
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    technologies: [
      {
        type: String,
        trim: true,
      },
    ],

    socialMediaLinks: [
      {
        platform: {
          type: String,
          enum: ["LinkedIn", "GitHub", "Twitter", "Facebook", "Instagram"],
        },
        url: {
          type: String,
          trim: true,
        },
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// ✅ Safe model export for Next.js
const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
