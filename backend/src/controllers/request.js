const nodemailer = require('nodemailer');

module.exports = {
  async sendRequest(req, res) {
    try {
      let transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
          user: "",
          pass: ""
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      let message = {
        from: "",
        to: "",
        subject: req.body.subject,
        text: req.body.message,
        html: `<p>${req.body.message.toString()}</p>`
      };

      await transporter.sendMail(message);

      res.send({
        message: "Message has been sent"
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        err: err
      })
    }
  }
}