using System;
using Akka.Actor;
using System.Text.Json;

namespace Dotnet.Dotnet.SharedLibrary.Actors
{
  public class ConsoleWriter : UntypedActor
  { 
    protected override void OnReceive(object message)
    {
      var output = $"Message from the ConsoleWriter actor: {message}";
      Console.WriteLine(output);
    }

    public static Props Prop() => Props.Create<ConsoleWriter>();

  }
}

