CREATE TABLE purchases (
    id              INT AUTO_INCREMENT NOT NULL,
    supplier        INT(255),
    total           VARCHAR(255),
    items_quantity  SMALLINT(255),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_PURCHASES PRIMARY KEY (id)
);