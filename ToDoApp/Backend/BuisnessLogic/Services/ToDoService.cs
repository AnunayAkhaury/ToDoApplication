using BuisnessLogic.Interfaces;
using DataAccess.Interfaces;
using DataAccess.Models;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuisnessLogic.Services
{
    public class ToDoService : IToDoService
    {
        private readonly IToDoRepository _repository;

        public ToDoService(IToDoRepository repository)
        {
            _repository = repository;
        }
        public async Task AddToDoEvent(ToDoEvents toDoEvent)
        {
            await _repository.Add(toDoEvent);
        }

        public async Task<List<ToDoEvents>> GetAllTodoEvents()
        {
            return await _repository.GetAll();

        }

        public async Task MarkToDoEvent(int id)
        {
            await _repository.Mark(id);
        }

        public async Task RemoveToDoEvent(int id)
        {
            await _repository.Delete(id);
        }

        public async Task UpdateTodoEvent(int id, ToDoEvents toDoEvent)
        {
            await _repository.Update(id, toDoEvent);    
        }
    }
}
