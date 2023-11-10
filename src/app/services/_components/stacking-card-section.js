import "./stacking-card-section.css";
export default function StackingCardSection() {
  const dataList = [
    {
      tags: "Lab Space",
      header:
        "Access fully equiped wet and dry lab spaces, essential equipment and amenities.",
      paragraph: "Designed to foster innovation and collaboration.",
      image: "lab-spaces.webp",
      bgColor: "#bed2f5",
      paragraphColor: "#0046c7",
    },
    {
      tags: "Build a Lab",
      header:
        "Building and designing labs that are tailored and fit-for-purpose Australia wide.",
      paragraph: "Take your project from zero to one.",
      image: "build-a-lab.webp",
      bgColor: "#dcb688",
      paragraphColor: "",
    },
    {
      tags: "Innovation Facilitation",
      header:
        "Offering expertise across various stages of the startup lifecycle.",
      paragraph:
        "Refine your idea, access marketing support, and join a collaborative community.",
      image: "innovation.webp",
      bgColor: "#d9db4d",
      paragraphColor: "",
    },
    {
      tags: "Office Space",
      header:
        "Offering expertise across various stages of the startup lifecycle.",
      paragraph:
        "Refine your idea, access marketing support, and join a collaborative community.",
      image: "office-spaces.webp",
      bgColor: "#bfb9e3",
      paragraphColor: "",
    },
  ];
  return (
    <div>
      <div class="container">
        <div className="">HELLOOOO</div>
        <ul id="#card-list">
          {dataList.map((item, index) => (
            <li
              className="h-[70vh] max-h-[850px] w-full sticky card"
              id={`card${index + 1}`}
              key={index}
            >
              <div class="card-body" style={{ backgroundColor: item.bgColor }}>
                <h2>Card 1</h2>
              </div>
            </li>
          ))}
        </ul>
        {/* <ul id="cards">
          <li class="card" id="card1">
            <div class="card-body">
              <h2>Card 1</h2>
            </div>
          </li>
          <li class="card" id="card2">
            <div class="card-body">
              <h2>Card 2</h2>
            </div>
          </li>
          <li class="card" id="card3">
            <div class="card-body">
              <h2>Card 3</h2>
            </div>
          </li>
          <li class="card" id="card4">
            <div class="card-body">
              <h2>Card 4</h2>
            </div>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
