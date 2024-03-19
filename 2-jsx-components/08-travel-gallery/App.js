// Travel Gallery 📸
// Codédex

export default function App() {
  const barcelonaImage = <img src={"https://bit.ly/3HNBfm9"}  alt="Barcelona" />;
  const tokyoImage = <img src={"https://bit.ly/3uqeiSM"}  alt="Tokyo" />;
  const ohioImage = <img src={"https://bit.ly/3whR81p"}  alt="Ohio" />;

  const imageGallery = [
    <li>{barcelonaImage}</li>,
    <li>{tokyoImage}</li>,
    <li>{ohioImage}</li>
  ]

  return (
    <ul>
      {imageGallery}
    </ul>
  );
}