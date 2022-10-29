CREATE TABLE suppliers (
    id              INT AUTO_INCREMENT NOT NULL,
    denomination    VARCHAR(255),
    address         VARCHAR(255),
    city            VARCHAR(255),
    phone           VARCHAR(255),
    email           VARCHAR(255),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_SUPPLIERS PRIMARY KEY (id)
);