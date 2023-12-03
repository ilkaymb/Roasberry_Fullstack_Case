using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ShopifyController : ControllerBase
{
    private readonly IHttpClientFactory _httpClientFactory;
    readonly string? shopUrl = Environment.GetEnvironmentVariable("SHOPIFY_URL");
    readonly string? apiVersion = Environment.GetEnvironmentVariable("SHOPIFY_API_VERSION");
    readonly string? accessToken = Environment.GetEnvironmentVariable("SHOPIFY_ACCESS_TOKEN");
    public ShopifyController(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    [HttpGet("GetShopProducts")]
    public async Task<IActionResult> GetShopProducts()
    {

        string endpoint = $"https://{shopUrl}/admin/api/{apiVersion}/products.json";

        using (HttpClient client = _httpClientFactory.CreateClient())
        {
            // Shopify API'ye isteği yapılandırma
            client.DefaultRequestHeaders.Add("X-Shopify-Access-Token", accessToken);

            // GET isteği yapma
            HttpResponseMessage response = await client.GetAsync(endpoint);

            // Başarılı bir cevap alındıysa işleme devam et
            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                return Ok(content);
            }
            else
            {
                return StatusCode((int)response.StatusCode, $"Error: {response.ReasonPhrase}");
            }
        }
    }
    [HttpGet("GetShopInfo")]
    public async Task<IActionResult> GetShopInfo()
    {



        string endpoint = $"https://{shopUrl}/admin/api/{apiVersion}/shop.json";

        using (HttpClient client = _httpClientFactory.CreateClient())
        {
            // Shopify API'ye isteği yapılandırma
            client.DefaultRequestHeaders.Add("X-Shopify-Access-Token", accessToken);

            // GET isteği yapma
            HttpResponseMessage response = await client.GetAsync(endpoint);

            // Başarılı bir cevap alındıysa işleme devam et
            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                return Ok(content);
            }
            else
            {
                return StatusCode((int)response.StatusCode, $"Error: {response.ReasonPhrase}");
            }
        }
    }
    [HttpGet("GetAnalyticsData")]
    public async Task<IActionResult> GetAnalyticsData()
    {


        string endpoint = $"https://{shopUrl}/admin/api/{apiVersion}/reports.json";

        using (HttpClient client = _httpClientFactory.CreateClient())
        {
            // Shopify API'ye isteği yapılandırma
            client.DefaultRequestHeaders.Add("X-Shopify-Access-Token", accessToken);

            // GET isteği yapma
            HttpResponseMessage response = await client.GetAsync(endpoint);

            // Başarılı bir cevap alındıysa işleme devam et
            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                return Ok(content);
            }
            else
            {
                return StatusCode((int)response.StatusCode, $"Error: {response.ReasonPhrase}");
            }
        }
    }
    [HttpGet("GetOrderCount")]
    public async Task<IActionResult> GetOrderCount()
    {

        string endpoint = $"https://{shopUrl}/admin/api/{apiVersion}/orders/count.json";
        string count = await GetCount(endpoint);
        return Ok(count);
    }




    [HttpGet("GetProductCount")]
    public async Task<IActionResult> GetProductCount()
    {

        string endpoint = $"https://{shopUrl}/admin/api/{apiVersion}/products/count.json";
        string count = await GetCount(endpoint);
        return Ok(count);
    }

    [HttpGet("GetCustomerCount")]
    public async Task<IActionResult> GetCustomerCount()
    {

        string endpoint = $"https://{shopUrl}/admin/api/{apiVersion}/customers/count.json";
        string count = await GetCount(endpoint);
        return Ok(count);
    }
    private async Task<string> GetCount(string endpoint)
    {
        using (HttpClient client = _httpClientFactory.CreateClient())
        {

            // Shopify API'ye isteği yapılandırma
            client.DefaultRequestHeaders.Add("X-Shopify-Access-Token", accessToken);

            // GET isteği yapma
            HttpResponseMessage response = await client.GetAsync(endpoint);

            // Başarılı bir cevap alındıysa sayıyı döndür
            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                return content;
            }
            else
            {
                // Hata durumunda -1 döndür (isterseniz başka bir değer de kullanabilirsiniz)
                return "Error";
            }
        }
    }
}
