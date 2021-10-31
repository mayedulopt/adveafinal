using paynova.optisoft.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace paynova.optisoft.Facade
{
    public class orderFacade
    {
        public paynovaorder GenerateOrderdata(Order cdata)
        {
            paynovaorder dto = new paynovaorder();
            List<OrderLine> items = new List<OrderLine>();
            paddress adds = new paddress {
                name = cdata.Customer.Name,
                address = cdata.Address
            };
            int count = 1;
            items = (from item in cdata.OrderLines
                     select new OrderLine
                     {
                         id = count++,
                         articleNumber = "advea-19",
                         name = item.name,
                         description = item.description,
                         productUrl = "https://www.google.se",
                         quantity = 1,
                         unitMeasure = "st",
                         unitAmountExcludingTax = item.unitAmountExcludingTax,
                         taxPercent = item.taxPercent
                     }).ToList();
            dto.lineItems=items;

            dto.orderNumber = UiUtil.Utility.RandomString(8);
            dto.currencyCode = "SEK";
            dto.orderDescription = cdata.OrderDescription;
            dto.customer = cdata.Customer;
            dto.billTo = adds;
            dto.shipTo = adds;
            dto.salesChannel = "Web";
            dto.salesLocationId = "Company Name";
            
            return dto;
        }

        public User DoLogin(User dto)
        {
            User vm = new User(){ Id=1,Password="Pay062adv#",Complementary="Admin", UserName = "Admin",Success=true};
            User failed = new User() { Id = -1,  Message = "Wrong Credential!", Success = false };
            if (dto.UserName == vm.UserName && dto.Password == vm.Password)
                return vm;
            return failed;

        }
    }
}