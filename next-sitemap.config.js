const siteUrl = "https://jsonplaceholder.typicode.com/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalPaths: async (config) => [
      await config.transform(config, "/comments"),
    ],
    additionalSitemaps:[
      "http://localhost:3000/serversite.xml"
  ]
   
  },
};