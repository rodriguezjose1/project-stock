CREATE TABLE sale_items (
    id              INT AUTO_INCREMENT NOT NULL,
    sale_id         INT
    product         INT,
    quantity        SMALLINT(255),
    total_price     DECIMAL(10,2)
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_SALE_ITEMS PRIMARY KEY (id)
);