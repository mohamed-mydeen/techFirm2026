import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────
// FAQ Knowledge Base — keyword → answer
// ─────────────────────────────────────────
const FAQ_KB = [
  {
    keywords: ['register', 'registration', 'signup', 'sign up', 'enroll', 'join'],
    answer: '📝 **Registration** is open now! Click any **"Register Now"** button on the site or visit our Google Form directly. The registration fee is **₹200 per participant**.',
  },
  {
    keywords: ['fee', 'cost', 'price', 'pay', 'payment', 'amount', 'money', '200'],
    answer: '💰 The **registration fee is ₹200** per participant. Payment details will be provided on the registration form.',
  },
  {
    keywords: ['date', 'when', 'day', 'march', 'schedule', 'time'],
    answer: '📅 **TECH FIRM 2026** is on **March 25, 2026** starting at **9:30 AM** and ending at **4:00 PM**.',
  },
  {
    keywords: ['venue', 'where', 'location', 'place', 'auditorium', 'apt'],
    answer: '📍 The event is held at **APT Auditorium**, Francis Xavier Engineering College, Tirunelveli.',
  },
  {
    keywords: ['college', 'fxec', 'francis xavier', 'institution'],
    answer: '🏛️ **Francis Xavier Engineering College (FXEC)** is located at Vannarpettai, Tirunelveli, Tamil Nadu – 627003.',
  },
  {
    keywords: ['department', 'csbs', 'computer science', 'business systems'],
    answer: '💻 The event is organized by the **Department of Computer Science and Business Systems (CSBS)** at FXEC.',
  },
  {
    keywords: ['technical events', 'tech events', 'technical'],
    answer: '⚙️ **Technical Events:**\n1. Paper Presentation\n2. Project Expo\n3. Coding Contest\n4. Tech Quiz\n\nTap **"Events"** in the navbar to see all details and guidelines!',
  },
  {
    keywords: ['non-technical', 'nontechnical', 'fun events', 'non technical'],
    answer: '🎭 **Non-Technical Events:**\n1. Poster Designing\n2. Treasure Hunt\n3. Photography\n4. Adzap\n5. Connections\n6. Box Cricket\n\nAll loads of fun! 🎉',
  },
  {
    keywords: ['events', 'competitions', 'contest', 'participate'],
    answer: '🏆 We have **10 events** in total — 4 Technical and 6 Non-Technical! Scroll to the **Events** section or ask me about a specific event.',
  },
  {
    keywords: ['paper presentation', 'paper', 'research', 'ppt'],
    answer: '📄 **Paper Presentation:**\n• Max 2 members/team\n• Duration: 5–7 minutes\n• PPT format required\n• Topics must relate to tech/innovation\n• Judge\'s decision is final',
  },
  {
    keywords: ['project expo', 'project', 'expo', 'prototype'],
    answer: '🖥️ **Project Expo:**\n• Individual or team participation\n• Bring your working project\n• Innovation & implementation evaluated\n• Functional demo preferred',
  },
  {
    keywords: ['coding', 'code', 'programming', 'algorithm', 'hackathon'],
    answer: '💻 **Coding Contest:**\n• Individual participation\n• Time limit: 60 minutes\n• Languages: C, C++, Python, Java\n• No internet allowed\n• Problems of varying difficulty',
  },
  {
    keywords: ['quiz', 'tech quiz', 'questions'],
    answer: '🧠 **Tech Quiz:**\n• Team of 2 participants\n• Multiple rounds\n• Topics: IT, AI, programming, general tech\n• Buzzer round in finals!',
  },
  {
    keywords: ['poster', 'designing', 'design', 'art', 'creative'],
    answer: '🎨 **Poster Designing:**\n• Individual participation\n• Topic given on the spot\n• Time limit: 45 minutes\n• Materials provided\n• Creativity & clarity judged',
  },
  {
    keywords: ['treasure hunt', 'treasure', 'hunt', 'clues', 'chase'],
    answer: '🗺️ **Treasure Hunt:**\n• Team of 2–3 members\n• Solve clues to find the treasure\n• No mobile usage allowed\n• First team to finish wins!',
  },
  {
    keywords: ['photography', 'photo', 'camera', 'picture', 'image capture'],
    answer: '📷 **Photography:**\n• Individual participation\n• Theme announced during the event\n• Basic editing allowed\n• No watermarks/heavy filters\n• Original photos only',
  },
  {
    keywords: ['adzap', 'ad', 'advertisement', 'skit', 'performance'],
    answer: '🎭 **Adzap:**\n• Team of 3–4 members\n• Product given on the spot\n• Max 3 minutes performance\n• Creativity & presentation judged',
  },
  {
    keywords: ['connections', 'connect', 'link', 'clue game'],
    answer: '🔗 **Connections:**\n• Individual participation\n• Find connections between clues\n• Multiple rounds\n• Speed & accuracy evaluated',
  },
  {
    keywords: ['box cricket', 'cricket', 'sports', 'game', 'play'],
    answer: '🏏 **Box Cricket:**\n• 5 members per team\n• Knockout format\n• 4 overs per innings\n• Standard box cricket rules apply',
  },
  {
    keywords: ['cash', 'prize', 'reward', 'winner', 'award', 'win'],
    answer: '🏆 **Yes! Cash prizes await winners** across competitive events. Top performers will also receive certificates of merit. Stay tuned for prize details!',
  },
  {
    keywords: ['contact', 'coordinator', 'help', 'query', 'phone', 'number', 'reach', 'call'],
    answer: '📞 **Contact Us:**\n• **Mrs. Evangelin Sneha Michael** (Staff Co-ordinator): +91 77083 64596\n• **Mr. Esakki Anand** (Student Co-ordinator): +91 88387 90512\n• **Email:** csbs.techfirm@fxeng.ac.in',
  },
  {
    keywords: ['team', 'members', 'group', 'individual', 'solo', 'partner'],
    answer: '👥 **Team sizes vary by event:**\n• Paper Presentation: 2 members\n• Project Expo: Individual or team\n• Coding Contest: Individual\n• Tech Quiz: 2 members\n• Treasure Hunt: 2–3 members\n• Adzap: 3–4 members\n• Box Cricket: 5 members',
  },
  {
    keywords: ['rules', 'guidelines', 'regulation'],
    answer: '📋 Each event has its own guidelines! Click **"View Guidelines"** on any event card in the Events section, or ask me about a specific event!',
  },
  {
    keywords: ['hi', 'hello', 'hey', 'hii', 'helo', 'greet'],
    answer: '👋 **Hello!** Welcome to **TECH FIRM 2026**! I\'m your FAQ bot. Ask me anything about the event — registration, events, schedule, venue, or contacts!',
  },
  {
    keywords: ['thank', 'thanks', 'thankyou', 'thank you'],
    answer: '😊 You\'re welcome! Is there anything else I can help you with about **TECH FIRM 2026**?',
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'exit', 'close'],
    answer: '👋 Goodbye! See you at **TECH FIRM 2026** on March 25! 🎉',
  },
];

