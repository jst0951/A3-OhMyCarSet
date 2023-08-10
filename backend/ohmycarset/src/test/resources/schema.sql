CREATE TABLE exterior_color
(
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`     VARCHAR(40),
    color_code VARCHAR(40),
    img_src    VARCHAR(200)
);

CREATE TABLE trim
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`        VARCHAR(40),
    `description` VARCHAR(40),
    default_price INT,
    rep_color_id  BIGINT,
    isBest        BOOLEAN,
    FOREIGN KEY (rep_color_id) REFERENCES exterior_color (id)
);

CREATE TABLE trim_exterior_color_map
(
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    e_color_id BIGINT,
    trim_id    BIGINT,
    FOREIGN KEY (e_color_id) REFERENCES exterior_color (id),
    FOREIGN KEY (trim_id) REFERENCES trim (id)
);

CREATE TABLE interior_color
(
    id      BIGINT PRIMARY KEY,
    `name`  VARCHAR(40),
    img_src VARCHAR(200)
);

CREATE TABLE trim_interior_color_map
(
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    i_color_id BIGINT,
    trim_id    BIGINT,
    FOREIGN KEY (i_color_id) REFERENCES interior_color (id),
    FOREIGN KEY (trim_id) REFERENCES trim (id)
);

CREATE TABLE default_category
(
    id     BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(40)
);

CREATE TABLE default_option
(
    id              BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`          varchar(255),
    img_src         varchar(255),
    def_category_id BIGINT,
    FOREIGN KEY (def_category_id) REFERENCES default_category (id)
);

CREATE TABLE trim_default_option_map
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    def_option_id BIGINT,
    trim_id       BIGINT,
    FOREIGN KEY (def_option_id) REFERENCES default_option (id),
    FOREIGN KEY (trim_id) REFERENCES trim (id)
);

CREATE TABLE core_option
(
    id      BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`  varchar(40),
    trim_id BIGINT,
    img_src varchar(200),
    FOREIGN KEY (trim_id) REFERENCES trim (id)
);

CREATE TABLE powertrain_option
(
    id               BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`           VARCHAR(40),
    main_description VARCHAR(1024),
    sub_description  VARCHAR(1024),
    main_feedback    VARCHAR(255),
    sub_feedback     VARCHAR(255),
    price            INT,
    img_src          VARCHAR(255)
);

CREATE TABLE wd_option
(
    id               BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`           VARCHAR(40),
    main_description VARCHAR(1024),
    main_feedback    VARCHAR(255),
    sub_feedback     VARCHAR(255),
    price            INT,
    img_src          VARCHAR(255)
);

CREATE TABLE body_option
(
    id               BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`           VARCHAR(40),
    main_description VARCHAR(1024),
    main_feedback    VARCHAR(255),
    sub_feedback     VARCHAR(255),
    price            INT,
    img_src          VARCHAR(255)
);

CREATE TABLE exterior_color_option
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`        VARCHAR(40),
    main_feedback VARCHAR(255),
    sub_feedback  VARCHAR(255),
    price         INT,
    img_src       VARCHAR(255),
    icon_src      VARCHAR(255)
);

CREATE TABLE interior_color_option
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`        VARCHAR(40),
    main_feedback VARCHAR(255),
    sub_feedback  VARCHAR(255),
    price         INT,
    img_src       VARCHAR(255),
    icon_src      VARCHAR(255)
);

CREATE TABLE wheel_option
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`        VARCHAR(40),
    main_feedback VARCHAR(255),
    sub_feedback  VARCHAR(255),
    price         INT,
    img_src       VARCHAR(255),
    icon_src      VARCHAR(255)
);

CREATE TABLE system_option
(
    id       BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`   VARCHAR(40),
    price    INT,
    icon_src VARCHAR(255)
);

CREATE TABLE system_option_component
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    s_option_id   BIGINT,
    `name`        VARCHAR(40),
    `description` VARCHAR(255),
    img_src       VARCHAR(255),
    FOREIGN KEY (s_option_id) REFERENCES system_option (id)
);

CREATE TABLE temperature_option
(
    id       BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`   VARCHAR(40),
    price    INT,
    icon_src VARCHAR(255)
);

CREATE TABLE temperature_option_component
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    t_option_id   BIGINT,
    `name`        VARCHAR(40),
    `description` VARCHAR(255),
    img_src       VARCHAR(255),
    FOREIGN KEY (t_option_id) REFERENCES temperature_option (id)
);

CREATE TABLE external_device_option
(
    id       BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`   VARCHAR(40),
    price    INT,
    icon_src VARCHAR(255)
);

CREATE TABLE external_device_option_component
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    e_d_option_id BIGINT,
    `name`        VARCHAR(40),
    `description` VARCHAR(255),
    img_src       VARCHAR(255),
    FOREIGN KEY (e_d_option_id) REFERENCES external_device_option (id)
);

CREATE TABLE internal_device_option
(
    id       BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name`   VARCHAR(40),
    price    INT,
    icon_src VARCHAR(255)
);

CREATE TABLE internal_device_option_component
(
    id            BIGINT PRIMARY KEY AUTO_INCREMENT,
    i_d_option_id BIGINT,
    `name`        VARCHAR(40),
    `description` VARCHAR(255),
    img_src       VARCHAR(255),
    FOREIGN KEY (i_d_option_id) REFERENCES internal_device_option (id)
);