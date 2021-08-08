import marked from "marked";

const Markdown = ({ input }) => {
    const markdownText = marked(input, {
        ...marked.options,
        gfm: true,
        breaks: true,
    });
    return (
        <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdownText }}
        ></div>
    );
};

export default Markdown;
