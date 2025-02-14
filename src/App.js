import React, { useState } from "react";

function App() {
  const [yesSize, setYesSize] = useState(18);
  const [noMessageIndex, setNoMessageIndex] = useState(0);
  const [showLove, setShowLove] = useState(false);

  const noMessages = [
    "No",
    "Are you sure? 😢",
    "Think again! 🥺",
    "Really? 💔",
    "Last chance! 😭",
    "You’re breaking my heart! 💘",
    "Don't do this! 😭",
    "One last chance, pretty please?🥺",
    "Say Yes, and I’ll bring chocolates! 🍫",
  ];

  const handleNoClick = () => {
    if (yesSize < 150) {
      setYesSize(yesSize + 15); // Increase "Yes" button size
      setNoMessageIndex((prevIndex) => (prevIndex + 1) % noMessages.length);
    } else {
      setShowLove(true); // Show love decorations
    }
  };

  return (
    <div style={{ ...styles.container, ...(showLove ? styles.loveTheme : {}) }}>
      <h1 style={showLove ? styles.hidden : styles.title}>💖 Will You Be My Valentine? 💖</h1>
      
      {!showLove && (
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.yesButton, fontSize: yesSize }}
            onClick={() => setShowLove(true)}
          >
            Yes
          </button>

          {yesSize < 150 && (
            <button style={styles.noButton} onClick={handleNoClick}>
              {noMessages[noMessageIndex]}
            </button>
          )}
        </div>
      )}

      {showLove && (
        <div style={styles.loveMessage}>
          <h1>❤️ Yay! Love Wins! ❤️</h1>
          <p>You are the most special person in my life! 💕</p>
          <div style={styles.heartContainer}>
            {"❤️".repeat(100)}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#FFE4E1",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease-in-out",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    width: "100%",
  },
  yesButton: {
    padding: "15px 30px",
    backgroundColor: "#FF69B4",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    maxWidth: "90%",
    textAlign: "center",
  },
  noButton: {
    padding: "10px 20px",
    backgroundColor: "#B22222",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    maxWidth: "90%",
    textAlign: "center",
  },
  loveTheme: {
    backgroundColor: "#FF1493",
    color: "white",
    textAlign: "center",
  },
  loveMessage: {
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out",
  },
  heartContainer: {
    fontSize: "24px",
    marginTop: "20px",
  },
  hidden: {
    display: "none",
  },
};

export default App;
