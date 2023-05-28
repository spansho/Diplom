using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class UserFromServer
    {
        public string UserId;
        public string  Grade;
        public bool isObserver;
        public List<string> Visitors;
    }
}
