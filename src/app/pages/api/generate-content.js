import geminiService from '../../services/gemini';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ message: 'Missing topic parameter' });
  }

  try {
    const response = await geminiService.chat(topic);
    res.status(200).json({ content: response });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ message: 'Error generating content' });
  }
}
