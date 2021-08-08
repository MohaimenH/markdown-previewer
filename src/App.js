import { useState } from "react";

import Text from "./Text";
import Markdown from "./Markdown";

import "./style.css";

const App = () => {
    const [text, setText] = useState(
        "# Enter some markdown here.\n## You can see a preview below.\n>[Visit freeCodeCamp!](https://freecodecamp.org)\n>Visit Them Cause They're Great!\n\n**This** is an ``in-line code``\n```\nThis,\nhowever,\nis a multi-line code-block.\n```\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n1. And a list item"
    );
    // const [markdown, setMarkdown] = useState(
    //     "Enter some text to see preview..."
    // );

    const textChangeHandler = (newText) => {
        setText(newText);
    };

    return (
        <div>
            <h1>No Nonsense Markdown Preview</h1>
            <h2 style={{ color: "darkred", textDecoration: "underline" }}>
                Enter Text Here:
            </h2>
            <Text text={text} setText={textChangeHandler} />
            <h2 style={{ color: "darkred", textDecoration: "underline" }}>
                Preview:
            </h2>
            <Markdown input={text} />
        </div>
    );
};

export default App;
