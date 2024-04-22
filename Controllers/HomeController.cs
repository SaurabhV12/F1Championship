using F1Championship.Data;
using F1Championship.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace F1Championship.Controllers
{
    public class HomeController : Controller
    {
        private readonly F1ChampionshipContext _context;

        public HomeController(F1ChampionshipContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Teams()
        {
            List<Teams> teamsList = _context.Teams.ToList();
            return View(teamsList);
        }

        public IActionResult Drivers()
        {
            List<Drivers> driversList = _context.Drivers.ToList();
            return View(driversList);
        }

        public IActionResult Leagues()
        {
            List<Leagues> leaguesList = _context.Leagues.ToList();
            return View(leaguesList);
        }

        public IActionResult Create()
        {
            return View();
        }


        //public IActionResult Teams()
        //{
        //    return View();
        //}

        //public IActionResult Drivers()
        //{
        //    return View();
        //}
        public IActionResult About()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,TeamName,Headquarters,TeamPrincipal,Chassis,Engine,Drivers")] Teams teams)
        {
            if (ModelState.IsValid)
            {
                _context.Add(teams);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(teams);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
