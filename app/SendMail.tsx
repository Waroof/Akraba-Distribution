import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendMail = async ({ name, company, email, message }: { name: string, company: string, email: string, message: string }) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `New Contact Form Submission - Akraba Distribution`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                <h1 style="color: #333; text-align: center; margin-bottom: 30px;">Akraba Distribution</h1>
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
                    <h2 style="color: #444; margin-bottom: 20px;">New Contact Form Submission</h2>
                    <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                    <div style="margin-top: 20px;">
                        <h3 style="color: #555;">Message:</h3>
                        <p style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">${message}</p>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
                    <p>This email was sent from the Akraba Distribution contact form.</p>
                </div>
            </div>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
};

export default sendMail;



