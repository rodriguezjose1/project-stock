CREATE TABLE products (
    id              INT AUTO_INCREMENT NOT NULL,
    name            VARCHAR(255) NOT NULL,
    desc            VARCHAR(255) NULL,
    code            VARCHAR(20) NOT NULL,
    brand           INT(255) DEFAULT NULL,
    category        VARCHAR(255) NOT NULL,
    price           DECIMAL(10,2) NOT NULL,
    quantity        SMALLINT(255) DEFAULT 0,
    discount        DECIMAL(10,2) DEFAULT 0,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_PRODUCTS PRIMARY KEY (id)
);