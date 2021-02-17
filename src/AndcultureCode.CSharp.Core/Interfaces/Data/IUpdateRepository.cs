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
        #region Properties

        /// <summary>
        /// Ability to set and get the underlying DbContext's command timeout
        /// </summary>
        int? CommandTimeout { get; set; }

        #endregion Properties

        #region Methods

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

        #endregion Methods
    }
}
