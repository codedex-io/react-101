// Travel Gallery 📸
// Codédex

export default function App() {
  const barcelonaImage = <img src={"https://i.imgur.com/qaQNzqi.png"}  alt="Barcelona" />;
  const tokyoImage = <img src={"https://i.imgur.com/OAx1wzO.png"}  alt="Tokyo" />;
  const ohioImage = <img src={"https://i.imgur.com/CxJjltu.png"}  alt="Ohio" />;

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
