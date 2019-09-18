CREATE TABLE [dbo].[Issues] (
    [Id]          INT           IDENTITY (1, 1) NOT NULL,
    [Message]     NTEXT         NULL,
    [CreatedDTTM] DATETIME2 (7) DEFAULT (getdate()) NULL,
    [Author]      NVARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

