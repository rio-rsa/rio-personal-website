'use client';

import { Loader2, MessageCircle, Send, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { sendMessageToGemini } from '@/services/gemini';

import { Message } from '@/types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello. I am an AI assistant trained on Rio's research and portfolio. How may I assist you?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      setMessages((prev) => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: 'I apologize, but I encountered a system error.',
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className='fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans'>
      {/* Chat Window */}
      {isOpen && (
        <div className='mb-6 w-[320px] sm:w-[380px] h-[500px] bg-white rounded-lg shadow-2xl shadow-stone-200 border border-stone-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300'>
          {/* Header */}
          <div className='bg-stone-900 text-stone-50 p-4 flex justify-between items-center border-b border-stone-800'>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              <h3 className='font-medium text-sm tracking-wide'>
                Research Assistant
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='text-stone-400 hover:text-white transition-colors'
            >
              <X className='w-4 h-4' />
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 overflow-y-auto p-5 bg-stone-50 space-y-6'>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-stone-200 text-stone-900 rounded-lg rounded-tr-none'
                      : 'bg-white border border-stone-200 text-stone-700 rounded-lg rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='bg-white border border-stone-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2'>
                  <Loader2 className='w-3 h-3 animate-spin text-stone-400' />
                  <span className='text-xs text-stone-400'>
                    Processing query...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className='p-4 bg-white border-t border-stone-100'>
            <div className='flex gap-2'>
              <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Type your question...'
                className='flex-1 bg-stone-50 border border-stone-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 transition-all placeholder:text-stone-400'
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className='bg-stone-900 text-white px-3 py-2 rounded-md hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
              >
                <Send className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen
            ? 'bg-stone-200 text-stone-900'
            : 'bg-stone-900 text-white hover:scale-105'
        }`}
        aria-label='Toggle Chat'
      >
        {isOpen ? (
          <X className='w-5 h-5' />
        ) : (
          <MessageCircle className='w-5 h-5' />
        )}
      </button>
    </div>
  );
};
