var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", {
      title: "MOCK DATA",
      url: {
        users: "/api/users",
        roles: "/api/roles",
        roles_detail: "/api/roles/:id",
        clients: "/api/clients",
        actions: "/api/actions",
        resources: "/api/resources",
        sampleMainMenu: "/api/sample_main_menu",
        sampleRoles: "/api/sample_roles"
      },
  });
});

module.exports = router;
