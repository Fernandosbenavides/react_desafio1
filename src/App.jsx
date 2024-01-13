import Title from "./components/Titulo/Titulo";
import CustomCard from "./components/Cartas/Cartas";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

const App = () => {
  const cardsData = [
    {
      title: "Totodile",
      content:
        "Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.",
      imageUrl:
        "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e7/latest/20230523210701/Totodile.png/800px-Totodile.png",
      tags: [{ text: "Tipo: Agua", backgroundColor: "info" }],
    },
    {
      title: "Chikorita",
      content:
        "Al luchar, Chikorita agita la hoja que tiene para mantener a raya al rival. Pero, al mismo tiempo, libera una suave fragancia que apacigua el encuentro y crea un ambiente agradable y de amistad.",
      imageUrl:
        "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4e/latest/20230523204350/Chikorita.png/1200px-Chikorita.png",
      tags: [{ text: "Tipo: Planta", backgroundColor: "success" }],
    },
    {
      title: "Cyndaquil",
      content:
        "Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado, las llamas son fieras, pero, si está cansado, solo consigue echar algunas chispas que no llegan a cuajar en una completa combustión.",
      imageUrl:
        "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20200307021608/Cyndaquil.png/800px-Cyndaquil.png",
      tags: [{ text: "Tipo: Fuego", backgroundColor: "danger" }],
    },
    {
      title: "Pikachu",
      content:
        "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas. A veces tiene mal carácter y es dificil de controlar.",
      imageUrl:
        "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/1200px-Pikachu.png",
      tags: [{ text: "Tipo: Eléctrico", backgroundColor: "warning" }],
    },
  ];

  return (
    <div className="container">
      <Title text="Escoge tu Pokémon Inicial" className="my-title" />
      <div className="cards-container">
        {cardsData.map((card) => {
          return <CustomCard key={`${card.title}`} {...card} />;
        })}
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default App;
