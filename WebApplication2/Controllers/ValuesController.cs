using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IssuesDBContext context;

        public ValuesController(IssuesDBContext cxt)
        {
            context = cxt;
        }

        [HttpGet, EnableCors("AllowOrigin")]
        public ActionResult<IEnumerable<Issues>> GetIssues(string author)
        {
            return context.Issues.Where(x => x.Author == author).ToList();
        }


        [HttpPost, EnableCors("AllowOrigin")]
        public void PostIssue([FromBody] Issues issue)
        {
            context.Issues.Add(issue);
            context.SaveChanges();
        }
    }
}
