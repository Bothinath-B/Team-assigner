# 🚀 Team Assigner

**Team Assigner** is a powerful and user-friendly web application designed to automate the process of team formation.  
Whether you're organizing a classroom activity, a group project, or a fun competition, Team Assigner makes it effortless to create balanced and random teams.  

✅ Now supports **CSV & PDF downloads**  
✅ Includes **custom fonts** with jsPDF  
✅ Deployed with **CI/CD on Vercel** for seamless updates  

---

## ✨ Features
- 🔢 **Dynamic Input**: Enter the total number of members and members per team.
- 🎲 **Randomized Teams**: Teams are generated randomly and uniquely every time.
- 📄 **CSV Download**: Export the team formation as a CSV file.
- 📑 **PDF Download**: Save teams as a neat PDF using **jsPDF**.
- 🔠 **Custom Fonts**: Embedded fonts for better PDF styling.
- 🔄 **Reset Option**: Clear inputs and results with a single click.
- 📱 **Responsive Design**: Works seamlessly on desktop & mobile.
- ⚡ **CI/CD Deployment**: Automatic deployment to **Vercel** on push.

---

## 🌐 Live Demo
👉 [Click here to try it on Vercel](https://team-assigner-lime.vercel.app/)  
👉 Or [GitHub Pages Demo](https://bothinath-b.github.io/Team-assigner/)  

---

## 🚀 Getting Started
1. **Clone the repository:**
    ```bash
    git clone https://github.com/Bothinath-B/Team-assigner.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd Team-assigner
    ```
3. **Install dependencies (if any):**
    ```bash
    npm install
    ```
4. **Open the application:**
    ```bash
    npm run dev   # if using Vite
    ```
    Or simply open `index.html` in your browser:
    ```bash
    start index.html
    ```
    (On macOS/Linux, use `open index.html`)

---

## 🛠️ Technologies Used
- **HTML5** – Structuring the webpage  
- **CSS3** – Styling and responsive design  
- **JavaScript (ES6)** – Team assignment logic  
- **jsPDF** – For generating downloadable PDF reports  
- **Custom Fonts (TTF)** – Embedded with jsPDF  
- **Vercel (CI/CD)** – Automatic deployment  

---

## 🎯 How It Works
1. Input the **Total Members**.  
2. Enter the **Members Per Team**.  
3. Click **Assign Teams** to generate random teams.  
4. View results in the **Result Section**.  
5. Click **Download CSV** or **Download PDF** to export the team list.  
6. Click **Reset** to clear inputs and outputs.  

---

## 📁 Project Structure
Team-assigner/
│
├── .github/                
├── .vite/                  
├── assets/                 
│   ├── Caveat-Regular.ttf
│   ├── EduNSWACTCursive-VariableFont_wght.ttf
│   ├── registerCaveat.js
│   └── registerEduFont.js
│
├── node_modules/           
├── index.html              
├── script.js               
├── style.css               
├── .gitignore              
├── README.md               
└── package.json            
