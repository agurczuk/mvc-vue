using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCVue.Controllers
{
	public class FetchDataController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		public JsonResult GetData()
		{
			JsonResult jr = new JsonResult();
			jr.Data = new[]
			{
				new { name = "name",value = 1 },
				new { name = "name1",value = 2 },
				new { name = "name3",value = 3 },
			};

			jr.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
			return jr;
		}
	}
}