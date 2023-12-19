"use strict";
const slugify = require("slugify");
// better for arabic seo, instaed of strapi plugin

function handler(event) {
  const { data } = event.params;
  if (data.locale == "en") {
    if (data.title) {
      let url = slugify(data.title, { lower: true });
      data.url = slugify(url.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""), {
        lower: true,
      });
    }
  } else {
    if (data.title) {
      let url = data.title;
      url = url.replace(/\s+/g, "-");
      url = url.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
      data.url = url;
    }
  }
}

module.exports = {
  beforeCreate(event) {
    handler(event);
  },
  beforeUpdate(event) {
    handler(event);
  },
};
