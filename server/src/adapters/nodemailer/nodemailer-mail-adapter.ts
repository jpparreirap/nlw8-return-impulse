import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "770582bf923eab",
      pass: "abf4b7ae9f8134"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    
    async sendMail({ subject, body }: sendMailData){
        await transport.sendMail({
            from:'Equipe Feedget <oi@feedget.com>',
            to: 'João Paulo <emailtempjp@gmail.com>',
            subject,
            html: body,
        });    
    };

}