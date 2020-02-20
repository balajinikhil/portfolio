exports.aboutMe = (req, res, next) => {
  res.status(200).render("about", {
    title: "About Me"
  });
};

exports.projects = (req, res, next) => {
  res.status(200).render("projects", {
    title: "My Projects"
  });
};
exports.resume = (req, res, next) => {
  res.status(200).render("resume", {
    title: "My Resume"
  });
};
exports.contactMe = (req, res, next) => {
  res.status(200).render("contact", {
    title: "Contact Me"
  });
};
