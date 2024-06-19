using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Interfaces
{
    public interface IToDoRepository
    {
        Task<List<ToDoEvents>> GetAll();
        Task Update(int id, ToDoEvents toDo);
        Task Delete(int id);
        Task Mark(int id);
        Task Add(ToDoEvents toDo);
    }
}
