import chroma from "chroma-js";
import "./index.less";

const range = document.getElementById("range") as HTMLInputElement;
const box = document.querySelector(".box") as HTMLDivElement;

const MIN_RATIO_COLOR = "green";
const MAX_RATIO_COLOR = "yellow";

const updateBox = (ratio: number) => {
  const updateColor = () => {
    box.style.background = chroma
      .scale([MIN_RATIO_COLOR, MAX_RATIO_COLOR])(ratio / 100)
      .hex();
  };
  const updateShape = () => {
    box.style.borderRadius = `${ratio / 2}%`;
  };
  const updatePosition = () => {
    const { width: rangeWidth } = range.getBoundingClientRect();
    const { width: boxWidth } = box.getBoundingClientRect();
    box.style.left = `${((rangeWidth - boxWidth) * ratio) / 100}px`;
  };

  updateColor();
  updateShape();
  updatePosition();
};

range.addEventListener("input", () => {
  const ratio = parseInt(range.value);
  updateBox(ratio);
});

range.value = "0";
