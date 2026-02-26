import "./404.css";

export const metadata = {
  title: "* (It's a dog...)",
  description: "Annoying dog",
};

export default function NotFound() {
  const scaleFactor = 1.5;
  const width = 200 * scaleFactor;
  const height = 165 * scaleFactor;

  return (
    <>
      <div className="div-404">
        <div className="dog">
          <img
            src="/annoying-dog.gif"
            alt="404"
            width={width}
            height={height}
          />
        </div>
      </div>
    </>
  );
}

