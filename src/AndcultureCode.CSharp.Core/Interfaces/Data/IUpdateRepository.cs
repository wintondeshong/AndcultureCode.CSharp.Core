using System.Collections.Generic;
using System.Threading.Tasks;
using AndcultureCode.CSharp.Core.Interfaces.Entity;

namespace AndcultureCode.CSharp.Core.Interfaces.Data
{
    /// <summary>
    /// Handles updating of <typeparamref name="T"/> data
    /// </summary>
    public interface IUpdateRepository<T> where T : class, IEntity
    {
        #region BulkUpdate

        /// <summary>
        /// Ability to update a list of entities in a single bulk operation.
        /// </summary>
        IResult<bool> BulkUpdate(IEnumerable<T> entities, long? updatedBy = default(long?));

        #endregion BulkUpdate

        #region BulkUpdateAsync

        /// <summary>
        /// Ability to update a list of entities in a single bulk operation.
        /// </summary>
        Task<IResult<bool>> BulkUpdateAsync(IEnumerable<T> entities, long? updatedBy = default(long?));

        #endregion BulkUpdateAsync

        #region Restore

        /// <summary>
        /// Ability to restore a soft-deleted entity using the entity itself.
        /// </summary>
        IResult<bool> Restore(T o);

        /// <summary>
        /// Ability to restore a soft-deleted entity using the entity id.
        /// </summary>
        IResult<bool> Restore(long id);

        #endregion Restore

        #region RestoreAsync

        /// <summary>
        /// Ability to restore a soft-deleted entity using the entity itself.
        /// </summary>
        Task<IResult<bool>> RestoreAsync(T o);

        /// <summary>
        /// Ability to restore a soft-deleted entity using the entity id.
        /// </summary>
        Task<IResult<bool>> RestoreAsync(long id);

        #endregion Restore

        #region Update

        /// <summary>
        /// Ability to create or update an entity
        /// </summary>
        IResult<bool> Update(T item, long? updatedBy = null);

        /// <summary>
        /// Calls Update one-by-one for each item in the enumerated entities.
        /// For large operations, BulkUpdate() is more efficient.
        /// </summary>
        IResult<bool> Update(IEnumerable<T> entities, long? updatedBy = default(long?));

        #endregion Update

        #region UpdateAsync

        /// <summary>
        /// Ability to create or update an entity
        /// </summary>
        Task<IResult<bool>> UpdateAsync(T item, long? updatedBy = null);

        /// <summary>
        /// Calls Update one-by-one for each item in the enumerated entities.
        /// For large operations, BulkUpdate() is more efficient.
        /// </summary>
        Task<IResult<bool>> UpdateAsync(IEnumerable<T> entities, long? updatedBy = default(long?));

        #endregion UpdateAsync
    }
}
