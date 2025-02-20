import { fetchSheetData } from "@/lib/api/sheet"
import { ProductDetail } from "@/components/product-details"
import { Props } from "@/types/entities"

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  
  try {
    const data = await fetchSheetData(1, 24, {}, id);

    const products = data.props.items;
    const product = products.find((item) => String(item[0]).trim() === String(id).trim());

    if (!product) {
      return (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p>The product you are looking for does not exist.</p>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <ProductDetail
          id={Number(product[0])}
          name={String(product[1])}
          category={String(product[3])}
          description={String(product[5])}
          variant={String(product[6])}
          price={Number.parseInt(String(product[8])) || 0}
          stock={Number.parseInt(String(product[11])) || 0}
          image="/logo.png?height=400&width=400"
        />
      </div>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p>Failed to load product details. Please try again later.</p>
      </div>
    );
  }
}