// Simple localStorage-based chat history storage

const STORAGE_KEY = 'mental-health-chat-history';

/**
 * Load chat messages from localStorage
 * @returns {Array} Array of chat messages
 */
export function loadMessages() {
  try {
    const storedMessages = localStorage.getItem(STORAGE_KEY);
    return storedMessages ? JSON.parse(storedMessages) : [];
  } catch (error) {
    console.error('Failed to load chat history:', error);
    return [];
  }
}

/**
 * Save chat messages to localStorage
 * @param {Array} messages - Array of chat messages to save
 */
export function saveMessages(messages) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save chat history:', error);
  }
}

/**
 * Clear chat history from localStorage
 */
export function clearMessages() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear chat history:', error);
  }
}