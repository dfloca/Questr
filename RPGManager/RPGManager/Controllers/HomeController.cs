using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RPGManager.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DMRedirect()
        {
            //any proper authentication should go either here or in the decorations.
            return RedirectToAction("Index","DM");
        }
    }
}