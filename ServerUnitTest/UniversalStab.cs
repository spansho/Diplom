using Contracts;
using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ServerUnitTest
{
    public abstract class UniversalBase<T> : IRepositoryBase<T> where T : class
    {
        protected List<T> list;
        public UniversalBase()
        {
            list = new List<T>();
        }
        public IQueryable<T> FindAll(bool trackChanges) => (IQueryable<T>)list;

        public void Create(T entity) => list.Add(entity);

  
        public void Delete(T entity) => list.Remove(entity);

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression, bool trackChanges)
        {
            IQueryable<T> zxc = list.AsQueryable<T>();
            return zxc.Where(expression);
        }

        public void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
