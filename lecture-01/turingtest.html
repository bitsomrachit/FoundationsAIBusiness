<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Turing Test Demo</title>

    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- React & ReactDOM -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>

    <!-- Babel to compile JSX in the browser -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <style>
        /* Small tweak to ensure the blurred text cannot be highlighted and copied by accident */
        .no-select {
            user-select: none;
            -webkit-user-select: none;
        }
    </style>
</head>
<body class="bg-gray-100 font-sans antialiased text-gray-800">
    
    <!-- This is where the React app will be injected -->
    <div id="root"></div>

    <script type="text/babel">
        function TuringTestDemo() {
            // Using React.useState because we are in a standalone browser environment
            const [step, setStep] = React.useState('setup'); 
            const [topic, setTopic] = React.useState('Explain quantum computing in one sentence.');
            const [aiText, setAiText] = React.useState('Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers.');
            const [studentText, setStudentText] = React.useState('');
            const [options, setOptions] = React.useState([]);
            const [isPeeking, setIsPeeking] = React.useState(false);

            const startTypingPhase = () => setStep('typing');

            const startVotingPhase = () => {
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
                <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
                    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-6 text-center shadow-md z-10 relative">
                            <h1 className="text-4xl font-bold tracking-wider mb-2">Is This AI?</h1>
                            <p className="text-blue-100 uppercase tracking-widest text-sm font-semibold">Live Classroom Turing Test</p>
                        </div>

                        <div className="p-8 sm:p-12">
                        
                            {/* STEP 1: PROFESSOR SETUP */}
                            {step === 'setup' && (
                                <div className="space-y-8 animate-fade-in">
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
                                        <p className="text-yellow-800 font-semibold">
                                            Professor Setup: Fill this out before bringing the student up.
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">The Prompt / Question:</label>
                                        <input
                                            type="text"
                                            className="w-full p-4 text-lg border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Pre-generated AI Response:</label>
                                        <textarea
                                            className="w-full p-4 text-lg border border-gray-300 rounded-xl h-40 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all"
                                            value={aiText}
                                            onChange={(e) => setAiText(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        onClick={startTypingPhase}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-6 rounded-xl transition-colors text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                                    >
                                        Start Live Demonstration
                                    </button>
                                </div>
                            )}

                            {/* STEP 2: STUDENT TYPING */}
                            {step === 'typing' && (
                                <div className="space-y-8 animate-fade-in">
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                                        <h2 className="text-xl font-bold text-blue-800 mb-2 uppercase tracking-wide text-sm">The Prompt:</h2>
                                        <p className="text-2xl font-medium text-gray-800">{topic}</p>
                                    </div>
                                
                                    <div className="relative">
                                        <div className="flex justify-between items-end mb-3">
                                            <label className="block text-lg font-bold text-gray-700">Student: Type your answer below</label>
                                            <button 
                                                onMouseDown={() => setIsPeeking(true)}
                                                onMouseUp={() => setIsPeeking(false)}
                                                onMouseLeave={() => setIsPeeking(false)}
                                                className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-bold cursor-help transition-colors shadow-sm select-none"
                                            >
                                                Hold to Peek 👀
                                            </button>
                                        </div>
                                        
                                        <textarea
                                            className={`w-full p-6 border-2 border-gray-300 rounded-xl h-64 text-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-300 ${
                                                isPeeking ? 'blur-none text-black' : 'blur-xl text-gray-400 no-select'
                                            }`}
                                            placeholder={isPeeking ? "Keep typing..." : "Your text is blurred on the projector..."}
                                            value={studentText}
                                            onChange={(e) => setStudentText(e.target.value)}
                                            spellCheck={isPeeking}
                                        />
                                        
                                        {!isPeeking && (
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-gray-400 opacity-50">
                                                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0l-3.29-3.29"></path></svg>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-center pt-4">
                                        <p className="text-sm text-gray-500 font-medium">
                                            * Class: Don't look! Wait for the voting phase.
                                        </p>
                                        <button
                                            onClick={startVotingPhase}
                                            disabled={studentText.length < 5}
                                            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-lg shadow-md hover:shadow-lg"
                                        >
                                            Submit Answer
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3 & 4: VOTING AND REVEAL */}
                            {(step === 'voting' || step === 'reveal') && (
                                <div className="space-y-10 animate-fade-in">
                                    <div className="text-center bg-gray-50 p-6 rounded-xl border border-gray-200">
                                        <h2 className="text-3xl font-bold mb-3">Which one is the AI?</h2>
                                        <p className="text-xl text-gray-600">Prompt: <span className="font-bold text-gray-900">{topic}</span></p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {options.map((opt, index) => (
                                            <div key={index} className="flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1">
                                                <div className="bg-white p-8 rounded-t-2xl flex-grow shadow-lg border border-gray-200 relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-200"></div>
                                                    <h3 className="text-2xl font-bold text-gray-400 mb-6 pb-4 border-b-2 border-gray-100 uppercase tracking-widest">
                                                        Option {index === 0 ? 'A' : 'B'}
                                                    </h3>
                                                    <p className="text-2xl leading-relaxed text-gray-800">{opt.text}</p>
                                                </div>
                                                
                                                {/* The Reveal Banner */}
                                                <div className={`p-6 rounded-b-2xl text-center text-3xl font-extrabold shadow-lg transition-all duration-700 ${
                                                    step === 'reveal' 
                                                    ? opt.author.includes('AI') 
                                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                                                        : 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                                                    : 'bg-gray-200 text-gray-300' 
                                                }`}>
                                                    {step === 'reveal' ? opt.author : '???'}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-10 flex justify-center">
                                        {step === 'voting' ? (
                                            <button
                                                onClick={revealAnswers}
                                                className="bg-gray-900 hover:bg-black text-white font-bold py-5 px-16 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-2xl tracking-wide"
                                            >
                                                Reveal Authors
                                            </button>
                                        ) : (
                                            <button
                                                onClick={resetDemo}
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-10 rounded-full transition-colors text-lg"
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

        // Render the app
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<TuringTestDemo />);
    </script>
</body>
</html>
