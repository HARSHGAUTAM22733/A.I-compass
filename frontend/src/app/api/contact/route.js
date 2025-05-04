export async function POST(req) {
  try {
    const data = await req.json();
    const { fullName, email, subject, message } = data;

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email
    // 3. Log the contact request
    console.log('Contact Form Submission:', {
      fullName,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}