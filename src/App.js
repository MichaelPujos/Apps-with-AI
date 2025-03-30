import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>Immigration Voices</h1>
        <p>Celebrating the stories and contributions of immigrants through AI-powered storytelling.</p>
      </header>

      <section className="about">
        <h2>About the Project</h2>
        <p>
          This multimedia experience combines generative AI tools to honor immigrant voices in America. 
          From poetry written by Claude AI, music composed with Suno AI, and visuals created using GPT image generation, 
          this project blends technology with humanity.
        </p>
      </section>

      <section className="tools">
        <h2>Tools Used</h2>
        <ul>
          <li>Claude AI – Lyrics generation</li>
          <li>Suno AI – Song composition</li>
          <li>GPT-4/DALL·E – Image generation</li>
          <li>React – Web development</li>
        </ul>
      </section>

      <section className="audio-player">
        <h2>Listen to the Story</h2>
        <audio controls src="your-song.mp3">
          Your browser does not support the audio element.
        </audio>
      </section>

      <section className="gallery">
        <h2>Visual Gallery</h2>
        <div className="image-grid">
          <img src="image1.png" alt="Diverse engineers" />
          <img src="image2.png" alt="Immigrant family" />
          <img src="image3.png" alt="Future of opportunity" />
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Michael H Pujos | Powered by Generative AI | NJIT</p>
        <p><a href="https://github.com/YOUR_GITHUB_USERNAME/immigration-voices-react" target="_blank" rel="noreferrer">View Source on GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
