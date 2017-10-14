using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WTSBackend.Migrations
{
    public partial class hotdog4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BranchID",
                table: "Employees",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Employees_BranchID",
                table: "Employees",
                column: "BranchID");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Branches_BranchID",
                table: "Employees",
                column: "BranchID",
                principalTable: "Branches",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Branches_BranchID",
                table: "Employees");

            migrationBuilder.DropIndex(
                name: "IX_Employees_BranchID",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "BranchID",
                table: "Employees");
        }
    }
}
