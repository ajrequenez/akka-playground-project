using System;
using Dotnet.SampleApi.SampleApiModel;
using Microsoft.AspNetCore.Mvc;

namespace Dotnet.SampleApi.Controllers
{

  [ApiController]
  [Route("[controller]")]
  public class AkkaTestController : ControllerBase
  {
    private readonly ILogger<AkkaTestController> _logger;

    public AkkaTestController(ILogger<AkkaTestController> logger)
    {
      _logger = logger;
    }


    [HttpGet(Name = "GetString")]
    public string Get()
    {
      return "Hello World";
    }
  }
}

