using System.Collections.Generic;
using System.Threading.Tasks;
using AndcultureCode.CSharp.Core.Interfaces.Entity;

namespace AndcultureCode.CSharp.Core.Interfaces.Conductors
{
    public interface IRepositoryDeleteConductor<T> where T : class, IEntity
    {
        #region Properties

        /// <summary>
        /// Ability to set and get the underlying DbContext's command timeout
        /// </summary>
        int? CommandTimeout { get; set; }

        #endregion Properties

        #region Methods

        #region BulkDelete

        IResult<bool> BulkDelete(IEnumerable<T> items, long? deletedById = default(long?), bool soft = true);

        #endregion BulkDelete

        #region BulkDeleteAsync

        Task<IResult<bool>> BulkDeleteAsync(IEnumerable<T> items, long? deletedById = default(long?), bool soft = true);

        #endregion BulkDeleteAsync

        #region Delete

        IResult<bool> Delete(long id, long? deletedById = null, bool soft = true);
        IResult<bool> Delete(T o, long? deletedById = null, bool soft = true);
        IResult<bool> Delete(IEnumerable<T> items, long? deletedById = null, long batchSize = 100, bool soft = true);

        #endregion Delete

        #region DeleteAsync

        Task<IResult<bool>> DeleteAsync(long id, long? deletedById = null, bool soft = true);
        Task<IResult<bool>> DeleteAsync(T o, long? deletedById = null, bool soft = true);
        Task<IResult<bool>> DeleteAsync(IEnumerable<T> items, long? deletedById = null, long batchSize = 100, bool soft = true);

        #endregion DeleteAsync

        #region Restore

        IResult<bool> Restore(T o);
        IResult<bool> Restore(long id);

        #endregion Restore

        #region RestoreAsync

        Task<IResult<bool>> RestoreAsync(T o);
        Task<IResult<bool>> RestoreAsync(long id);

        #endregion RestoreAsync

        #endregion Methods
    }
}
