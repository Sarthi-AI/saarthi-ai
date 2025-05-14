const fs = require('fs');
const PDFDocument = require('pdfkit');

const messages = {
    en: {
        title: "Find the right government scheme for you",
        subtitle: "Ask about any government scheme by speaking or typing",
        instruction: "Press the microphone button and start speaking or type your question below",
        placeholder: "Type your question here...",
        searchButton: "Search",
        example1: "What schemes are available for women entrepreneurs?",
        example2: "I'm a farmer looking for subsidies for irrigation",
        example3: "Are there schemes for education loans?"
    },
    hi: {
        title: "आपके लिए सही सरकारी योजना खोजें",
        subtitle: "बोलकर या टाइप करके किसी भी सरकारी योजना के बारे में पूछें",
        instruction: "माइक्रोफोन बटन दबाएं और बोलना शुरू करें या नीचे अपना प्रश्न टाइप करें",
        placeholder: "अपना प्रश्न यहां लिखें...",
        searchButton: "खोजें",
        example1: "महिला उद्यमियों के लिए कौन सी योजनाएं उपलब्ध हैं?",
        example2: "मैं सिंचाई के लिए सब्सिडी की तलाश में एक किसान हूं",
        example3: "क्या शिक्षा ऋण के लिए योजनाएं हैं?"
    },
    kn: {
        title: "ನಿಮಗೆ ಸರಿಯಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಯನ್ನು ಹುಡುಕಿ",
        subtitle: "ಮಾತನಾಡುವ ಅಥವಾ ಟೈಪ್ ಮಾಡುವ ಮೂಲಕ ಯಾವುದೇ ಸರ್ಕಾರಿ ಯೋಜನೆಯ ಬಗ್ಗೆ ಕೇಳಿ",
        instruction: "ಮೈಕ್ರೋಫೋನ್ ಬಟನ್ ಒತ್ತಿ ಮತ್ತು ಮಾತನಾಡಲು ಪ್ರಾರಂಭಿಸಿ ಅಥವಾ ಕೆಳಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ",
        placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
        searchButton: "ಹುಡುಕಿ",
        example1: "ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಾವ ಯೋಜನೆಗಳು ಲಭ್ಯವಿದೆ?",
        example2: "ನಾನು ನೀರಾವರಿಗಾಗಿ ಸಬ್ಸಿಡಿ ಹುಡುಕುತ್ತಿರುವ ರೈತ",
        example3: "ಶಿಕ್ಷಣ ಸಾಲಕ್ಕೆ ಯೋಜನೆಗಳಿವೆಯೇ?"
    }
};

// 1️⃣ Collect keys dynamically
const keys = Object.keys(messages.en);

// 2️⃣ Prepare data as English → Hindi → Kannada lines
const lines = [];
keys.forEach((key) => {
    lines.push(`EN: ${messages.en[key]}`);
    lines.push(`HI: ${messages.hi[key]}`);
    lines.push(`KN: ${messages.kn[key]}`);
    lines.push(''); // empty line for separation
});

// 3️⃣ Create and write PDF
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('multilingual_dataset.pdf'));

doc.fontSize(12);
lines.forEach((line) => {
    doc.text(line);
});

doc.end();

console.log('✅ PDF created as multilingual_dataset.pdf');
