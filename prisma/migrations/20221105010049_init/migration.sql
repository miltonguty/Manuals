BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Images] (
    [img_id] INT NOT NULL IDENTITY(1,1),
    [img_name] NVARCHAR(1000) NOT NULL,
    [part_id] INT NOT NULL,
    CONSTRAINT [Images_pkey] PRIMARY KEY CLUSTERED ([img_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Images] ADD CONSTRAINT [Images_part_id_fkey] FOREIGN KEY ([part_id]) REFERENCES [dbo].[Parts]([part_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
