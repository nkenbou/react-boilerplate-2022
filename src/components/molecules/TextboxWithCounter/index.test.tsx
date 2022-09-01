import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import * as stories from "./index.stories";

expect.extend(toHaveNoViolations);

const { Template, TypeText, LimitOvered, ShowTooltip } =
  composeStories(stories);

describe("components/molecules/TextboxWithCounter", () => {
  test("props で与えたタイトルが表示されること", async () => {
    const { container } = render(<Template />);
    expect(screen.getByText("姓名")).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  test("カウンターの表示は「3/5」になっていること", async () => {
    const { container } = render(<TypeText />);
    await TypeText.play({
      canvasElement: container,
    });
    expect(screen.getByText("3/5")).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  test("入力文字数が超過している場合、アラートが表示されること", async () => {
    const { container } = render(<LimitOvered />);
    await LimitOvered.play({
      canvasElement: container,
    });
    expect(screen.getByRole("alert")).toHaveTextContent(
      "文字数制限を超えています"
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test("小見出しにマウスオーバーすると、ツールチップが表示されること", async () => {
    const { container } = render(<ShowTooltip describe="hello" />);
    await ShowTooltip.play({
      canvasElement: container,
    });
    expect(screen.getByRole("tooltip")).toHaveTextContent("hello");
    expect(await axe(container)).toHaveNoViolations();
  });
});
