import { Card } from "./Card";
export const Accessories = () => {
  const accessories = [
    {
      id: 1,
      model: "Realme Buds T110",
      tagline: "Listen in Full Color",
      price: 4999,
      image: "/src/assets/acc1.webp",
      isNew: true,
    },
    {
      id: 2,
      model: "realme Buds Q",
      tagline: "Music Never Ends",
      price: 7999,
      image: "/src/assets/acc2.webp",
      isNew: false,
    },
  ];
  return (
    <div className="phone-grid">
      {accessories.map((accessories) => (
        <Card key={accessories.id} {...accessories} />
      ))}
    </div>
  );
};
