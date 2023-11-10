export default function WhyColabSection() {
  const dataList = [
    {
      header: "Access enabling infrastructure",
      paragraph:
        "Co-Labs membership offers state-of-the-art facilities, equipment, and services to foster innovation in the biotechnology sector.",
      icon: "",
    },
    {
      header: "A collaborative eco system",
      paragraph:
        "Join a thriving community of like-minded researchers, entrepreneurs, and professionals, encouraging collaboration and driving advancements in your field.",
      icon: "",
    },
    {
      header: "Educational opportunities",
      paragraph:
        "Benefit from transformative educational programmes focused on STEM, critical and living systems thinking, and eco-literacy.",
      icon: "",
    },
    {
      header: "Support a circular business model",
      paragraph:
        "By becoming a member, you’re actively contributing to reducing the environmental impact of innovation via our unique lab-as-a-service business model.",
      icon: "",
    },
    {
      header: "Accelerate innovation",
      paragraph:
        "Tap into Co-Labs’ resources, expertise, and networks to catalyse your research and development efforts, bringing your ideas to life.",
      icon: "",
    },
    {
      header: "Foster connections",
      paragraph:
        "Engage with industry partners, government agencies, and academic institutions through Co-Labs’ extensive network, amplifying your impact and opening doors for collaboration.",
      icon: "",
    },
    {
      header: "Tailored support",
      paragraph:
        "Receive personalised guidance and assistance to help you navigate the complexities of the biotechnology landscape and accelerate your success.",
      icon: "",
    },
    {
      header: "Champion a sustainable future",
      paragraph:
        "Join a movement dedicated to creating systemic change and driving win-win-win solutions for individuals, communities, and ecosystems.",
      icon: "",
    },
  ];

  return (
    <div>
      <div className="container">
        <h3 className="max-w-[950px] my-20">
          By facilitating systems innovation we believe we can generate social,
          economic and environmental outcomes that will benefit the health and
          well-being of people and the planet.
        </h3>
      </div>
      <div className="container narrow flex flex-wrap justify-between ">
        <div className="w-[200px] mb-5 flex-shrink-0">
          <span className="rounded-[20px] lg:py-[5px] px-[10px] border border-black">
            Why CoLabs
          </span>
        </div>
        <div className="grid grid-cols-3 w-full gap-[10px]">
          {dataList.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] p-5 bg-white border flex flex-col justify-between"
            >
              <div>
                <h4 className="mb-[15px] max-w-[260px]">{item.header}</h4>
                <p className="mb-[50px]">{item.paragraph}</p>
              </div>
              <span className="w-[50px] h-[50px] rounded-full aspect-square bg-yellow-700"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
