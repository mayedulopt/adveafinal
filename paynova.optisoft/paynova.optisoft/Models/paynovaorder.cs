using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace paynova.optisoft.Models
{
    public class paynovaorder
    {
        public string orderNumber { get; set; }
        public string currencyCode { get; set; }
        public Customer customer { get; set; }
        public List<OrderLine> lineItems { get; set; }
        public decimal totalAmount
        {
            get { return lineItems.Sum(l => l.totalLineAmount); }
        }
        public paddress billTo { get; set; }
        public paddress shipTo { get; set; }
        public string orderDescription { get; set; }
        public string salesChannel { get; set; }
        public string salesLocationId { get; set; }
    }

}