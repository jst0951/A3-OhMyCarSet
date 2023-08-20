CREATE SCHEMA IF NOT EXISTS ohmycarset;
USE ohmycarset;

create table body_option
(
    id               bigint auto_increment
        primary key,
    `name`             varchar(40)   null,
    main_description varchar(1024) null,
    main_feedback    varchar(255)  null,
    sub_feedback     varchar(255)  null,
    price            int           null,
    img_src          varchar(255)  null
);

create table car_dict
(
    id          bigint auto_increment
        primary key,
    keyword     varchar(40)  null,
    `description` varchar(255) null,
    img_src     varchar(200) null
);

create table default_category
(
    id   bigint      not null
        primary key,
    `name` varchar(40) null
);

create table default_option
(
    id              bigint       not null
        primary key,
    `name`            varchar(255) null,
    img_src         varchar(255) null,
    def_category_id bigint       null,
    constraint default_option_ibfk_1
        foreign key (def_category_id) references default_category (id)
);

create table exterior_color
(
    id         bigint       not null
        primary key,
    `name`       varchar(40)  null,
    color_code varchar(40)  null,
    img_src    varchar(200) null
);

create table exterior_color_option
(
    id            bigint auto_increment
        primary key,
    `name`          varchar(40)  null,
    main_feedback varchar(255) null,
    sub_feedback  varchar(255) null,
    price         int          null,
    img_src       varchar(255) null,
    icon_src      varchar(255) null
);

create table external_device_option
(
    id       bigint auto_increment
        primary key,
    `name`     varchar(40)  null,
    price    int          null,
    icon_src varchar(255) null
);

create table external_device_option_component
(
    id          bigint auto_increment
        primary key,
    package_id  bigint       null,
    `name`        varchar(40)  null,
    `description` varchar(255) null,
    img_src     varchar(255) null,
    constraint external_device_option_component_ibfk_1
        foreign key (package_id) references external_device_option (id)
);

create table interior_color
(
    id      bigint       not null
        primary key,
    `name`    varchar(40)  null,
    img_src varchar(200) null
);

create table interior_color_option
(
    id            bigint auto_increment
        primary key,
    `name`          varchar(40)  null,
    main_feedback varchar(255) null,
    sub_feedback  varchar(255) null,
    price         int          null,
    img_src       varchar(255) null,
    icon_src      varchar(255) null
);

create table internal_device_option
(
    id       bigint auto_increment
        primary key,
    `name`     varchar(40)  null,
    price    int          null,
    icon_src varchar(255) null
);

create table internal_device_option_component
(
    id          bigint auto_increment
        primary key,
    package_id  bigint       null,
    `name`        varchar(40)  null,
    `description` varchar(255) null,
    img_src     varchar(255) null,
    constraint internal_device_option_component_ibfk_1
        foreign key (package_id) references internal_device_option (id)
);

create table powertrain_option
(
    id               bigint auto_increment
        primary key,
    `name`             varchar(40)   null,
    main_description varchar(1024) null,
    sub_description  varchar(1024) null,
    main_feedback    varchar(255)  null,
    sub_feedback     varchar(255)  null,
    price            int           null,
    img_src          varchar(255)  null
);

create table system_option
(
    id       bigint auto_increment
        primary key,
    `name`     varchar(40)  null,
    price    int          null,
    icon_src varchar(255) null
);

create table system_option_component
(
    id          bigint auto_increment
        primary key,
    package_id  bigint       null,
    `name`        varchar(40)  null,
    `description` varchar(255) null,
    img_src     varchar(255) null,
    constraint system_option_component_ibfk_1
        foreign key (package_id) references system_option (id)
);

create table tag
(
    id   bigint      not null
        primary key,
    `name` varchar(40) null
);

create table tag_body_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_body_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_body_map_ibfk_2
        foreign key (option_id) references body_option (id)
);

create table tag_external_device_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_external_device_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_external_device_map_ibfk_2
        foreign key (option_id) references external_device_option (id)
);

create table tag_internal_device_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_internal_device_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_internal_device_map_ibfk_2
        foreign key (option_id) references internal_device_option (id)
);

create table tag_powertrain_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_powertrain_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_powertrain_map_ibfk_2
        foreign key (option_id) references powertrain_option (id)
);

create table tag_system_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_system_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_system_map_ibfk_2
        foreign key (option_id) references system_option (id)
);

create table temperature_option
(
    id       bigint auto_increment
        primary key,
    `name`     varchar(40)  null,
    price    int          null,
    icon_src varchar(255) null
);

create table tag_temperature_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_temperature_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_temperature_map_ibfk_2
        foreign key (option_id) references temperature_option (id)
);

create table temperature_option_component
(
    id          bigint auto_increment
        primary key,
    package_id  bigint       null,
    `name`        varchar(40)  null,
    `description` varchar(255) null,
    img_src     varchar(255) null,
    constraint temperature_option_component_ibfk_1
        foreign key (package_id) references temperature_option (id)
);

create table trim
(
    id            bigint      not null
        primary key,
    `name`          varchar(40) null,
    `description`   varchar(40) null,
    default_price int         null,
    rep_color_id  bigint      null,
    isBest        boolean  null,
    constraint trim_ibfk_1
        foreign key (rep_color_id) references exterior_color (id)
);

