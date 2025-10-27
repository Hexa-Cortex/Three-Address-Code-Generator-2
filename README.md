🧾 README.md
# ⚙️ Three Address Code Generator

A simple **web-based compiler tool** that converts arithmetic expressions into **Three Address Code (TAC)** — an intermediate representation widely used in compiler design.

🔗 **Live Demo:** [three-address-code-generator-2.vercel.app](https://three-address-code-generator-2.vercel.app/)

---

## 🧠 Overview

This project demonstrates how to generate **Three Address Code** from an **arithmetic expression** using **JavaScript**.

Users can input expressions like:



a + b * c - d


and get the equivalent **Three Address Code**:



t1 = b * c
t2 = a + t1
t3 = t2 - d


---

## 🚀 Features

✅ Converts arithmetic expressions to Three Address Code  
✅ Supports basic operators: `+`, `-`, `*`, `/`  
✅ Clean and responsive UI (HTML + CSS)  
✅ Simple algorithm using infix → postfix → TAC conversion  
✅ Hosted on **Vercel**

---

## 🧩 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Vercel** for deployment

---

## 📂 Project Structure



three-address-code/
│
├── index.html # Main HTML file
├── style.css # Styling for the UI
└── script.js # TAC logic and event handling


---

## ⚙️ How It Works

1. The user inputs an arithmetic expression.
2. The script converts infix notation → postfix notation (Shunting Yard Algorithm).
3. Then it generates **Three Address Code** line by line.

---

## 🖥️ Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/three-address-code-generator.git


Navigate into the folder:

cd three-address-code-generator


Open index.html in your browser:

open index.html


(or double-click it)

📸 Screenshot

🧑‍💻 Author

Your Name
📧 your.email@example.com

🌐 three-address-code-generator-2.vercel.app

🪪 License

This project is open-source under the MIT License.
Feel free to modify and use it for learning or teaching compiler design concepts.
