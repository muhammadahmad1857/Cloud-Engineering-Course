import Image from "next/image";

// Define the type for our product data
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

// Fetch data from the API
async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// This is an async Server Component
export default async function Home() {
  // Fetch the products
  let products: Product[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Error in Home component:", error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4">
            Product Showcase
          </h1>
          <Image
            className="mx-auto dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2 truncate">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-12 overflow-hidden">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/muhammadAhmadJawad"
              className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/muhammadahmad1857"
              className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
