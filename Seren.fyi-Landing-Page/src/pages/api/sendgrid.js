import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(
  "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"
);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: req.body.email, // Your email where you'll receive emails
      from: {
        email: "benny@seren.fyi",
        name: "Benny Chinvanich"
      },
      subject: req.body.subject,
      html: `
      <p>Hi there,</p>
      <p>I'm Benny Chinvanich, Lead Tech and Operations at Seren.fyi. I just wanted to personally thank you for your interest and for signing up for launch notifications. It's fantastic to have you on board!</p>
      <p>At Seren.fyi, we're dedicated to facilitating creativity and collaboration on a whole new level. I'm looking forward to sharing this space with you upon launch, and seeing all the incredible projects you will bring to life.</p>
      <p>Remember, if you have any questions, suggestions, or just want to chat about what you're excited for, you can always reach out to me directly at <a href="mailto:benny@seren.fyi">benny@seren.fyi</a>. I love hearing from future users, and your input can really make a difference in shaping this platform.</p>
      <p>So, thank you again, and get ready for an exciting journey with Seren.fyi. We can't wait to get started!</p>
      <br>      
      <p>Best,</p>
      <p>Benny Chinvanich</p>
      <p>Lead Tech and Operations</p>
      <p>Seren.fyi</p>
    `
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
