const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

export async function generateContent(topic) {
  try {
    const response = await fetch('https://api.deepinfra.com/v1/inference/deepseek-ai/deepseek-chat-instruct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        input: {
          messages: [
            {
              role: 'system',
              content: 'You are a helpful career guide assistant that provides detailed, actionable advice about digital product careers. Your responses should be well-structured, using markdown formatting for better readability.'
            },
            {
              role: 'user',
              content: topic
            }
          ]
        },
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Deepseek API error:', data);
      throw new Error(data.error?.message || 'Failed to generate content');
    }

    if (!data.results?.[0]?.text) {
      console.error('Unexpected Deepseek API response:', data);
      throw new Error('Invalid response format from Deepseek API');
    }

    return data.results[0].text;
  } catch (error) {
    console.error('Error in Deepseek service:', error);
    throw error;
  }
}
