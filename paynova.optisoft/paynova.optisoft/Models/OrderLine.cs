using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace paynova.optisoft.Models
{
    public class OrderLine
    {
        public int id { get; set; }
        public string articleNumber { get; set; }
        public string name { get; set; }
        public int quantity { get; set; }
        public decimal unitAmountExcludingTax { get; set; }
        public decimal taxPercent { get; set; }
        public string unitMeasure { get; set; }
        public string description { get; set; }
        public string productUrl { get; set; }
        public decimal totalLineTaxAmount
        {
            get { return (unitAmountExcludingTax * quantity) * (taxPercent / 100); }
        }
        public decimal totalLineAmount
        {
            get { return (unitAmountExcludingTax * quantity) + totalLineTaxAmount; }
        }

        
    }
}