using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class Old : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_RoomUsers",
                table: "RoomUsers");

            migrationBuilder.DropColumn(
                name: "Issue",
                table: "RoomUsers");

            migrationBuilder.RenameColumn(
                name: "Issue",
                table: "Issue",
                newName: "Id");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "RoomUsers",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Estimate",
                table: "RoomUsers",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RoomUsers",
                table: "RoomUsers",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_RoomUsers",
                table: "RoomUsers");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "RoomUsers");

            migrationBuilder.DropColumn(
                name: "Estimate",
                table: "RoomUsers");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Issue",
                newName: "Issue");

            migrationBuilder.AddColumn<string>(
                name: "Issue",
                table: "RoomUsers",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RoomUsers",
                table: "RoomUsers",
                column: "Issue");
        }
    }
}
