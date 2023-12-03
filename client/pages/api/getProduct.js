// pages/api/getProduct.js
export default async function handler(req, res) {
  const { productHandle, locale } = req.query;

  // Eğer gerekli parametreler sağlanmamışsa, hata mesajı gönder
  if (!productHandle || !locale) {
    return res
      .status(400)
      .json({ error: "Product handle and locale are required" });
  }

  try {
    // Shopify API'sine GET isteği yap
    const response = await fetch(
      `https://${YOUR_SHOPIFY_STORE_DOMAIN}/${locale}/products/${productHandle}.js`
    );

    // Eğer yanıt başarılı değilse, hata mesajı gönder
    if (!response.ok) {
      throw new Error(`Error fetching product: ${response.statusText}`);
    }

    // Yanıtı JSON olarak al
    const productData = await response.json();

    // Ürün verisini gönder
    res.status(200).json(productData);
  } catch (error) {
    // Hata durumunda hata mesajını gönder
    res.status(500).json({ error: error.message });
  }
}
