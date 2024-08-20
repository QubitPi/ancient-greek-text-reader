import React from 'react';
import logo from './logo.svg';
import pdf from "./assets/pdf.svg"
import audio from "./assets/audio.svg"
import './App.css';
import AudioPlayer from "./components/AudioPlayer";
import Xenophon from "./assets/Xenophon.png"
import tracks from "./components/tracks";

// @ts-ignore
import Οἰκονομικός1PDF from "./assets/Οἰκονομικός-segment-1.pdf"
// @ts-ignore
import Οἰκονομικός1MP3 from "./assets/Οἰκονομικός-segment-1.mp3"

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
            The example audio on the right is the AI-generated reading of the book, Oeconomicus, written by the famous
            ancient Greek Philosopher and Historian Xenophon
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
      <div className="list-box">
        <div className="segment-logo">
          <img src={Xenophon} style={{borderRadius: '20%'}}/>
        </div>

        <p>
          Xenophon's Oeconomicus (Economics) <br></br> Segment 1
        </p>

        <div className="pdf-file">
          <a href={Οἰκονομικός1PDF} download="Οἰκονομικός-segment-1"><img src={pdf} alt="Download icon"/></a>
        </div>

        <div className="audio-file">
          <a href={Οἰκονομικός1MP3} download="Οἰκονομικός-segment-1"><img src={audio} alt="Download icon"/></a>

        </div>
      </div>
    </div>
  );
}

export default App;
