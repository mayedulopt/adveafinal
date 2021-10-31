using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace paynova.optisoft.Models
{
    public class User
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Complementary { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }

    }
}