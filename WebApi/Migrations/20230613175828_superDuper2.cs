using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class superDuper2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AuthorizedUserIssues",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Estimation = table.Column<int>(nullable: false),
                    IssueId = table.Column<string>(nullable: true),
                    UserId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuthorizedUserIssues", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AuthorizedUserIssues_Issue_IssueId",
                        column: x => x.IssueId,
                        principalTable: "Issue",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AuthorizedUserIssues_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AuthorizedUserIssues_IssueId",
                table: "AuthorizedUserIssues",
                column: "IssueId");

            migrationBuilder.CreateIndex(
                name: "IX_AuthorizedUserIssues_UserId",
                table: "AuthorizedUserIssues",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AuthorizedUserIssues");
        }
    }
}
