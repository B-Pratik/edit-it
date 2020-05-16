import { useCallback, useState } from "preact/hooks";
import Navbar from "./Navbar";

const Toolkit = ({ canvas, context }) => {
  const [imageLoaded, setLoaded] = useState(false);

  const invert = useCallback(() => {
    if (imageLoaded) {
      const imageData = context.current.getImageData(
        0,
        0,
        canvas.current.width,
        canvas.current.height
      );
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]; // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
      }

      context.current.putImageData(imageData, 0, 0);
    }
  }, [canvas, context, imageLoaded]);

  const grayscale = useCallback(() => {
    if (imageLoaded) {
      const imageData = context.current.getImageData(
        0,
        0,
        canvas.current.width,
        canvas.current.height
      );
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
      context.current.putImageData(imageData, 0, 0);
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
