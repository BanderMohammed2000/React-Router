// عبارة عن كائن يحتوي على كل جزء من المسار الديناميكي
import { useParams } from "react-router-dom";
function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      {/* productId: هذا الاسم الذي وضعناه لمسار المنتجات الديناميكية*/}
      {/* راح يتم اظهار المسار الديناميكي */}
      {/* طبعاً مفيد لجلب البيانات من قاعدة البيانات عن طريق معرف المسار */}
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
