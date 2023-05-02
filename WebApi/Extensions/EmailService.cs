using MimeKit;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using System.Net.Mail;
using System;
using SmtpClient = System.Net.Mail.SmtpClient;
using System.Net;

namespace SocialApp.Services
{
    public static class EmailService
    {
        public static string SendMail(string toMail)
        {
            MailAddress from = new MailAddress("egordedikovrvdkr@mail.ru", "FalikMasters");
            MailAddress to = new MailAddress(toMail);
            MailMessage m = new MailMessage(from, to);
            string parol = string.Empty;
            for (int i = 0; i < 4; i++)
            {
                Random random = new Random();
                parol += random.Next(0, 9).ToString();

            }
            m.Subject = "Код Подтверждения";
            m.Body = parol;
            m.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.mail.ru", 587);
            smtp.Credentials = new NetworkCredential("egordedikovrvdkr@mail.ru", "D68gZLzywhCYsYmbXU6W");
            smtp.EnableSsl = true;
            smtp.Send(m);
            return parol;
        }
    }
}