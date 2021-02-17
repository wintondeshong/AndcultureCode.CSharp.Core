using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AndcultureCode.CSharp.Core.Interfaces.Entity;

namespace AndcultureCode.CSharp.Core.Interfaces.Data
{
    /// <summary>
    /// Handles creating <typeparamref name="T"/> data
    /// </summary>
    public interface ICreateRepository<T> where T : class, IEntity
    {
        #region BulkCreate

        /// <summary>
        /// Perform a DbContext.BulkInsert on an enumeration of T within a single transaction
        /// </summary>
        IResult<List<T>> BulkCreate(IEnumerable<T> items, long? createdById = null);

        #endregion BulkCreate

        #region BulkCreateAsync

        /// <summary>
        /// Perform a DbContext.BulkInsert on an enumeration of T within a single transaction
        /// </summary>
        Task<IResult<List<T>>> BulkCreateAsync(IEnumerable<T> items, long? createdById = null);

        #endregion BulkCreateAsync

        #region BulkCreateDistinct

        /// <summary>
        /// Calls BulkCreate() with a de-duped list of objects as determined by the
        /// property (or properties) of the object for the 'property' argument
        /// NOTE: Bulking is generally faster than batching, but locks the table.
        /// </summary>
        IResult<List<T>> BulkCreateDistinct<TKey>(IEnumerable<T> items, Func<T, TKey> property, long? createdById = null);

        #endregion BulkCreateDistinct

        #region BulkCreateDistinctAsync

        /// <summary>
        /// Calls BulkCreate() with a de-duped list of objects as determined by the
        /// property (or properties) of the object for the 'property' argument
        /// NOTE: Bulking is generally faster than batching, but locks the table.
        /// </summary>
        Task<IResult<List<T>>> BulkCreateDistinctAsync<TKey>(IEnumerable<T> items, Func<T, TKey> property, long? createdById = null);

        #endregion BulkCreateDistinctAsync

        #region Create

        /// <summary>
        /// Ability to create an entity
        /// </summary>
        IResult<T> Create(T item, long? createdById = null);

        /// <summary>
        /// Ability to create entities individually using a list
        /// </summary>
        IResult<List<T>> Create(IEnumerable<T> items, long? createdById = null);

        #endregion Create

        #region CreateAsync

        /// <summary>
        /// Ability to create an entity
        /// </summary>
        Task<IResult<T>> CreateAsync(T item, long? createdById = null);

        /// <summary>
        /// Ability to create entities individually using a list
        /// </summary>
        Task<IResult<List<T>>> CreateAsync(IEnumerable<T> items, long? createdById = null);

        #endregion CreateAsync

        #region CreateDistinct

        /// <summary>
        /// Calls batched overload of Create() with a de-duped list of objects as determined by the
        /// property (or properties) of the object for the 'property' argument.
        /// NOTE: Batching is generally slower than bulking, but does not lock the table.
        /// </summary>
        IResult<List<T>> CreateDistinct<TKey>(IEnumerable<T> items, Func<T, TKey> property, long? createdById = null);

        #endregion CreateDistinct

        #region CreateDistinctAsync

        /// <summary>
        /// Calls batched overload of Create() with a de-duped list of objects as determined by the
        /// property (or properties) of the object for the 'property' argument.
        /// NOTE: Batching is generally slower than bulking, but does not lock the table.
        /// </summary>
        Task<IResult<List<T>>> CreateDistinctAsync<TKey>(IEnumerable<T> items, Func<T, TKey> property, long? createdById = null);

        #endregion CreateDistinctAsync
    }
}
