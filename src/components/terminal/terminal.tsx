import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { ReactTerminal } from "react-terminal";
import { Blog, Help, WelcomeMessage } from "./commands";

export function Terminal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const commands = {
    whoami: "andersonzero0",
    help: <Help />,
    blog: <Blog />,
  };

  const terminalRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging) {
        if (e.clientX - dragStart.x < 0) return;
        if (e.clientY - dragStart.y < 0) return;
        if (terminalRef.current) {
          if (
            e.clientX - dragStart.x >
            window.innerWidth - terminalRef.current.clientWidth
          )
            return;
          if (
            e.clientY - dragStart.y >
            window.innerHeight - terminalRef.current.clientHeight
          )
            return;
        }
        setPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
      }
    },
    [dragging, dragStart, terminalRef]
  );

  const onMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    const onMouseMoveDOM = (e: MouseEvent) => {
      onMouseMove(e as unknown as React.MouseEvent);
    };

    if (dragging) {
      document.addEventListener("mousemove", onMouseMoveDOM);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMoveDOM);
      document.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMoveDOM);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, onMouseMove, onMouseUp]);

  return (
    <div
      ref={terminalRef}
      className="terminal"
      style={{
        display: open ? "block" : "none",
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      <div className="control-bar" onMouseDown={onMouseDown}>
        <div
          className="button-close"
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <ReactTerminal
        theme="material-dark"
        prompt="user@andersonzero0:~$"
        commands={commands}
        welcomeMessage={<WelcomeMessage />}
        showControlButtons={false}
        showControlBar={false}
        errorMessage="Error. Command not found."
      />
    </div>
  );
}
