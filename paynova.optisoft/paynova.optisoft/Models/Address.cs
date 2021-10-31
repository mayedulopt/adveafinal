using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace paynova.optisoft.Models
{
    public class Address
    {
        public string street1 { get; set; }
        public string street2 { get; set; }
        public string street3 { get; set; }
        public string street4 { get; set; }
        public string postalCode { get; set; }
        public string regionCode { get; set; }
        public string city { get; set; }
        public string countryCode { get; set; }
    }
}