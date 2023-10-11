using System;
using Akka.Actor;
using Dotnet.Dotnet.SharedLibrary.Actors;

namespace Dotnet.ActorSystem
{
  public class AkkaSystemService : BackgroundService
  {
    private readonly ILogger<AkkaSystemService> _logger;
    private readonly Akka.Actor.ActorSystem _actorSystem;
    private readonly IActorRef _actorRef;


    public AkkaSystemService(ILogger<AkkaSystemService> logger)
    {
      _logger = logger;

      _actorSystem = Akka.Actor.ActorSystem.Create("akka-system");
      _actorRef = _actorSystem.ActorOf(ConsoleWriter.Prop());

    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
      while (!stoppingToken.IsCancellationRequested)
      {
        var message = $"Worker running at: {DateTimeOffset.Now}";
        //_logger.LogInformation(message);

        _actorRef.Tell(message);

        await Task.Delay(5000, stoppingToken);
      }
    }
  }
}

