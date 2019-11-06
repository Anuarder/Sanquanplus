const nodemailer = require('nodemailer');

module.exports = {
  async sendRequest(req, res) {
    try {
      const { subject, fullname, email, phone, message, product_name } = req.body;
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

      const text = `
        Имя: ${fullname}\n
        Email: ${email}\n
        Телефон: ${phone}\n
        Сообщение: ${message}\n
      `
      const textWithProduct = `
        Имя: ${fullname}\n
        Email: ${email}\n
        Телефон: ${phone}\n
        Сообщение: ${message}\n
        Продукт: ${product_name}
      `

      const payload = {
        from: "",
        to: "",
        subject: subject
      };

      if(product_name) {
        payload.text = textWithProduct;
        payload.html = textWithProduct
      }else {
        payload.text = text;
        payload.html = text
      }

      await transporter.sendMail(payload);

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