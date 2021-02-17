using AndcultureCode.CSharp.Core.Interfaces.Entity;

namespace AndcultureCode.CSharp.Core.Interfaces.Data
{
    /// <summary>
    /// Handles CRUD of <typeparamref name="T"/> data
    /// </summary>
    public interface IRepository<T> :
        ICreateRepository<T>,
        IDeleteRepository<T>,
        IReadRepository<T>,
        IUpdateRepository<T>
    where T : class, IEntity
    {
        #region Properties

        /// <summary>
        /// Ability to set and get the underlying DbContext's command timeout
        /// </summary>
        int? CommandTimeout { get; set; }

        #endregion Properties
    }
}
