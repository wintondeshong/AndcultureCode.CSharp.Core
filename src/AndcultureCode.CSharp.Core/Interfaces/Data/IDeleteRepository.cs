using System.Collections.Generic;
using System.Threading.Tasks;
using AndcultureCode.CSharp.Core.Interfaces.Entity;

namespace AndcultureCode.CSharp.Core.Interfaces.Data
{
    /// <summary>
    /// Repository for deleting <typeparamref name="T"/> data
    /// </summary>
    public interface IDeleteRepository<T> where T : class, IEntity
    {
        #region BulkDelete

        /// <summary>
        /// Calls BulkDelete() with a de-duped list of objects as determined by the
        /// property (or properties) of the object for the 'property' argument
        /// NOTE: Bulking is generally faster than batching, but locks the table.
        /// </summary>
        IResult<bool> BulkDelete(IEnumerable<T> items, long? deletedById = null, bool soft = true);

        #endregion BulkDelete

        #region BulkDeleteAsync

        /// <summary>
        /// Calls BulkDelete() with a de-duped list of objects as determined by the
        /// property (or properties) of the object for the 'property' argument
        /// NOTE: Bulking is generally faster than batching, but locks the table.
        /// </summary>
        Task<IResult<bool>> BulkDeleteAsync(IEnumerable<T> items, long? deletedById = null, bool soft = true);

        #endregion BulkDeleteAsync

        #region Delete

        /// <summary>
        /// Ability to delete an entity using an Id
        /// </summary>
        IResult<bool> Delete(long id, long? deletedById = null, bool soft = true);

        /// <summary>
        /// Ability to delete an entity using the entity itself
        /// </summary>
        IResult<bool> Delete(T o, long? deletedById = null, bool soft = true);

        /// <summary>
        /// Ability to delete a list of entities by batch size.
        /// </summary>
        /// <param name="items">List of items to delete</param>
        /// <param name="deletedById">Id of user deleting the items</param>
        /// <param name="batchSize">Number of items to include in a batch, defaults to 100</param>
        /// <param name="soft">Boolean flag for soft-deleting the items</param>
        IResult<bool> Delete(IEnumerable<T> items, long? deletedById = null, long batchSize = 100, bool soft = true);

        #endregion Delete

        #region DeleteAsync

        /// <summary>
        /// Ability to delete an entity using an Id
        /// </summary>
        Task<IResult<bool>> DeleteAsync(long id, long? deletedById = null, bool soft = true);

        /// <summary>
        /// Ability to delete an entity using the entity itself
        /// </summary>
        Task<IResult<bool>> DeleteAsync(T o, long? deletedById = null, bool soft = true);

        /// <summary>
        /// Ability to delete a list of entities by batch size.
        /// </summary>
        /// <param name="items">List of items to delete</param>
        /// <param name="deletedById">Id of user deleting the items</param>
        /// <param name="batchSize">Number of items to include in a batch, defaults to 100</param>
        /// <param name="soft">Boolean flag for soft-deleting the items</param>
        Task<IResult<bool>> DeleteAsync(IEnumerable<T> items, long? deletedById = null, long batchSize = 100, bool soft = true);

        #endregion DeleteAsync
    }
}
