/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      price: 10,
      name: "Stage Speech",
      imageSrc: "https://i.ibb.co/PwKNXjC/photo-5328013012541492171-y.jpg",
      imageAlt: "Stage Speech",
    },
    {
      id: 2,
      name: "Stage Movement",
      price: 10,
      imageSrc:
        "https://i.ibb.co/wKXy3RR/photo-5328013012541492172-y.jpg",
      imageAlt:
        "Stage Movement",
    },
    {
      id: 3,
      name: "Stage Signing",
      price: 10,
      imageSrc:
        "https://i.ibb.co/WsMbs73/photo-5328013012541492173-y.jpg",
      imageAlt:
        "Stage Signing",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-8">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">The best scenic courses by famous actors for the best prices</h1>
    </div>
          <div className="grid  mx-auto gap-y-10 gap-x-30 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                onClick={() => {
                  router.push(`/items/${product.id}`);
                }}
                key={product.id}
                className="group text-sm"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
