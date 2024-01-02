import CategoryCard from "./CategoryCard";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Bread & Bakery",
    count: "12 Products",
    img: "../images/category__4.webp",
    category:"bakery-items",
  },
  {
    id: 2,
    name: "Sea Food",
    count: "10 Products",
    img: "../images/category__5.webp",
    category:"fishes",
  },
  {
    id: 3,
    name: "Soft Drinks",
    count: "5 Products",
    img: "../images/category__7.webp",
    category:"soft-drinks-snacks",
  },
  {
    id: 4,
    name: "Pizza",
    count: "9 Products",
    img: "../images/icons8-pizza-96.png",
    category:"pizza",
  },
  {
    id: 5,
    name: "Pizza",
    count: "9 Products",
    img: "../images/icons8-pizza-96.png",
    category:"pizza",
  },
  {
    id: 6,
    name: "Pasta",
    count: "9 Products",
    img: "../images/icons8-tapas-100.png",
    category:"pasta",
  },
  {
    id: 7,
    name: "Starter",
    count: "9 Products",
    img: "../images/icons8-pasta-64.png",
    category:"starter",
  },
  {
    id: 8,
    name: "Sides",
    count: "3 Products",
    img: "../images/icons8-tapas-100.png",
    category:"starter",
  },

];

const Category = () => {
  return (
    <div className="container pt-16">
      <div  className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
        <Link key={el.id} href={`/${el.category}`}  >
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        </Link>
        ))}
       
      </div>
    </div>
  );
};

export default Category;
