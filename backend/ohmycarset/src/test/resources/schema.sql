CREATE TABLE exterior_color (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(40),
    color_code VARCHAR(40),
    img_src VARCHAR(200)
);

CREATE TABLE interior_color (
    id BIGINT PRIMARY KEY,
    `name` VARCHAR(40),
    img_src VARCHAR(200)
);