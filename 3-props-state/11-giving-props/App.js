// Giving Props 💪🏻
// Codédex

export default function App() {
  const catalogItems = [
    {
      name: "Dan",
      category: "Developer",
      website: "dandeveloper.dev"
    },
    {
      name: "Fatima",
      category: "Doctor",
      website: "fatimahealth.com"
    },
    {
      name: "Juan",
      category: "Community Leader",
      website: "juan.me"
    }
  ]
  return (
    <div>
      {catalogItems.map(function (item) {
        return (
          <div>
            <h2>{item.name}</h2>
            <h3>Specialty: {item.category}</h3>
            <a href={item.website}>Learn more</a>
          </div>
        )
      })}
    </div>
  )
}