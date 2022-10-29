CREATE TABLE users (
    id          INT AUTO_INCREMENT NOT NULL,
    name        VARCHAR(255) NOT NULL,
    lastname    VARCHAR(255) NOT NULL,
    address     VARCHAR(255) NULL,
    city        VARCHAR(255) NULL,
    phone       VARCHAR(255) NULL,
    email       VARCHAR(255) NULL,
    password    VARCHAR(255) NULL,
    type        VARCHAR(255) NOT NULL ENUM('final_user', 'administrator'),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT PK_PRODUCTS PRIMARY KEY (id)
);