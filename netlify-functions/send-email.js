const axios = require("axios");

exports.handler = async (event) => {
  try {
    const { user_name, user_email, user_phone, message } = JSON.parse(event.body);

    const data = {
      service_id: "service_r01am5k",           // ✅ your EmailJS service ID
      template_id: "template_c3z3mgj",         // ✅ your EmailJS template ID
      user_id: "WASLkE7g_xGrM-yJ8",            // ✅ your EmailJS public key
      template_params: {
        user_name,
        user_email,
        user_phone,
        message,
      },
    };

    await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    console.error("Email error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
