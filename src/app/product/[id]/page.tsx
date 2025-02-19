import { fetchSheetData } from "@/lib/api/sheet"
import { ProductDetail } from "@/components/product-details"
import { Props } from "@/types/entites";

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const data = await fetchSheetData();
  const products = data.props.items.slice(2);

  const product = products.find((item) => String(item[0]) === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail
        id={Number(product[0])}
        name={String(product[2])}
        category={String(product[3])}
        brand={String(product[4])}
        description={String(product[5])}
        variant={String(product[6])}
        price={Number.parseInt(String(product[8])) || 0}
        stock={Number.parseInt(String(product[11])) || 0}
        image="/logo.png?height=400&width=400"
      />
    </div>
  );
}