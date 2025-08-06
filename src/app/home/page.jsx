"use client";
import { useServices } from "@/data/providers/ServicesProvider";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { getProducts } = useServices();
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Productos
        </h1>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform"
              >
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-green-600">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-16">
            <p className="text-gray-500 text-lg">
              No hay productos disponibles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
