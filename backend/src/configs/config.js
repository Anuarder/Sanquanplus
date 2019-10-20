module.exports = {
    port: process.env.PORT || 3000,
    database_url: "mongodb://localhost/sanquanplus",
    secret: process.env.SECRET ||'superSecret',
}