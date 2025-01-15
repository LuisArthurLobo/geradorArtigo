import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Get API key from environment variable
const apiKey = process.env.GEMINI_API_KEY;

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(apiKey);

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

// Initialize models with specific configurations
const thinkingModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
  generationConfig: {
    temperature: 1,
    topP: 1,
    topK: 40,
    maxOutputTokens: 3500,
  },
});

const responseModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 2,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
  }
  //, tools: [{
  //   google_search_retrieval: {
  //     dynamic_retrieval_config: {
  //       mode: "MODE_DYNAMIC",
  //       dynamic_threshold: 0.1,
  //     }
  //   }
  // }]
});

// Process and optimize the question
async function processQuestion(rawQuestion) {
  try {
    // Store the original question
    questionHistory.push({
      original: rawQuestion,
      timestamp: new Date().toISOString()
    });

    // Think experimental - optimize the question using the thinking model
    const prompt = `${thinkingPrompt} ${rawQuestion}`;
    const thinkingResult = await thinkingModel.generateContent(prompt);
    const optimizedQuestion = await thinkingResult.response.text();

    return {
      original: rawQuestion,
      optimized: optimizedQuestion,
      processed: true
    };
  } catch (error) {
    console.error('Error processing question:', error);
    return {
      original: rawQuestion,
      optimized: rawQuestion,
      processed: false
    };
  }
}

async function chat(message) {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is required');
  }

  try {
    // Process the question using the thinking model
    const processedQuestion = await processQuestion(message);

    // Generate the response using the flash model with the response prompt
    const fullPrompt = `${responsePrompt} ${processedQuestion.optimized}`;
    const result = await responseModel.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
}

function resetChat() {
  questionHistory = [];
}

function getQuestionHistory() {
  return questionHistory;
}

export default {
  chat,
  resetChat,
  getQuestionHistory,
};