create table core_option
(
    id      bigint auto_increment
        primary key,
    `name`    varchar(40)  null,
    trim_id bigint       null,
    img_src varchar(200) null,
    constraint core_option_ibfk_1
        foreign key (trim_id) references trim (id)
);

create table trim_default_option_map
(
    id            bigint auto_increment
        primary key,
    def_option_id bigint null,
    trim_id       bigint null,
    constraint trim_default_option_map_ibfk_1
        foreign key (def_option_id) references default_option (id),
    constraint trim_default_option_map_ibfk_2
        foreign key (trim_id) references trim (id)
);

create table trim_exterior_color_map
(
    id         bigint auto_increment
        primary key,
    e_color_id bigint null,
    trim_id    bigint null,
    constraint trim_exterior_color_map_ibfk_1
        foreign key (e_color_id) references exterior_color (id),
    constraint trim_exterior_color_map_ibfk_2
        foreign key (trim_id) references trim (id)
);

create table trim_interior_color_map
(
    id         bigint auto_increment
        primary key,
    i_color_id bigint null,
    trim_id    bigint null,
    constraint trim_interior_color_map_ibfk_1
        foreign key (i_color_id) references interior_color (id),
    constraint trim_interior_color_map_ibfk_2
        foreign key (trim_id) references trim (id)
);

create table wd_option
(
    id               bigint auto_increment
        primary key,
    `name`             varchar(40)   null,
    main_description varchar(1024) null,
    main_feedback    varchar(255)  null,
    sub_feedback     varchar(255)  null,
    price            int           null,
    img_src          varchar(255)  null
);

create table tag_wd_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_wd_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_wd_map_ibfk_2
        foreign key (option_id) references wd_option (id)
);

create table wheel_option
(
    id            bigint auto_increment
        primary key,
    `name`          varchar(40)  null,
    main_feedback varchar(255) null,
    sub_feedback  varchar(255) null,
    price         int          null,
    img_src       varchar(255) null,
    icon_src      varchar(255) null
);

create table purchase_history
(
    id                bigint not null
        primary key,
    trim_id           bigint null,
    powertrain_id     bigint null,
    wd_id             bigint null,
    body_id           bigint null,
    exterior_color_id bigint null,
    interior_color_id bigint null,
    wheel_id          bigint null,
    age               int    null,
    gender            char   null,
    tag1_id           bigint null,
    tag2_id           bigint null,
    tag3_id           bigint null,
    constraint purchase_history_ibfk_1
        foreign key (trim_id) references trim (id),
    constraint purchase_history_ibfk_10
        foreign key (tag3_id) references tag (id),
    constraint purchase_history_ibfk_2
        foreign key (powertrain_id) references powertrain_option (id),
    constraint purchase_history_ibfk_3
        foreign key (wd_id) references wd_option (id),
    constraint purchase_history_ibfk_4
        foreign key (body_id) references body_option (id),
    constraint purchase_history_ibfk_5
        foreign key (exterior_color_id) references exterior_color_option (id),
    constraint purchase_history_ibfk_6
        foreign key (interior_color_id) references interior_color_option (id),
    constraint purchase_history_ibfk_7
        foreign key (wheel_id) references wheel_option (id),
    constraint purchase_history_ibfk_8
        foreign key (tag1_id) references tag (id),
    constraint purchase_history_ibfk_9
        foreign key (tag2_id) references tag (id)
);

create table purchase_external_device_map
(
    id          bigint auto_increment
        primary key,
    purchase_id bigint null,
    option_id   bigint null,
    constraint purchase_external_device_map_ibfk_1
        foreign key (purchase_id) references purchase_history (id),
    constraint purchase_external_device_map_ibfk_2
        foreign key (option_id) references external_device_option (id)
);

create table purchase_internal_device_map
(
    id          bigint auto_increment
        primary key,
    purchase_id bigint null,
    option_id   bigint null,
    constraint purchase_internal_device_map_ibfk_1
        foreign key (purchase_id) references purchase_history (id),
    constraint purchase_internal_device_map_ibfk_2
        foreign key (option_id) references internal_device_option (id)
);

create table purchase_system_map
(
    id          bigint auto_increment
        primary key,
    purchase_id bigint null,
    option_id   bigint null,
    constraint purchase_system_map_ibfk_1
        foreign key (purchase_id) references purchase_history (id),
    constraint purchase_system_map_ibfk_2
        foreign key (option_id) references system_option (id)
);

create table purchase_temperature_map
(
    id          bigint auto_increment
        primary key,
    purchase_id bigint null,
    option_id   bigint null,
    constraint purchase_temperature_map_ibfk_1
        foreign key (purchase_id) references purchase_history (id),
    constraint purchase_temperature_map_ibfk_2
        foreign key (option_id) references temperature_option (id)
);

create table tag_wheel_map
(
    id        bigint auto_increment
        primary key,
    tag_id    bigint null,
    option_id bigint null,
    constraint tag_wheel_map_ibfk_1
        foreign key (tag_id) references tag (id),
    constraint tag_wheel_map_ibfk_2
        foreign key (option_id) references wheel_option (id)
);