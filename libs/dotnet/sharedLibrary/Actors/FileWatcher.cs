using Akka.Actor;

namespace Dotnet.Dotnet.SharedLibrary.Actors
{
  public class FileWatcher : UntypedActor
  {
    private readonly string _name;

    public FileWatcher(string name)
    {
      _name = name;
    }

    protected override void OnReceive(object message)
    {
      throw new NotImplementedException();
    }

    public static Props Props(string name) => Akka.Actor.Props.Create(() => new FileWatcher(name));
  }
}

