using System.Collections.Generic;
using System.Threading.Tasks;

namespace AndcultureCode.CSharp.Core.Interfaces.Conductors
{
    public interface IRepositoryConductor<T> : IConductor,
        IRepositoryCreateConductor<T>,
        IRepositoryDeleteConductor<T>,
        IRepositoryReadConductor<T>,
        IRepositoryUpdateConductor<T>
    where T : AndcultureCode.CSharp.Core.Models.Entities.Entity
    {
        #region Properties

        /// <summary>
        /// Ability to set and get the underlying DbContext's command timeout
        /// </summary>
        new int? CommandTimeout { get; set; }

        #endregion Properties

        #region Methods

        #region BulkCreateOrUpdate

        /// <summary>
        /// Automatically determines if the supplied entity needs created or updated.
        /// </summary>
        IResult<IEnumerable<T>> BulkCreateOrUpdate(IEnumerable<T> item, long? createdOrUpdatedById = null);

        #endregion BulkCreateOrUpdate

        #region BulkCreateOrUpdateAsync

        /// <summary>
        /// Automatically determines if the supplied entity needs created or updated.
        /// </summary>
        Task<IResult<IEnumerable<T>>> BulkCreateOrUpdateAsync(IEnumerable<T> item, long? createdOrUpdatedById = null);

        #endregion BulkCreateOrUpdateAsync

        #region CreateOrUpdate

        /// <summary>
        /// Automatically determines if the supplied entity needs created or updated.
        /// </summary>
        IResult<T> CreateOrUpdate(T item, long? createdOrUpdatedById = null);

        /// <summary>
        /// Automatically determines if the supplied entities need created or updated.
        /// </summary>
        IResult<IEnumerable<T>> CreateOrUpdate(IEnumerable<T> items, long? createdOrUpdatedById = default(long?));

        #endregion CreateOrUpdate

        #region CreateOrUpdateAsync

        /// <summary>
        /// Automatically determines if the supplied entity needs created or updated.
        /// </summary>
        Task<IResult<T>> CreateOrUpdateAsync(T item, long? createdOrUpdatedById = null);

        /// <summary>
        /// Automatically determines if the supplied entities need created or updated.
        /// </summary>
        Task<IResult<IEnumerable<T>>> CreateOrUpdateAsync(IEnumerable<T> items, long? createdOrUpdatedById = default(long?));

        #endregion CreateOrUpdateAsync

        #endregion Methods
    }
}
