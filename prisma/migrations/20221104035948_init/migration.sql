BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Motorcycle] (
    [mot_id] INT NOT NULL IDENTITY(1,1),
    [mot_name] NVARCHAR(1000) NOT NULL,
    [mot_model] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Motorcycle_pkey] PRIMARY KEY CLUSTERED ([mot_id])
);

-- CreateTable
CREATE TABLE [dbo].[Parts] (
    [part_id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [code] NVARCHAR(1000) NOT NULL,
    [mot_id] INT NOT NULL,
    CONSTRAINT [Parts_pkey] PRIMARY KEY CLUSTERED ([part_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Parts] ADD CONSTRAINT [Parts_mot_id_fkey] FOREIGN KEY ([mot_id]) REFERENCES [dbo].[Motorcycle]([mot_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
