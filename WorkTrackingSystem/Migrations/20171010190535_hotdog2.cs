using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WTSBackend.Migrations
{
    public partial class hotdog2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Branches_Employees_EmployeeIDID",
                table: "Branches");

            migrationBuilder.DropForeignKey(
                name: "FK_Records_CorrespondenceTypes_CorrespondenceTypeIDID",
                table: "Records");

            migrationBuilder.DropForeignKey(
                name: "FK_Records_Employees_EmployeeIDID",
                table: "Records");

            migrationBuilder.DropIndex(
                name: "IX_Records_CorrespondenceTypeIDID",
                table: "Records");

            migrationBuilder.DropIndex(
                name: "IX_Records_EmployeeIDID",
                table: "Records");

            migrationBuilder.DropIndex(
                name: "IX_Branches_EmployeeIDID",
                table: "Branches");

            migrationBuilder.DropColumn(
                name: "CorrespondenceTypeIDID",
                table: "Records");

            migrationBuilder.DropColumn(
                name: "EmployeeIDID",
                table: "Records");

            migrationBuilder.DropColumn(
                name: "EmployeeIDID",
                table: "Branches");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CorrespondenceTypeIDID",
                table: "Records",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EmployeeIDID",
                table: "Records",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EmployeeIDID",
                table: "Branches",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Records_CorrespondenceTypeIDID",
                table: "Records",
                column: "CorrespondenceTypeIDID");

            migrationBuilder.CreateIndex(
                name: "IX_Records_EmployeeIDID",
                table: "Records",
                column: "EmployeeIDID");

            migrationBuilder.CreateIndex(
                name: "IX_Branches_EmployeeIDID",
                table: "Branches",
                column: "EmployeeIDID");

            migrationBuilder.AddForeignKey(
                name: "FK_Branches_Employees_EmployeeIDID",
                table: "Branches",
                column: "EmployeeIDID",
                principalTable: "Employees",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Records_CorrespondenceTypes_CorrespondenceTypeIDID",
                table: "Records",
                column: "CorrespondenceTypeIDID",
                principalTable: "CorrespondenceTypes",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Records_Employees_EmployeeIDID",
                table: "Records",
                column: "EmployeeIDID",
                principalTable: "Employees",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
