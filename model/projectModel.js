const mongoose = require("mongoose");
const slugify = require("slugify");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  tags: [
    {
      name: String,
      class: String,
    },
  ],
  description: String,
  image: String,
  githubUrl: {
    type: String,
    trim: true,
  },
  imageSliders: [String],
  relatedProjects: [
    {
      name: String,
      link: String,
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  updatedOn: {
    type: Date,
    default: Date.now(),
  },

  status: {
    type: String,
    default: "active",
    enum: ["active", "inactive"],
  },
  image: {
    type: String,
  },
});

projectSchema.pre("save", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
  });
  this.image = slugify(this.name, {
    lower: true,
  });

  next();
});

projectSchema.pre("save", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
  });
  next();
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
