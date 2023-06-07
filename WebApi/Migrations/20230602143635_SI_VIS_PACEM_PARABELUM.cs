using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class SI_VIS_PACEM_PARABELUM : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Task_Room_RoomId",
                table: "Task");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Task",
                table: "Task");

            migrationBuilder.RenameTable(
                name: "Task",
                newName: "Issue");

            migrationBuilder.RenameIndex(
                name: "IX_Task_RoomId",
                table: "Issue",
                newName: "IX_Objective_RoomId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Objective",
                table: "Issue",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Objective_Room_RoomId",
                table: "Issue",
                column: "RoomId",
                principalTable: "Room",
                principalColumn: "RoomId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Objective_Room_RoomId",
                table: "Issue");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Objective",
                table: "Issue");

            migrationBuilder.RenameTable(
                name: "Issue",
                newName: "Task");

            migrationBuilder.RenameIndex(
                name: "IX_Objective_RoomId",
                table: "Task",
                newName: "IX_Task_RoomId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Task",
                table: "Task",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_Room_RoomId",
                table: "Task",
                column: "RoomId",
                principalTable: "Room",
                principalColumn: "RoomId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
