using BuisnessLogic.Interfaces;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;

namespace PresentationLayer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoService _todoservice;

        public ToDoController(IToDoService todoservice)
        {
            _todoservice = todoservice;
        }

        [HttpGet]
        public async Task<ActionResult<List<ToDoEvents>>> GetAllToDoActionEvents()
        {
            var tempEvents = await _todoservice.GetAllTodoEvents();
            return Ok(tempEvents);
        }

        [HttpPost]
        public async Task<ActionResult<ToDoEvents>> AddTodoActionEvent([FromBody] ToDoEvents newEvent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _todoservice.AddToDoEvent(newEvent);
            return CreatedAtAction(nameof(AddTodoActionEvent), newEvent);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ToDoEvents>> UpdateTodoActionEvent(int id, ToDoEvents updateEvent)
        {
            await _todoservice.UpdateTodoEvent(id, updateEvent);
            return Ok( updateEvent);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTodoActionEvent(int id)
        {
            await _todoservice.RemoveToDoEvent(id);
            return NoContent();
        }

        [HttpPut("mark/{id}")]
        public async Task<ActionResult> MarkTodoActionEvent(int id)
        {
            await _todoservice.MarkToDoEvent(id);
            return NoContent();
        }

    }
}
