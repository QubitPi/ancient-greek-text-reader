import "./styles.css";

const DescriptionBox = () => {
  return (
      <div className="text-box">
        <p>
          Ancient Greek is a phonetically-lost language, because no one knows the correct pronunciation of such an
          ancient language. This imposes big challenge for language learners. This project offers a unique solution
          using Natural Language Processing AI that produces fairly accurate readings of famous books written in Ancient
          Greek.
        </p>

        <p>
          The example audio below is the AI-generated reading of the book, <a href="https://archive.org/details/XenophonMemorabiliaOeconomicusSymosiumloebMarchant_201903">Oeconomicus</a>,
          written by the famous ancient Greek Philosopher and Historian Xenophon
        </p>

        <p align="center">
          <b>This website is a MVP now. More enhancements on UI and completion of audio contents will be added constantly.</b>
        </p>
      </div>
  );
};

export default DescriptionBox;