const QUICK_QUESTIONS = [
  'When is the event?',
  'How do I register?',
  'What is the fee?',
  'List all events',
  'Contact details',
];

// ─────────────────────────────────────────
// Matching engine
// ─────────────────────────────────────────
const getAnswer = (input) => {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return null;

  let bestMatch = null;
  let bestScore = 0;

  for (const entry of FAQ_KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (normalized.includes(kw)) score += kw.length; // longer match = higher priority
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.answer;

  return "🤔 I'm not sure about that. Try asking about **registration**, **events**, **venue**, **date**, **contact**, or **fee**. You can also scroll through the website for more info!";
};

// ─────────────────────────────────────────
// Format answer with markdown-like rendering
// ─────────────────────────────────────────
const FormattedText = ({ text }) => {
  const lines = text.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith('**') && part.endsWith('**')
                ? <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        );
      })}
    </div>
  );
};

// ─────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────
const FAQBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: "👋 Hi! I'm the **TECH FIRM 2026** FAQ Bot. Ask me anything about the event — schedule, events, registration, venue, or contacts!",
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    const userMsg = { id: Date.now(), from: 'user', text: userText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = getAnswer(userText);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, from: 'bot', text: answer }]);
    }, 700);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              key="fab"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center glow-purple shadow-2xl"
            >
              {/* Animated ring */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 animate-ping opacity-30" />
              <svg className="w-7 h-7 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              {/* Tooltip */}
              <span className="absolute -top-10 right-0 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100">
                FAQ Bot
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="absolute bottom-0 right-0 w-[360px] max-w-[calc(100vw-2rem)]"
              style={{ maxHeight: '80vh' }}
            >
              <div className="flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-950/50"
                style={{ background: 'linear-gradient(145deg, rgba(15,15,35,0.98), rgba(10,10,25,0.98))' }}>
                
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/8"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.2))' }}>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-base">
                        🤖
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-slate-900" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">TF Bot</div>
                      <div className="text-[10px] text-green-400 font-semibold">Online · FAQ Assistant</div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-sm">
                    ✕
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '360px', minHeight: '200px' }}>
                  {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.from === 'bot' && (
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-xs mr-2 mt-1 shrink-0">
                          🤖
                        </div>
                      )}
                      <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-tr-sm'
                          : 'glass border border-white/8 text-slate-300 rounded-tl-sm'
                      }`}>
                        {msg.from === 'bot'
                          ? <FormattedText text={msg.text} />
                          : msg.text
                        }
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-xs mr-2 mt-1">
                        🤖
                      </div>
                      <div className="glass border border-white/8 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                        {[0, 0.2, 0.4].map((d, i) => (
                          <motion.span key={i}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                            className="w-1.5 h-1.5 rounded-full bg-violet-400 block"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={endRef} />
                </div>

                {/* Quick Questions */}
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {QUICK_QUESTIONS.map((q) => (
                    <button key={q} onClick={() => sendMessage(q)}
                      className="text-[11px] px-3 py-1.5 rounded-full glass border border-violet-500/30 text-violet-300 hover:bg-violet-600/20 hover:border-violet-400/50 transition-all font-medium whitespace-nowrap">
                      {q}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 pt-2 border-t border-white/8 flex items-center gap-3">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => sendMessage()}
                    disabled={!input.trim()}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center text-white shrink-0 disabled:opacity-40 disabled:cursor-not-allowed glow-purple transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FAQBot;
