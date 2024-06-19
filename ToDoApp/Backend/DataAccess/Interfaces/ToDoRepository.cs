using DataAccess.Data;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Interfaces
{
    public class ToDoRepository : IToDoRepository
    {
        private readonly ApplicationDbContext _context;
        internal DbSet<ToDoEvents> _dbset;


        public ToDoRepository(ApplicationDbContext context)
        {
            _context = context;
            this._dbset = context.Set<ToDoEvents>();
        }
        public async Task Add(ToDoEvents newEvent)
        {
            
            await _dbset.AddAsync(newEvent);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var temp_task = await _dbset.FindAsync(id);
            if (temp_task != null)
            {
                 _dbset.Remove(temp_task);
                 await _context.SaveChangesAsync();
            }
        }

        public async Task Update(int id, ToDoEvents toDo)
        {
            var temp_task = await _dbset.FindAsync(id);
            if (temp_task != null)
            {
                temp_task.TaskName = toDo.TaskName;
                temp_task.TaskDescription = toDo.TaskDescription;
                temp_task.IsCompleted = toDo.IsCompleted;
                await _context.SaveChangesAsync();
            }
           
        }

        public async Task<List<ToDoEvents>> GetAll()
        {
            return await _dbset.ToListAsync();
        }

        public async Task Mark(int id)
        {
            var temp_task = await _dbset.FindAsync(id);
            if (temp_task != null)
            {
                temp_task.IsCompleted = !(temp_task.IsCompleted); 
                await _context.SaveChangesAsync();
            }
        }
    }
}
