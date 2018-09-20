import * as nodeMailer from 'nodemailer';
import * as path from 'path';
import * as hbs from 'nodemailer-express-handlebars';


export const transport = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "72d0eccbcbccfe",
    pass: "5381341a3b5cda"
  }
})

transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
}));