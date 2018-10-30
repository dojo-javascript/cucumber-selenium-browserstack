exports.config = {
  user: "username",
  key: "automate_accesskey",
  server: "hub-cloud.browserstack.com",

  capabilities: [
    {
      browserName: "chrome"
    }
    // {
    //   os_version: "6.0",
    //   device: "Samsung Galaxy S7",
    //   browserName: "Chrome",
    //   real_mobile: "false"
    // }
    // {
    //   os_version: "8.0",
    //   device: "Google Pixel 2",
    //   real_mobile: "true",
    //   "browserstack.local": "false"
    // }
    // {
    //   os: "OS X",
    //   os_version: "Mojave",
    //   browserName: "Safari",
    //   browser_version: "12.0",
    //   "browserstack.local": "false"
    // }
  ]
};
