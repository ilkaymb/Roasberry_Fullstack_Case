using DotNetEnv;


// Load .env file


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//cors policy
builder.Services.AddCors(options =>
{

    options.AddPolicy("MyCorsPolicy", builder =>
    {
        builder
            .WithOrigins("*") // Belirli kökenlere izin ver
            .AllowAnyHeader() // Tüm başlıklara izin ver
            .AllowAnyMethod(); // Tüm HTTP yöntemlerine izin ver

    });

});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("MyCorsPolicy");

app.MapControllers();
Env.Load();

app.Run();
