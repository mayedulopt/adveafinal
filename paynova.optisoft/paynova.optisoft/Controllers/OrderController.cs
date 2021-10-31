using paynova.optisoft.Facade;
using paynova.optisoft.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace paynova.optisoft.Controllers
{
    public class OrderController : ApiController
    {
        orderFacade _order = new orderFacade();
        [System.Web.Http.Route("api/orders/genrateorderforpaynova")]
        [HttpPost]
        public HttpResponseMessage CreateOrder(Order dto)
        {
            var data = _order.GenerateOrderdata(dto);
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
        [System.Web.Http.Route("api/orders/login")]
        [HttpPost]
        public HttpResponseMessage Login(User dto)
        {
            var data = _order.DoLogin(dto);
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
    }
}
