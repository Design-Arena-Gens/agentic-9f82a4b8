'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, BookOpen, Lightbulb, Calculator, Code, Briefcase, Calendar, Brain, Target } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const capabilities: Capability[] = [
    { icon: <BookOpen className="w-5 h-5" />, title: 'Knowledge & Research', description: 'Deep insights on any topic' },
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Creative Content', description: 'Stories, scripts, and ideas' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Productivity', description: 'Planning and organization' },
    { icon: <Brain className="w-5 h-5" />, title: 'Problem Solving', description: 'Analytical solutions' },
    { icon: <Code className="w-5 h-5" />, title: 'Technical Help', description: 'Programming and debugging' },
    { icon: <Briefcase className="w-5 h-5" />, title: 'Business Strategy', description: 'Ideas and analysis' },
    { icon: <Calculator className="w-5 h-5" />, title: 'Data Analysis', description: 'Numbers and insights' },
    { icon: <Target className="w-5 h-5" />, title: 'Decision Making', description: 'Evaluate options' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();

    // Knowledge & Research
    if (lowerMessage.includes('explain') || lowerMessage.includes('what is') || lowerMessage.includes('how does')) {
      return `I'd be happy to explain that! Based on your question about "${userMessage}", here's a comprehensive breakdown:\n\n**Overview:** This is a complex topic that involves multiple factors and considerations.\n\n**Key Points:**\n1. **Foundation**: The fundamental concept centers around understanding the core principles\n2. **Applications**: Practical uses span across various domains\n3. **Implications**: This has significant impact on related fields\n\n**Detailed Explanation:**\nThe subject you're asking about connects to broader themes in its field. To fully understand it, we should consider both theoretical foundations and real-world applications.\n\n**Next Steps:**\nWould you like me to dive deeper into any specific aspect? I can provide:\n- Step-by-step guides\n- Comparative analysis\n- Practical examples\n- Related concepts to explore`;
    }

    // Creative Content
    if (lowerMessage.includes('write') || lowerMessage.includes('story') || lowerMessage.includes('creative') || lowerMessage.includes('poem')) {
      return `Absolutely! I'll create something creative for you:\n\n**"${userMessage.substring(0, 30)}..."**\n\nHere's a creative piece inspired by your request:\n\nIn the realm of imagination, where ideas flow like rivers and creativity knows no bounds, we begin our journey. Every word carries weight, every sentence paints a picture, and every paragraph builds a world.\n\nThe art of creation is both science and magic—structured yet spontaneous, planned yet surprising. Whether crafting narratives, designing concepts, or exploring new territories of thought, the process remains wonderfully unpredictable.\n\n**Creative Enhancements I Can Provide:**\n- Full story development with character arcs\n- Marketing copy and compelling narratives\n- Poetry in various styles\n- Script outlines and dialogue\n- Conceptual designs and brainstorming\n\nWhat direction would you like to take this?`;
    }

    // Productivity & Planning
    if (lowerMessage.includes('plan') || lowerMessage.includes('organize') || lowerMessage.includes('schedule') || lowerMessage.includes('task')) {
      return `Let me help you get organized! Here's a structured approach:\n\n**Action Plan:**\n\n📋 **Phase 1: Assessment**\n- Identify all tasks and requirements\n- Set clear priorities\n- Establish deadlines\n\n📋 **Phase 2: Organization**\n- Break down large tasks into manageable steps\n- Allocate time blocks\n- Set up tracking systems\n\n📋 **Phase 3: Execution**\n- Start with highest priority items\n- Maintain momentum with regular check-ins\n- Adjust as needed\n\n**Productivity Tips:**\n✓ Use the 2-minute rule: If it takes less than 2 minutes, do it now\n✓ Batch similar tasks together\n✓ Build in buffer time for unexpected items\n✓ Review and adjust your plan weekly\n\nWould you like me to create a detailed schedule or specific checklist?`;
    }

    // Problem Solving
    if (lowerMessage.includes('problem') || lowerMessage.includes('solve') || lowerMessage.includes('issue') || lowerMessage.includes('help')) {
      return `Let's analyze this problem systematically:\n\n**Problem Analysis:**\n🔍 **Current Situation**: ${userMessage}\n\n**Potential Solutions:**\n\n**Option 1: Direct Approach**\n✅ Pros: Quick implementation, straightforward\n❌ Cons: May not address root cause\n\n**Option 2: Comprehensive Strategy**\n✅ Pros: Long-term solution, addresses underlying issues\n❌ Cons: Requires more time and resources\n\n**Option 3: Hybrid Method**\n✅ Pros: Balanced approach, flexible\n❌ Cons: May require iterative refinement\n\n**Recommended Path Forward:**\n1. Gather all relevant information\n2. Test the most promising solution on a small scale\n3. Measure results and adjust\n4. Scale successful approach\n\n**Risk Mitigation:**\n- Identify potential obstacles early\n- Have backup plans ready\n- Monitor progress continuously\n\nWhat additional details can you share about the specific challenge?`;
    }

    // Technical/Code Help
    if (lowerMessage.includes('code') || lowerMessage.includes('program') || lowerMessage.includes('debug') || lowerMessage.includes('error')) {
      return `I can help with that technical challenge! Here's my analysis:\n\n**Technical Solution:**\n\n\`\`\`javascript\n// Example implementation approach\nfunction solveProblem(input) {\n  // Step 1: Validate input\n  if (!input) return null;\n  \n  // Step 2: Process\n  const result = processData(input);\n  \n  // Step 3: Return optimized result\n  return result;\n}\n\nfunction processData(data) {\n  // Your logic here\n  return data.transform();\n}\n\`\`\`\n\n**Key Considerations:**\n- **Performance**: Optimize for speed and efficiency\n- **Scalability**: Ensure it works with larger datasets\n- **Error Handling**: Add robust validation\n- **Best Practices**: Follow industry standards\n\n**Debugging Tips:**\n1. Check input/output at each step\n2. Use console logging strategically\n3. Test edge cases\n4. Review error messages carefully\n\nNeed help with a specific language or framework?`;
    }

    // Business/Strategy
    if (lowerMessage.includes('business') || lowerMessage.includes('marketing') || lowerMessage.includes('strategy') || lowerMessage.includes('startup')) {
      return `Excellent question about business strategy! Let me provide a comprehensive analysis:\n\n**Strategic Framework:**\n\n**🎯 Market Analysis:**\n- Target audience identification\n- Competitive landscape assessment\n- Market opportunities and gaps\n\n**💡 Value Proposition:**\n- Unique selling points\n- Customer pain points addressed\n- Differentiation strategy\n\n**📈 Growth Strategy:**\n1. **Short-term (0-6 months)**: Build foundation and early traction\n2. **Mid-term (6-18 months)**: Scale operations and expand reach\n3. **Long-term (18+ months)**: Market leadership and diversification\n\n**💰 Revenue Considerations:**\n- Pricing models\n- Customer acquisition cost\n- Lifetime value optimization\n- Multiple revenue streams\n\n**🚀 Action Items:**\n- Validate assumptions with market research\n- Build MVP and test with early adopters\n- Iterate based on feedback\n- Scale what works\n\nWhat specific aspect of your business would you like to explore further?`;
    }

    // Decision Making
    if (lowerMessage.includes('should i') || lowerMessage.includes('decide') || lowerMessage.includes('choice') || lowerMessage.includes('vs')) {
      return `Let me help you think through this decision:\n\n**Decision Framework:**\n\n**📊 Factors to Consider:**\n\n**Option A Analysis:**\n✅ Advantages:\n- Factor 1: Immediate benefits\n- Factor 2: Lower risk profile\n- Factor 3: Proven approach\n\n⚠️ Considerations:\n- May have limitations\n- Requires specific conditions\n\n**Option B Analysis:**\n✅ Advantages:\n- Factor 1: Greater potential upside\n- Factor 2: Innovative approach\n- Factor 3: Alignment with long-term goals\n\n⚠️ Considerations:\n- Higher initial investment\n- More uncertainty\n\n**Decision Criteria:**\n1. **Timeline**: When do you need results?\n2. **Resources**: What do you have available?\n3. **Risk Tolerance**: What's your comfort level?\n4. **Goals**: What outcome matters most?\n\n**My Recommendation:**\nBased on the information provided, I'd suggest weighing your priorities against each option's strengths. Consider starting with a small test to gather data before fully committing.\n\nWhat are your top 3 priorities for this decision?`;
    }

    // Default comprehensive response
    return `Thank you for reaching out! I'm Omni Assistant, and I'm here to help with anything you need.\n\n**Understanding Your Request:**\n"${userMessage}"\n\n**How I Can Help:**\n\n🎓 **Knowledge & Analysis**: I can provide detailed explanations, research summaries, and insights on virtually any topic.\n\n✨ **Creative Solutions**: From content creation to brainstorming, I'll help generate innovative ideas.\n\n📋 **Practical Guidance**: I offer step-by-step plans, organizational strategies, and actionable advice.\n\n🔍 **Problem Solving**: I'll analyze challenges from multiple angles and provide comprehensive solutions.\n\n**Next Steps:**\nTo give you the most helpful response, could you tell me more about:\n- What specific outcome you're looking for?\n- Any constraints or requirements?\n- Your timeline or urgency?\n- Any relevant background information?\n\nI'm ready to dive deep into any area you need assistance with. What would you like to explore first?`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    setTimeout(async () => {
      const response = await generateResponse(input);
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
      setIsThinking(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Omni Assistant</h1>
                <p className="text-sm text-purple-300">Your Ultra-Intelligent AI Companion</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {messages.length === 0 ? (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Welcome to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Omni Assistant</span>
              </h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                An ultra-intelligent AI designed to assist with everything you need—from research to creativity, productivity to problem-solving.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-300">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-purple-200 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>

            {/* Example Prompts */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Try asking me...</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Explain quantum computing in simple terms',
                  'Write a creative story about space exploration',
                  'Help me plan a marketing strategy for my startup',
                  'Solve this coding problem I\'m stuck on',
                  'Compare different investment options',
                  'Generate ideas for a mobile app',
                  'Create a study schedule for my exams',
                  'Analyze the pros and cons of remote work'
                ].map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(prompt)}
                    className="text-left bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/50 rounded-lg p-4 transition-all text-purple-100 hover:text-white"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Messages */
          <div className="space-y-6 mb-32">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3xl rounded-2xl p-6 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 text-purple-50'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="max-w-3xl rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* Fixed Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-900/80 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20"
              disabled={isThinking}
            />
            <button
              type="submit"
              disabled={!input.trim() || isThinking}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-xl px-8 py-4 font-semibold transition-all hover:scale-105 flex items-center space-x-2"
            >
              <span>Send</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
