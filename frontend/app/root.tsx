import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export default function App() {
  return (
    <html>
      <body>
          <p>Individual Pages Render Below</p>
          <br/>
        <Outlet></Outlet>
      </body>
    </html>
  );
}
