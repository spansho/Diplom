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
                newName: "Objective");

            migrationBuilder.RenameIndex(
                name: "IX_Task_RoomId",
                table: "Objective",
                newName: "IX_Objective_RoomId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Objective",
                table: "Objective",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Objective_Room_RoomId",
                table: "Objective",
                column: "RoomId",
                principalTable: "Room",
                principalColumn: "RoomId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Objective_Room_RoomId",
                table: "Objective");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Objective",
                table: "Objective");

            migrationBuilder.RenameTable(
                name: "Objective",
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
