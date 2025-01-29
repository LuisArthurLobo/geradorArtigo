import { generateContent } from '../../../services/deepseek';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({ message: 'Topic is required' });
    }

    // Check if API key is loaded
    if (!process.env.DEEPSEEK_API_KEY) {
      console.error('DEEPSEEK_API_KEY is not set in environment variables');
      return res.status(500).json({ message: 'API key not configured' });
    }

    const content = await generateContent(topic);
    return res.status(200).json({ content });
  } catch (error) {
    console.error('Error in API route:', error);
    return res.status(500).json({ message: error.message || 'Internal server error' });
  }
}