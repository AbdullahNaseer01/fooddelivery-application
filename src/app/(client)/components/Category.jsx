import CategoryCard from "./CategoryCard";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Mexican",
    count: "12 Products",
    img: "../images/category__4.webp",
    category:"mexican",
  },
  {
    id: 2,
    name: "Chinese",
    count: "10 Products",
    img: "../images/category__5.webp",
    category:"chinese",
  },
  {
    id: 3,
    name: "Indian",
    count: "5 Products",
    img: "../images/category__7.webp",
    category:"indian",
  },
  {
    id: 4,
    name: "Fast-Food",
    count: "9 Products",
    img: "../images/icons8-pizza-96.png",
    category:"fast-food",
  },
  {
    id: 5,
    name: "Desserts",
    count: "9 Products",
    img: "../images/icons8-pizza-96.png",
    category:"desserts",
  },
  {
    id: 6,
    name: "Beverages",
    count: "9 Products",
    img: "../images/icons8-tapas-100.png",
    category:"beverages",
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
    name: "Others",
    count: "3 Products",
    img: "../images/icons8-tapas-100.png",
    category:"others",
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
