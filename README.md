# 🎮 Advanced Tic Tac Toe Game

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-2563eb?style=for-the-badge)](https://tic-tac-toe-ui-virid.vercel.app/)
[![GitHub](https://img.shields.io/badge/🐙_GitHub-Source_Code-181717?style=for-the-badge&logo=github)](https://github.com/saurabhduhariya)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/saurabh-prajapat-7638a5320/)

### A modern, feature-rich Tic Tac Toe game with AI, user authentication, and responsive design

</div>

---

## ✨ Features

### 🎮 **Game Modes**
- 🤖 **AI vs Human** - Challenge an intelligent AI opponent
- 👥 **Human vs Human** - Play with friends locally
- 🎯 **Multiple Match Types** - Single game, Best of 3/5/7, or custom rounds

### 🔐 **User Authentication**
- 📝 **Sign Up/Login** - Secure user registration and authentication
- 👤 **User Profiles** - Personalized gaming experience
- 🔒 **JWT Authentication** - Secure session management

### 📱 **Responsive Design**
- 📱 **Mobile Optimized** - Perfect gameplay on all devices
- 💻 **Desktop Enhanced** - Rich experience on larger screens
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations

### 🧠 **Smart AI**
- 🎯 **Minimax Algorithm** - Challenging AI opponent
- ⚡ **Real-time Moves** - Instant AI responses
- 🎲 **Strategic Gameplay** - AI makes optimal moves

### 🎪 **Advanced Features**
- 📊 **Match Tracking** - Round-by-round score tracking
- 🏆 **Win Detection** - Animated strike-through for wins
- 🔄 **Game State Management** - Seamless game flow
- 💫 **Smooth Animations** - Engaging visual feedback

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- MongoDB database (local or cloud)

### 1. Clone the Repository
```bash
git clone https://github.com/saurabhduhariya/tic-tac-toe.git
cd tic-tac-toe
```

### 2. Backend Setup
```bash
cd Backend
npm install

# Create .env file with your MongoDB URI
echo "MONGO_URI=your_mongodb_connection_string" > .env
echo "JWT_SECRET=your_jwt_secret_key" >> .env

npm start
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev
```

### 4. Open Your Browser
Navigate to `http://localhost:5173` and start playing! 🎮

---

## 🎮 How to Play

### 🎯 **Game Modes**
1. **vs AI**: Challenge the computer - you're X, AI is O
2. **vs Human**: Local multiplayer - take turns on the same device

### 🏆 **Match Types**
- **Single Game**: One quick round
- **Best of 3/5/7**: First to win majority of rounds
- **Custom**: Set your own number of rounds (1-100)

### 📱 **Controls**
- **Desktop**: Click on any empty square
- **Mobile**: Tap on any empty square
- **Responsive**: Seamless experience across all devices

---

## 🏗️ Project Structure

```
tic-tac-toe/
├── 📁 Frontend/                 # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/       # React components
│   │   │   ├── 📁 Auth/         # Authentication components
│   │   │   ├── 📁 Game/         # Game-related components
│   │   │   ├── 📁 Sidebar/      # Game controls
│   │   │   ├── 📁 Tic-Tac-Toe/  # Core game components
│   │   │   └── 📁 AI/           # AI logic
│   │   ├── 📁 utils/            # Utility functions
│   │   └── 📄 index.css         # Global styles
│   └── 📄 package.json
├── 📁 Backend/                  # Node.js backend
│   ├── 📁 Controllers/          # Route controllers
│   ├── 📁 Middleware/           # Auth middleware
│   ├── 📁 models/               # Database models
│   ├── 📁 Routes/               # API routes
│   └── 📄 index.js              # Server entry point
└── 📄 README.md                 # You are here! 📍
```

---

## 🧠 AI Algorithm

The AI uses the **Minimax algorithm** with the following features:

- 🎯 **Perfect Play**: AI never loses, only wins or draws
- ⚡ **Optimized Performance**: Efficient move calculation
- 🎲 **Strategic Depth**: Looks ahead to make optimal moves
- 🔮 **Predictive Analysis**: Considers all possible outcomes

```javascript
// Simplified AI logic
function minimax(board, depth, isMaximizing) {
  // Base cases: check for terminal states
  if (checkWinner(board) === AI_PLAYER) return 10 - depth;
  if (checkWinner(board) === HUMAN_PLAYER) return depth - 10;
  if (isDraw(board)) return 0;
  
  // Recursive minimax with alpha-beta pruning
  // ... (full implementation in /Frontend/src/components/AI/aiLogic.js)
}
```

---

## 🌟 Key Features Breakdown

### 🎨 **UI/UX Features**
- ✨ Smooth animations and transitions
- 🎯 Interactive hover effects
- 📱 Mobile-first responsive design
- 🌙 Dark theme with cyan accents
- 🔄 Loading states and feedback

### 🔧 **Technical Features**
- ⚡ Fast React with Vite
- 🎨 Utility-first CSS with Tailwind
- 🔐 Secure JWT authentication
- 📊 Real-time game state management
- 🚀 Optimized for performance

### 🎮 **Game Features**
- 🏆 Win detection with strike animation
- 📊 Multi-round match support
- 🎯 Custom round configuration
- 💾 Game state persistence
- 🔄 Instant game reset

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd Frontend
npm run build
# Deploy to Vercel
```

### Backend (Vercel)
```bash
cd Backend
# Configure vercel.json for serverless deployment
# Deploy to Vercel
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. 🍴 **Fork the repository**
2. 🌟 **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. 💾 **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. 📤 **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. 🎯 **Open a Pull Request**

### 🐛 Bug Reports
Found a bug? Please open an issue with:
- 📝 Clear description
- 🔄 Steps to reproduce
- 💻 Expected vs actual behavior
- 📱 Device/browser information

---

## 👨‍💻 Developer

<div align="center">

### **Saurabh Prajapat**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/saurabhduhariya)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saurabh-prajapat-7638a5320/)

*Full Stack Developer passionate about creating engaging web experiences*

</div>

---

## 🙏 Acknowledgments

- 🎮 Inspiration from classic Tic Tac Toe
- 🧠 Minimax algorithm for AI implementation
- 🎨 Modern UI/UX design principles
- 📱 Mobile-first responsive design approach

---

<div align="center">

### 🎮 **Ready to Play?**

[![Play Now](https://img.shields.io/badge/🎯_PLAY_NOW-Start_Game-2563eb?style=for-the-badge&size=large)](https://tic-tac-toe-ui-virid.vercel.app/)

**Made with ❤️ by [Saurabh Prajapat](https://github.com/saurabhduhariya)**

⭐ **If you enjoyed this project, please give it a star!** ⭐

</div>

---

<div align="center">
<sub>🎮 Game on! • 🚀 Built with modern web technologies • 📱 Responsive design • 🧠 Smart AI</sub>
</div>
