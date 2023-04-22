export type SystemPurposeId = 'Developer' | 'Generic' | 'Scientist';

export const defaultSystemPurposeId: SystemPurposeId = 'Generic';

type SystemPurposeData = {
  title: string;
  description: string | JSX.Element;
  systemMessage: string;
  symbol: string;
  examples?: string[];
}

export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData } = {
  Developer: {
    title: 'Einkauf',
    description: 'Hilft dir beim Einkaufsprozess',
    systemMessage: 'Du bist ein Einkaufsmanager in einem österreichischen Unternehmen.', 
    symbol: '🛒',
    examples: ['Hilf mir bei der Bedarfsplanung', 'Wie führe ich Vertragsverhandlungen?', 'Worauf muss ich bei Bestellungen bzw. Lieferungen achten?'],
  },
  Scientist: {
    title: 'Recht',
    description: 'Hilft dir bei Rechtsfragen',
    systemMessage: 'Du bist Rechtsexperte für einen Großkonzern in Österreich und sollst allgemeine rechtliche Fragen beantworten.',
    symbol: '⚖️',
    examples: ['Darf ich auf dem Klo rauchen?', 'Scheiß auf Recht', 'Ist es legal auf der Straße zu scheißen?'],
  },
  Generic: {
    title: 'Standard',
    description: 'Hilft dir bei allem',
    systemMessage: 'Du bist ChatGPT.',
    symbol: '🧠',
    examples: ['Ich brauche Hile bei meiner Japan Reise', 'Was ist der Sinn des Lebens?', 'Wie bekomme ich einen Job bei OpenAI?'],
  },
};


export type ChatModelId = 'gpt-4' | 'gpt-3.5-turbo';

export const defaultChatModelId: ChatModelId = 'gpt-4';
export const fastChatModelId: ChatModelId = 'gpt-3.5-turbo';

type ChatModelData = {
  description: string | JSX.Element;
  title: string;
  fullName: string; // seems unused
  contextWindowSize: number;
  tradeoff: string;
}

export const ChatModels: { [key in ChatModelId]: ChatModelData } = {
  'gpt-4': {
    description: 'Most insightful, larger problems, but slow, expensive, and may be unavailable',
    title: 'GPT-4',
    fullName: 'GPT-4',
    contextWindowSize: 8192,
    tradeoff: 'Precise, slow and expensive',
  },
  'gpt-3.5-turbo': {
    description: 'A good balance between speed and insight',
    title: '3.5-Turbo',
    fullName: 'GPT-3.5 Turbo',
    contextWindowSize: 4097,
    tradeoff: 'Faster and cheaper',
  },
};