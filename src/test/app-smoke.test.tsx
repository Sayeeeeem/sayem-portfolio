import { act } from "react-dom/test-utils";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import App from "@/App";

describe("App smoke test", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders without crashing", async () => {
    const container = document.createElement("div");
    container.id = "root";
    document.body.appendChild(container);

    const root = createRoot(container);

    await act(async () => {
      root.render(<App />);
    });

    expect(container.textContent).toContain("Sayem");
  });
});