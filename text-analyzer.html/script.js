function analyzeText() {
    let text = document.getElementById("inputText").value;
    let resultDiv = document.getElementById("result");

    if (text.trim() === "") {
        resultDiv.innerHTML = `<p class="error">❌ Please enter some text!</p>`;
        resultDiv.style.display = "block";
        return;
    }

    let charCount = text.length;
    let wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    let reversedText = text.split('').reverse().join('');

    resultDiv.innerHTML = `
        <h2>✅ Analysis Results:</h2>
        <p><strong>Total Characters:</strong> ${charCount}</p>
        <p><strong>Total Words:</strong> ${wordCount}</p>
        <p><strong>Reversed Text:</strong></p>
        <div class="reversed-box" style="background: white; padding: 15px; border: 1px solid #0056b3; border-radius: 8px; font-family: monospace; white-space: pre-wrap;">
            ${reversedText}
        </div>
    `;
    resultDiv.style.display = "block";
}