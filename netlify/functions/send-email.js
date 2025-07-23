exports.handler = async (event, context) => {
  try {
    const { user_name, user_email, user_phone, message } = JSON.parse(event.body);

    // Dummy email logic here – replace with actual EmailJS, nodemailer, etc.
    console.log("Message from:", user_name, user_email, user_phone, message);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message sent!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Server error." }),
    };
  }
};
