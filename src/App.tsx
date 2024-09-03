import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import "github-markdown-css/github-markdown.css";
import { Terminal } from "./components/terminal/terminal";
import { SquareTerminal } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarkdownRenderer = ({ markdown }: { markdown: any }) => {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
    />
  );
};

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [openTerminal, setOpenTerminal] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/andersonzero0/andersonzero0/main/README.md"
    )
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <main className="main">
      <div className="header">
        <img
          className="avatar"
          src="https://github.com/andersonzero0.png"
          alt="avatar"
        />
        <p className="name">Anderson Viana</p>
      </div>

      <div className="markdown-body div-main">
        <MarkdownRenderer markdown={markdown} />
      </div>

      <button className="open-terminal" onClick={() => setOpenTerminal(true)}>
        <SquareTerminal />
        Open Terminal
      </button>
      <Terminal open={openTerminal} setOpen={setOpenTerminal} />

      <footer className="footer">
        <p>© {new Date().getFullYear()} Anderson Viana</p>
      </footer>
    </main>
  );
};

export default App;
// https://raw.githubusercontent.com/andersonzero0/andersonzero0/main/README.md
