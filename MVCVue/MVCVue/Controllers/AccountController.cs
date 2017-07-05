using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCVue.Controllers
{
	public class AccountController : Controller
	{
		// GET: Account
		public ActionResult Index()
		{
			return View();
		}

		[HttpPost]
		public JsonResult GetLoginStatus()
		{
			return new JsonResult { Data = new { loggedIn = false, username = "" } };
		} 

		[HttpPost]
		public JsonResult LogIn(string username, string password)
		{
			return new JsonResult { Data = new { loggedIn = true, username = username } };
		}
	}
}