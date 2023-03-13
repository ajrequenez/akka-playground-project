using Akka.Actor;

namespace Dotnet.Dotnet.SharedLibrary.Actors
{
  public class FileReader : UntypedActor
  {
    private readonly string _name;

    public FileReader(string name)
    {
      _name = name;
    }

    protected override void OnReceive(object message)
    {
      throw new NotImplementedException();
    }

    public static Props Props(string name) => Akka.Actor.Props.Create(() => new FileReader(name));
  }
}

