using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace paynova.optisoft.Models
{
    public class Customer
    {
        public string customerId { get; set; }
        public string emailAddress { get; set; }
        public string governmentId { get; set; }
        public string homeTelephone { get; set; }
        public string workTelephone { get; set; }
        public string mobileTelephone { get; set; }
        public CustomerName Name { get; set; }
        
    }
}