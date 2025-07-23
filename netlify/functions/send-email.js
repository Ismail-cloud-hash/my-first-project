const axios = require("axios");

exports.handler = async (event) => {
  const { user_name, user_email, user_phone, message } = JSON.parse(event.body);

  const templateParams = {
    user_name,
    user_email,
    user_phone,
    message
  };

  try {
    const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "service_r01am5k", // your EmailJS service ID
      template_id: "template_c3z3mgj", // your template ID
      user_id: "WASLkE7g_xGrM-yJ8", // public user ID from EmailJS dashboard
      template_params: templateParams
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" })
    };
  }
};
