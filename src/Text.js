const Text = ({ text, setText }) => {
    return (
        <textarea
            style={{ width: "50vw", height: "20vh" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="editor"
        />
    );
};

export default Text;
