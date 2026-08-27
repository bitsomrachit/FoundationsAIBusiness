import React, { useState } from 'react';

export default function TuringTestDemo() {
  const [step, setStep] = useState('setup'); // setup, typing, voting, reveal
  const [topic, setTopic] = useState('Explain quantum computing in one sentence.');
  const [aiText, setAiText] = useState('Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers.');
  const [studentText, setStudentText] = useState('');
  const [options, setOptions] = useState([]);
  const [isPeeking, setIsPeeking] = useState(false);

  const startTypingPhase = () => setStep('typing');

  const startVotingPhase = () => {
    // Randomize which text appears first
    const isStudentFirst = Math.random() > 0.5;
    setOptions(
      isStudentFirst
        ? [
            { text: studentText, author: 'Student (Human)' },
            { text: aiText, author: 'AI (Machine)' },
          ]
        : [
            { text: aiText, author: 'AI (Machine)' },
            { text: studentText, author: 'Student (Human)' },
          ]
    );
    setStep('voting');
  };

  const revealAnswers = () => setStep('reveal');

  const resetDemo = () => {
    setStudentText('');
    setStep('setup');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 font-sans text-gray-800">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 text-center">
          <h1 className="text-3xl font-bold tracking-wider">Is This AI?</h1>
          <p className="mt-2 text-blue-100 uppercase tracking-widest text-sm font-semibold">Live Classroom Turing Test</p>
        </div>

        <div className="p-8">
          
          {/* STEP 1: PROFESSOR SETUP */}
          {step === 'setup' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold border-b pb-2">Professor Setup (Do this before showing the class)</h2>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">The Prompt / Question:</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pre-generated AI Response:</label>
                <textarea
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={aiText}
                  onChange={(e) => setAiText(e.target.value)}
                />
              </div>
              <button
                onClick={startTypingPhase}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                Start Live Demonstration
              </button>
            </div>
          )}

          {/* STEP 2: STUDENT TYPING */}
          {step === 'typing' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h2 className="text-xl font-bold text-blue-800 mb-2">The Prompt:</h2>
                <p className="text-lg">{topic}</p>
              </div>
              
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-sm font-bold text-gray-700">Student: Type your answer below</label>
                  <button 
                    onMouseDown={() => setIsPeeking(true)}
                    onMouseUp={() => setIsPeeking(false)}
                    onMouseLeave={() => setIsPeeking(false)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded font-semibold cursor-help"
                  >
                    Hold to Peek (Student Only)
                  </button>
                </div>
                
                <textarea
                  className={`w-full p-6 border-2 border-gray-300 rounded-lg h-48 text-xl focus:ring-4 focus:ring-blue-500 outline-none transition-all duration-200 ${
                    isPeeking ? 'blur-none text-black' : 'blur-md text-gray-500'
                  }`}
                  placeholder="Start typing here..."
                  value={studentText}
                  onChange={(e) => setStudentText(e.target.value)}
                />
                {!isPeeking && (
                  <p className="text-sm text-red-500 mt-2 font-semibold">
                    * Text is blurred for the projector. Hold the peek button to see what you are typing.
                  </p>
                )}
              </div>

              <button
                onClick={startVotingPhase}
                disabled={studentText.length < 5}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                Submit Answer & Start Voting
              </button>
            </div>
          )}

          {/* STEP 3 & 4: VOTING AND REVEAL */}
          {(step === 'voting' || step === 'reveal') && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Which one is the AI?</h2>
                <p className="text-gray-600">Prompt: <span className="font-semibold">{topic}</span></p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {options.map((opt, index) => (
                  <div key={index} className="flex flex-col h-full">
                    <div className="bg-gray-100 p-8 rounded-t-lg flex-grow shadow-inner border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-500 mb-4 border-b pb-2 uppercase tracking-wide">
                        Option {index === 0 ? 'A' : 'B'}
                      </h3>
                      <p className="text-xl leading-relaxed">{opt.text}</p>
                    </div>
                    
                    {/* The Reveal Banner */}
                    <div className={`p-4 rounded-b-lg text-center text-xl font-bold transition-all duration-500 ${
                      step === 'reveal' 
                        ? opt.author.includes('AI') 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-green-600 text-white'
                        : 'bg-gray-300 text-gray-300' // Hidden state
                    }`}>
                      {step === 'reveal' ? opt.author : '???'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t flex justify-center space-x-4">
                {step === 'voting' ? (
                  <button
                    onClick={revealAnswers}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 text-xl"
                  >
                    Reveal Authors
                  </button>
                ) : (
                  <button
                    onClick={resetDemo}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors"
                  >
                    Start New Round
                  </button>
                )}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
