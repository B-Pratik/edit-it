import { useCallback, useState } from "preact/hooks";
import Navbar from "./Navbar";
import { performAction } from "../help";

const Toolkit = ({ canvas, context }) => {
  const [imageLoaded, setLoaded] = useState(false);

  const invert = useCallback(async () => {
    if (imageLoaded) {
      const imageData = context.current.getImageData(
        0,
        0,
        canvas.current.width,
        canvas.current.height
      );
      const data = await performAction("invert", imageData.data);
      context.current.putImageData(
        new ImageData(data, canvas.current.width),
        0,
        0
      );
    }
  }, [canvas, context, imageLoaded]);

  const grayscale = useCallback(async () => {
    if (imageLoaded) {
      const imageData = context.current.getImageData(
        0,
        0,
        canvas.current.width,
        canvas.current.height
      );
      const data = await performAction("greyscale", imageData.data);
      context.current.putImageData(
        new ImageData(data, canvas.current.width),
        0,
        0
      );
    }
  }, [canvas, context, imageLoaded]);

  const onUpload = useCallback(
    ({ target: { files: [file] = [] } = {} }) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          canvas.current.width = img.width;
          canvas.current.height = img.height;
          context.current.drawImage(img, 0, 0);
          setLoaded(true);
        };
        img.src = event.target.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [canvas, context]
  );

  const onSave = useCallback(() => {
    if (imageLoaded) {
      const image = canvas.current
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.setAttribute("download", "file.png");
      link.setAttribute("href", image);
      link.click();
    }
  }, [canvas, imageLoaded]);

  return (
    <Navbar
      onUpload={onUpload}
      grayscale={grayscale}
      invert={invert}
      onSave={onSave}
      imageLoaded={imageLoaded}
    />
  );
};
export default Toolkit;
