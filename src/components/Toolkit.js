import { useCallback, useState } from "preact/hooks";
import Navbar from "./Navbar";
import { performAction } from "../help";

const Toolkit = ({ canvas, context }) => {
  const [imageLoaded, setLoaded] = useState(false);

  const callAction = useCallback(
    async (action) => {
      if (imageLoaded) {
        const imageData = context.current.getImageData(
          0,
          0,
          canvas.current.width,
          canvas.current.height
        );
        const updated = await performAction(action, imageData.data);
        imageData.data.set(updated);
        context.current.putImageData(imageData, 0, 0);
      }
    },
    [canvas, context, imageLoaded]
  );

  const invert = useCallback(() => callAction("invert"), [callAction]);

  const grayscale = useCallback(() => callAction("greyscale"), [callAction]);

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

      if (window.navigator.msSaveOrOpenBlob) {
        const dataURItoBlob = (dataURI) => {
          let binary = atob(dataURI.split(",")[1]);
          let array = [];
          for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
          }
          return new Blob([new Uint8Array(array)], { type: "image/png" });
        };

        let blob = dataURItoBlob(image);
        window.navigator.msSaveOrOpenBlob(blob, "my-image.png");
      } else {
        const link = document.createElement("a");
        link.setAttribute("download", "file.png");
        link.setAttribute("href", image);
        link.click();
      }
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
