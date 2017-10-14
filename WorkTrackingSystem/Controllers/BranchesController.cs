﻿using System;
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
    [Route("api/Branches")]
    public class BranchesController : Controller
    {
        private readonly WTSContext _context;

        public BranchesController(WTSContext context)
        {
            _context = context;
        }

        // GET: api/Branches
        [HttpGet]
        public IEnumerable<Branch> GetBranches()
        {
            return _context.Branches;
        }

        // GET: api/Branches/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBranch([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var branch = await _context.Branches.SingleOrDefaultAsync(m => m.ID == id);

            if (branch == null)
            {
                return NotFound();
            }

            return Ok(branch);
        }

        // PUT: api/Branches/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBranch([FromRoute] int id, [FromBody] Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != branch.ID)
            {
                return BadRequest();
            }

            _context.Entry(branch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BranchExists(id))
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

        // POST: api/Branches
        [HttpPost]
        public async Task<IActionResult> PostBranch([FromBody] Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Branches.Add(branch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBranch", new { id = branch.ID }, branch);
        }

        // DELETE: api/Branches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBranch([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var branch = await _context.Branches.SingleOrDefaultAsync(m => m.ID == id);
            if (branch == null)
            {
                return NotFound();
            }

            _context.Branches.Remove(branch);
            await _context.SaveChangesAsync();

            return Ok(branch);
        }

        private bool BranchExists(int id)
        {
            return _context.Branches.Any(e => e.ID == id);
        }
    }
}