using Akka.Actor;

namespace Dotnet.Dotnet.SharedLibrary.Actors
{
  public class Location : UntypedActor
  {
    private readonly string _name;

    public Location(string name)
    {
      _name = name;
    }

    protected override void OnReceive(object message)
    {
      throw new NotImplementedException();
    }

    public static Props Props(string name) => Akka.Actor.Props.Create(() => new Location(name));
  }
}

