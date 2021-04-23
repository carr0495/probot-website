import React from "react";
import hero from "../static/images/producthero.png";

function Product(props) {
  return (
    <div style={{ marginTop: 5 }}>
      <img
        alt="Product hero"
        src={hero}
        style={{
          display: "block",
          width: "100%",
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <h1
        style={{
          textAlign: "center",
          color: "#00beff",
          marginBottom: 10,
        }}
      >
        Our Product
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#00beff",
          paddingLeft: "20vw",
          paddingRight: "20vw",
          paddingBottom: "5vh",
        }}
      >
        We work hard so you dont have to! We create robots to alleviate any
        repetitive task your workplace currently faces. This solution promises
        happier employees, and more money in your pocket!
      </p>
    </div>
  );
}
export default Product;

{
  /* <p
style={{
  textAlign: "center",
  color: "#00beff",
  paddingLeft: "20vw",
  paddingRight: "20vw",
  paddingBottom: "10vh",
}}
>
Our top product at the moment is the (need a name). (need a name) is
used to automatically redact sensitive information from documents you
feed through it. Its main features include:
<p>- Fully customizable, encrypted, password protected blacklist</p>
<p>- Options to redact information such as names, SINs, or images</p>
<p>- Highlighting text instead of full redaction for human review</p>
<p>
  - Redact single files (docx, csv, xls, pdf, txt) or entire folders of
  documents
</p>
</p>
<img src={poster} style={{ width: "50vw" }} />
<p
style={{
  textAlign: "center",
  color: "#00beff",
  paddingLeft: "20vw",
  paddingRight: "20vw",
  paddingBottom: "5vh",
}}
>
<h2>Blacklist</h2>
Our project features a fully customizable, encrypted blacklist .csv or
.txt file. Users are able to edit the blacklist file with any string
(word) they want redacted in a document. When loading the blacklist file
into the project, the user must provide the proper password to decrypt
the blacklist file, and then the user is free to use the blacklist for
any selected file or folder to scrub.
<h2>Options</h2>
The options menu gives the user more options for redaction. On top of
the blacklist redaction, you’re able to choose to redact names, images
and SINs from here as well.
<h2>File Scrubbing</h2>
Our project supports multiple text file formats, including .txt, .docx,
.pdf and .csv. Once you have your blacklist set, you can select the file
that you want to scrub, and the bot will redact everything set in the
blacklist. Along with the blacklist, there are also options to remove
images or social insurance numbers and names.
<h2>Folder Scrubbing</h2>
Along with file scrubbing, our project also supports scrubbing entire
folders. It works the same way as the individual file scrubbing, except
you’re putting an entire folder through the robot instead of a single
file.
</p>
</div> */
}
