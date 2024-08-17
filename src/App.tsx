import React from 'react';
import logo from './logo.svg';
import './App.css';
import AudioPlayer from "./components/AudioPlayer";
import tracks from "./components/tracks";

function App() {
  return (
    <div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="QubitPi Logo"/>
          </div>
          <ul>
            <a href="https://github.com/Qubitpi">
              <li>QubitPi</li>
            </a>
            <a href="https://github.com/QubitPi/ancient-greek-reader">
              <li className="github_btn">GitHub</li>
            </a>
          </ul>
        </div>
        <div className="section1">
          <h2>Ancient Greek Pronunciation Reconstruction with AI</h2>
          <span>QubitPi</span>
          <p>
            Ancient Greek is a phonetically-lost language, because no one knows the correct pronunciation of such an
            ancient language. This imposes big challenge for language learners.
          </p>

          <p>
            This project offers a unique solution
            using Natural Language Processing AI that produces fairly accurate readings of famous books written in Ancient
            Greek.
          </p>

          <p>
            The example audio on the right is the AI-generated reading of the book, <a href="https://archive.org/details/XenophonMemorabiliaOeconomicusSymosiumloebMarchant_201903">Oeconomicus</a>,
            written by the famous ancient Greek Philosopher and Historian Xenophon
          </p>
        </div>
        <div className="section2">
          <AudioPlayer tracks={tracks}/>
          <div className="text-box" style={{fontFamily: 'Porson'}}>
            <p>
              Ἤκουσα δὲ ποτε αὐτοῦ καὶ περὶ οἰκονομίας τοιάδε διαλεγομένου. Εἰπέ μοι, ἔφῃ, ὦ Κριτόβουλε, ἄρά γε ἡ
              οἰκονομία ἐπιστήμης τινὸς ὄνομά ἐστιν, ὥσπερ ἡ ἰατρικὴ καὶ καλκευτικὴ καὶ τεκτονική;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
