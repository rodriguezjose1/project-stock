CREATE TABLE sales (
    id              INT AUTO_INCREMENT NOT NULL,
    customer        INT(255),
    user            INT(255),
    total           VARCHAR(255),
    items_quantity  SMALLINT(255),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_SALES PRIMARY KEY (id)
);