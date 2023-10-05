import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders title", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const title = getByText(/AnimeDaily/i, { selector: "h1" });
  expect(title).toBeInTheDocument();
});
