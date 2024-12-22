import { Card } from "./Card";
export const Phone = () => {
  const phones = [
    {
      id: 1,
      model: "realme C75",
      tagline: "Dhulai Horai Hai",
      image: "/src/assets/phone1.webp",
      isNew: true,
    },
    {
      id: 2,
      model: "realme 13+ 5G",
      tagline: "Speed to Victory",
      price: 89999,
      image: "/src/assets/phone2.webp",
      isNew: true,
    },
    {
      id: 3,
      model: "realme GT 6",
      tagline: "Power meets AI",
      price: 149999,
      image: "/src/assets/phone3.webp",
      isNew: true,
    },
    {
      id: 4,
      model: "realme Note 60",
      tagline: "Champion Quality",
      price: 26999,
      image: "/src/assets/phone4.webp",
      isNew: true,
    },
    {
      id: 5,
      model: "realme C61",
      tagline: "Hard to break",
      price: 32999,
      image: "/src/assets/phone5.webp",
      isNew: true,
    },
    {
      id: 6,
      model: "realme C65",
      tagline: "Unbreakable Champion",
      price: 49999,
      image: "/src/assets/phone6.webp",
      isNew: true,
    },
  ];

  return (
    <div className="phone-grid">
      {phones.map((phone) => (
        <Card key={phone.id} {...phone} />
      ))}
    </div>
  );
};
