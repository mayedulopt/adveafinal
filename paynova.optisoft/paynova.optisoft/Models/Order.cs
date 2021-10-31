using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace paynova.optisoft.Models
{
    public class Order
    {
        public string OrderNumber { get; set; }
        public string CurrencyCode { get; set; }
        public string OrderDescription { get; set; }
        public Customer Customer { get; set; }
        public List<OrderLine> OrderLines { get; set; }
        public Address Address { get; set; }
        public decimal TotalAmount
        {
            get { return OrderLines.Sum(l => l.totalLineAmount); }
        }

        public Order()
        {
            Customer = new Customer();
            OrderLines = new List<OrderLine>();
        }

       
    }
}