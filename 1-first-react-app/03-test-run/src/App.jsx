import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Post from "./Post";

function App() {
  return <Post />
}

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<div><App /></div>);
