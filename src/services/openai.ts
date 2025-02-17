import OpenAI from 'openai';

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
const deepseekApiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;

if (!openaiApiKey) {
  throw new Error('OpenAI API key is not configured. Please add your API key to the .env file.');
}

if (!deepseekApiKey) {
  throw new Error('DeepSeek API key is not configured. Please add your API key to the .env file.');
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
  dangerouslyAllowBrowser: true
});

export const generateSEOContent = async (prompt: string): Promise<string> => {
  try {
    // First try with OpenAI
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are an expert SEO content writer. Create engaging, SEO-optimized content based on the given prompt. Include relevant keywords naturally and maintain readability."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        model: "gpt-3.5-turbo",
      });

      return completion.choices[0]?.message?.content || '';
    } catch (openaiError) {
      console.log('OpenAI request failed, falling back to DeepSeek:', openaiError);
      
      // Fallback to DeepSeek
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${deepseekApiKey}`
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are an expert SEO content writer. Create engaging, SEO-optimized content based on the given prompt. Include relevant keywords naturally and maintain readability."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          model: "deepseek-chat",
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('DeepSeek API request failed');
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || '';
    }
  } catch (error) {
    console.error('Error generating content:', error);
    if (error.code === 'invalid_api_key') {
      throw new Error('Invalid API keys. Please check your configuration.');
    }
    throw new Error('Failed to generate content. Please try again.');
  }
};