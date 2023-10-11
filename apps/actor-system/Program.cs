using Dotnet.ActorSystem;

IHost host = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<AkkaSystemService>();
    })
    .Build();

host.Run();
