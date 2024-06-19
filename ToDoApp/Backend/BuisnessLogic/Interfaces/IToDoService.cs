
using DataAccess.Models;
namespace BuisnessLogic.Interfaces
{
    public interface IToDoService
    {
        Task<List<ToDoEvents>> GetAllTodoEvents();
        Task AddToDoEvent(ToDoEvents toDoEvent);
        Task RemoveToDoEvent(int id);

        Task UpdateTodoEvent(int id, ToDoEvents toDoEvent);
        Task MarkToDoEvent(int id);
    }
}
