﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCVue.Controllers
{
	public class VueRoutingController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}
	}
}