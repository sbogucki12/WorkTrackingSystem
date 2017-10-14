using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WTSBackend.Models;
using WTSBackend.Persistence;

namespace WTSBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/CorrespondenceTypes")]
    public class CorrespondenceTypesController : Controller
    {
        private readonly WTSContext _context;

        public CorrespondenceTypesController(WTSContext context)
        {
            _context = context;
        }

        // GET: api/CorrespondenceTypes
        [HttpGet]
        public IEnumerable<CorrespondenceType> GetCorrespondenceTypes()
        {
            return _context.CorrespondenceTypes;
        }

        // GET: api/CorrespondenceTypes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCorrespondenceType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var correspondenceType = await _context.CorrespondenceTypes.SingleOrDefaultAsync(m => m.ID == id);

            if (correspondenceType == null)
            {
                return NotFound();
            }

            return Ok(correspondenceType);
        }

        // PUT: api/CorrespondenceTypes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCorrespondenceType([FromRoute] int id, [FromBody] CorrespondenceType correspondenceType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != correspondenceType.ID)
            {
                return BadRequest();
            }

            _context.Entry(correspondenceType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CorrespondenceTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CorrespondenceTypes
        [HttpPost]
        public async Task<IActionResult> PostCorrespondenceType([FromBody] CorrespondenceType correspondenceType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CorrespondenceTypes.Add(correspondenceType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCorrespondenceType", new { id = correspondenceType.ID }, correspondenceType);
        }

        // DELETE: api/CorrespondenceTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCorrespondenceType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var correspondenceType = await _context.CorrespondenceTypes.SingleOrDefaultAsync(m => m.ID == id);
            if (correspondenceType == null)
            {
                return NotFound();
            }

            _context.CorrespondenceTypes.Remove(correspondenceType);
            await _context.SaveChangesAsync();

            return Ok(correspondenceType);
        }
        
        private bool CorrespondenceTypeExists(int id)
        {
            return _context.CorrespondenceTypes.Any(e => e.ID == id);
        }
    }
}