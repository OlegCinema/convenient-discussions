module.exports = {
  "source": {
    "include": ["src/js", "src/js/config"],
  },
  "opts": {
    "template": "node_modules/docdash",
    "destination": "docs/",
  },
  "plugins": ["plugins/markdown"],
  "templates": {
    "default": {
      // Template with a changed generation date format compared to docdash (and JSDoc) standard.
      // Needs to be updated if the docdash"s template gets updated.
      "layoutFile": "misc/layout.tmpl",
    },
  },
  "docdash": {
    "search": true,
  },
};
