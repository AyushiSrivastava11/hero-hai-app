import type { NextApiRequest, NextApiResponse } from 'next';

// Define the type for the request body
interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

// Define the type for the response
interface ContactResponse {
  success: boolean;
  message: string;
}

// Mock function to store contact details in the database
// Replace this with your actual database call
async function storeContactDetails(data: ContactRequestBody): Promise<void> {
  // TODO: Implement actual database logic here (e.g., using Prisma)
  console.log('Storing contact details:', data);
}

// Mock function to notify the recipient
// Replace this with your actual notification logic
async function notifyRecipient(data: ContactRequestBody): Promise<void> {
  // TODO: Implement actual notification logic here (e.g., sending an email)
  console.log('Notifying recipient with data:', data);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body as ContactRequestBody;

    // Validate request body
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    try {
      // Store contact details in the database
      await storeContactDetails({ name, email, message });

      // Notify the recipient
      await notifyRecipient({ name, email, message });

      // Respond with success message
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.',
      });
    } catch (error) {
      console.error('Error processing contact form submission:', error);

      return res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request.',
      });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
