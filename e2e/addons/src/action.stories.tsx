import type { Story } from "@lucamatei/ladle--react";
import { action } from "@lucamatei/ladle--react";

export const Basic: Story<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <>
      <button id="args-button" onClick={onClick}>
        Args
      </button>
      <button id="manual-button" onClick={action("second")}>
        Manual
      </button>
    </>
  );
};

Basic.argTypes = {
  onClick: {
    action: "clicked",
  },
};
