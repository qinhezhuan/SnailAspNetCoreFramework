﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DAL.Interface
{
    public interface IQuery<T>
    {
        Expression<Func<T, bool>> GeneratePredicate();
    }
}
