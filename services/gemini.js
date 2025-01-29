import axios from 'axios';

// Get API key from environment variable
const apiKey = process.env.DEEPSEEK_API_KEY;

// Initialize axios instance with DeepSeek API configuration
const deepseekAPI = axios.create({
  baseURL: 'https://api.deepseek.com/v1',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
});

// Store chat history and questions
let questionHistory = [];

// Experimental thinking prompt to optimize questions
const thinkingPrompt = `Analise a pergunta que foi feita para você de modo sugerir estruturas para respondê-la,sempre sobre contextualizando o assunto da pergunta com um viés sobre UX/UI design e design de produtos digitais. Responda ela em estrutura de tópico, 
somente com as sugestões de abordagens. Sempre termine as frases com um ponto final
Só responda perguntas sobre UX/UI design e design de produtos`;

// Response generation prompt for sophisticated formatting
const responsePrompt = ` 
lembre de contextualizar o assunto falando sobreUX/UI design e design de produtos digitais

<regra1>Formate usando todos os recursos do markdown para criar sofisticação e
rica hierarquia e variância tipográfica, usando divisores, espaçamentos,
blocos de citação, versaletes, links e tudo o que o markdown tem a oferecer. Não fale sobre markdown na resposta, apenas use as tags</regra1>
<regra2>Use todos esses elementos Elementos Estruturais ao formular sua resposta, mas não fale sobre eles na resposta</regra2>

Parágrafos variam entre curtos (1-2 frases) e longos (4-5 frases), criando ritmo dinâmico
Seções claramente demarcadas com subtítulos descritivos
Transições fluidas entre parágrafos, usando conectores lógicos e referências cruzadas
Estrutura que alterna entre teoria e prática, conceito e exemplo

Escolhas Linguísticas

Tom conversacional mantido consistentemente 
Uso estratégico de primeira pessoa para estabelecer conexão pessoal
Vocabulário acessível mesclado com termos técnicos quando necessário
Metáforas e analogias concretas para explicar conceitos abstratos 

Técnicas Narrativas

Histórias pessoais como veículo para lições mais amplas
Anedotas específicas que ilustram pontos conceituais
Vulnerabilidade controlada nas narrativas pessoais
Arcos narrativos completos dentro de cada exemplo

Elementos Retóricos

Uso de contrastes para criar tensão narrativa
Antecipação e resposta a possíveis objeções do leitor
Perguntas retóricas estrategicamente posicionadas
Chamadas sutis para ação ao longo do texto

Aspectos Argumentativos

Argumentos construídos gradualmente, com evidências sustentando cada ponto
Exemplos concretos apoiando afirmações abstratas
Reconhecimento e refutação de contra-argumentos comuns
Conclusões que extraem princípios universais de experiências específicas

Elementos de Engajamento

Alternância entre insights pessoais e aplicações universais
Momentos de humor estrategicamente posicionados
Revelações surpreendentes que mantêm o interesse
Convites sutis para reflexão pessoal do leitor

Recursos Estilísticos

Frases de impacto estrategicamente posicionadas
Repetições intencionais para ênfase
Paralelismos sintáticos em pontos-chave
Variação consciente no comprimento das frases

Elementos de Credibilidade

Credenciais apresentadas naturalmente no fluxo do texto
Exemplos específicos e quantificáveis
Reconhecimento de limitações e falhas
Equilíbrio entre confiança e humildade

Aspectos de Acessibilidade

Conceitos complexos explicados em termos simples
Exemplos práticos para ideias abstratas
Linguagem inclusiva e não-intimidadora
Definições incorporadas naturalmente ao texto

Elementos de Conclusão

Conexão entre o específico e o universal
Retomada dos temas principais
Chamada para ação implícita
Abertura para reflexão adicional<regra2> `;

// Configuration for thinking model
const thinkingConfig = {
  model: "deepseek-chat",
  temperature: 1,
  max_tokens: 3500,
  frequency_penalty: 1,
  presence_penalty: 1,
  top_p: 1,
};

// Configuration for response model
const responseConfig = {
  model: "deepseek-chat",
  temperature: 2,
  max_tokens: 8192,
  frequency_penalty: 0.95,
  presence_penalty: 0.95,
  top_p: 0.95,
};

// Process and optimize the question
async function processQuestion(rawQuestion) {
  try {
    const messages = [
      { role: "system", content: thinkingPrompt },
      { role: "user", content: rawQuestion }
    ];

    const response = await deepseekAPI.post('/chat/completions', {
      ...thinkingConfig,
      messages
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error processing question:', error);
    throw error;
  }
}

// Main chat function
async function chat(message) {
  try {
    // Add message to history
    questionHistory.push(message);

    // Process the question first
    const processedQuestion = await processQuestion(message);

    // Generate the final response
    const messages = [
      { role: "system", content: responsePrompt },
      { role: "user", content: processedQuestion }
    ];

    const response = await deepseekAPI.post('/chat/completions', {
      ...responseConfig,
      messages
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
}

// Reset chat history
function resetChat() {
  questionHistory = [];
}

// Get question history
function getQuestionHistory() {
  return questionHistory;
}

export default {
  chat,
  resetChat,
  getQuestionHistory,
};