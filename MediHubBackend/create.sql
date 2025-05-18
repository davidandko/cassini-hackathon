create sequence device_data_seq start with 1 increment by 50;
create sequence device_seq start with 1 increment by 50;
create sequence env_risk_factors_seq start with 1 increment by 50;
create sequence medi_hub_app_seq start with 1 increment by 50;
create sequence satelite_metric_seq start with 1 increment by 50;
create table device
(
    id                      bigint not null,
    name                    varchar(255),
    registered_for_username varchar(255),
    primary key (id)
);
create table device_generated_data
(
    device_id         bigint not null,
    generated_data_id bigint not null
);
create table device_data
(
    id               bigint not null,
    measured_at      timestamp(6),
    data             varchar(255),
    device_data_name varchar(255),
    primary key (id)
);
create table env_risk_factors
(
    id   bigint not null,
    name varchar(255),
    primary key (id)
);
create table env_risk_factors_measured_by_metrics
(
    env_risk_factors_id    bigint not null,
    measured_by_metrics_id bigint not null
);
create table health_metric
(
    name varchar(255) not null,
    primary key (name)
);
create table health_metric_measured_in
(
    measured_in_id         bigint       not null,
    for_health_metric_name varchar(255) not null
);
create table illness
(
    name varchar(255) not null,
    primary key (name)
);
create table illness_heal_metrics_influence
(
    heal_metrics_influence_name varchar(255) not null,
    illness_name                varchar(255) not null
);
create table illness_linked_env_risk_factor
(
    correlation_point  float(53)    not null,
    env_risk_factor_id bigint       not null,
    illness_name       varchar(255) not null,
    primary key (env_risk_factor_id, illness_name)
);
create table medi_hub_app
(
    api_key varchar(255),
    app_id  varchar(255) not null,
    primary key (app_id)
);
create table medi_hub_app_required_health_metrics
(
    medi_hub_app_app_id          varchar(255) not null,
    required_health_metrics_name varchar(255) not null
);
create table medi_hub_user
(
    current_latitude   float(53)    not null,
    current_longtitude float(53)    not null,
    username           varchar(255) not null,
    primary key (username)
);
create table medi_hub_user_registered_devices
(
    registered_devices_id  bigint       not null unique,
    medi_hub_user_username varchar(255) not null
);
create table satelite
(
    name             varchar(255) not null,
    satelite_url_api varchar(255),
    primary key (name)
);
create table satelite_metric
(
    id                  bigint not null,
    band_id             varchar(255),
    readable_param_name varchar(255),
    primary key (id)
);
create table satelite_metric_satelites
(
    satelite_metric_id bigint       not null,
    satelites_name     varchar(255) not null
);
alter table if exists device
    add constraint FK9ekxrq0px8fho9stikoswdeg0 foreign key (registered_for_username) references medi_hub_user;
alter table if exists device_generated_data
    add constraint FK2p5qk9v12l08bfnuerkpsvxla foreign key (generated_data_id) references device_data;
alter table if exists device_generated_data
    add constraint FKa56krprwavxbr5uryucgol0f1 foreign key (device_id) references device;
alter table if exists env_risk_factors_measured_by_metrics
    add constraint FKo0pqve65tm3mkh5h50o8145kl foreign key (measured_by_metrics_id) references satelite_metric;
alter table if exists env_risk_factors_measured_by_metrics
    add constraint FKqk00w67esoct9yr3ms1gw4o48 foreign key (env_risk_factors_id) references env_risk_factors;
alter table if exists health_metric_measured_in
    add constraint FK2gyho3sqddjwni6u4i32ead0d foreign key (measured_in_id) references device_data;
alter table if exists health_metric_measured_in
    add constraint FK50e97nqmima7cw5dl0ddr9ii0 foreign key (for_health_metric_name) references health_metric;
alter table if exists illness_heal_metrics_influence
    add constraint FK8hduslh06lwo7srrnb9ybxsyl foreign key (heal_metrics_influence_name) references health_metric;
alter table if exists illness_heal_metrics_influence
    add constraint FKmlxb440w0wys3pediie226e1k foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor
    add constraint FK1y8na3t8qy09m1uuscg9jbsfx foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor
    add constraint FKq64yr04qlamkijhsv6xch7avo foreign key (env_risk_factor_id) references env_risk_factors;
alter table if exists medi_hub_app_required_health_metrics
    add constraint FK77w1lwexn96qsrj58c3v3ie0w foreign key (required_health_metrics_name) references health_metric;
alter table if exists medi_hub_app_required_health_metrics
    add constraint FKghjsn5kys1x60riw8cnaxcfg3 foreign key (medi_hub_app_app_id) references medi_hub_app;
alter table if exists medi_hub_user_registered_devices
    add constraint FK6qp0b3jdf03kx2f2fd7g0mnxa foreign key (registered_devices_id) references device;
alter table if exists medi_hub_user_registered_devices
    add constraint FK1c8oqpspy7rhdtxf5vkrp5bjs foreign key (medi_hub_user_username) references medi_hub_user;
alter table if exists satelite_metric_satelites
    add constraint FKrln37bj2qnk1g1fyg4etr9pd4 foreign key (satelites_name) references satelite;
alter table if exists satelite_metric_satelites
    add constraint FKjb3j1wai0q8je3mw0ow2c1w1p foreign key (satelite_metric_id) references satelite_metric;
create sequence device_data_seq start with 1 increment by 50;
create sequence device_seq start with 1 increment by 50;
create sequence env_risk_factors_seq start with 1 increment by 50;
create sequence medi_hub_app_seq start with 1 increment by 50;
create sequence satelite_metric_seq start with 1 increment by 50;
create table device
(
    id                    bigint not null,
    name                  varchar(255),
    register_for_username varchar(255),
    primary key (id)
);
create table device_generated_data
(
    device_id         bigint not null,
    generated_data_id bigint not null
);
create table device_data
(
    id               bigint not null,
    measured_at      timestamp(6),
    data             varchar(255),
    device_data_name varchar(255),
    primary key (id)
);
create table env_risk_factors
(
    id   bigint not null,
    name varchar(255),
    primary key (id)
);
create table env_risk_factors_measured_by_metrics
(
    env_risk_factors_id    bigint not null,
    measured_by_metrics_id bigint not null
);
create table health_metric
(
    name varchar(255) not null,
    primary key (name)
);
create table health_metric_measured_in
(
    measured_in_id         bigint       not null,
    for_health_metric_name varchar(255) not null
);
create table illness
(
    name varchar(255) not null,
    primary key (name)
);
create table illness_heal_metrics_influence
(
    heal_metrics_influence_name varchar(255) not null,
    illness_name                varchar(255) not null
);
create table illness_linked_env_risk_factor
(
    correlation_point  float(53)    not null,
    env_risk_factor_id bigint       not null,
    illness_name       varchar(255) not null,
    primary key (env_risk_factor_id, illness_name)
);
create table medi_hub_app
(
    api_key varchar(255),
    app_id  varchar(255) not null,
    primary key (app_id)
);
create table medi_hub_app_required_health_metrics
(
    medi_hub_app_app_id          varchar(255) not null,
    required_health_metrics_name varchar(255) not null
);
create table medi_hub_user
(
    current_latitude   float(53)    not null,
    current_longtitude float(53)    not null,
    username           varchar(255) not null,
    primary key (username)
);
create table medi_hub_user_registered_devices
(
    registered_devices_id  bigint       not null unique,
    medi_hub_user_username varchar(255) not null
);
create table satelite
(
    name             varchar(255) not null,
    satelite_url_api varchar(255),
    primary key (name)
);
create table satelite_metric
(
    id                  bigint not null,
    band_id             varchar(255),
    readable_param_name varchar(255),
    primary key (id)
);
create table satelite_metric_satelites
(
    satelite_metric_id bigint       not null,
    satelites_name     varchar(255) not null
);
alter table if exists device
    add constraint FKic4d9tc38yujr4jqssyjsk4g7 foreign key (register_for_username) references medi_hub_user;
alter table if exists device_generated_data
    add constraint FK2p5qk9v12l08bfnuerkpsvxla foreign key (generated_data_id) references device_data;
alter table if exists device_generated_data
    add constraint FKa56krprwavxbr5uryucgol0f1 foreign key (device_id) references device;
alter table if exists env_risk_factors_measured_by_metrics
    add constraint FKo0pqve65tm3mkh5h50o8145kl foreign key (measured_by_metrics_id) references satelite_metric;
alter table if exists env_risk_factors_measured_by_metrics
    add constraint FKqk00w67esoct9yr3ms1gw4o48 foreign key (env_risk_factors_id) references env_risk_factors;
alter table if exists health_metric_measured_in
    add constraint FK2gyho3sqddjwni6u4i32ead0d foreign key (measured_in_id) references device_data;
alter table if exists health_metric_measured_in
    add constraint FK50e97nqmima7cw5dl0ddr9ii0 foreign key (for_health_metric_name) references health_metric;
alter table if exists illness_heal_metrics_influence
    add constraint FK8hduslh06lwo7srrnb9ybxsyl foreign key (heal_metrics_influence_name) references health_metric;
alter table if exists illness_heal_metrics_influence
    add constraint FKmlxb440w0wys3pediie226e1k foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor
    add constraint FK1y8na3t8qy09m1uuscg9jbsfx foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor
    add constraint FKq64yr04qlamkijhsv6xch7avo foreign key (env_risk_factor_id) references env_risk_factors;
alter table if exists medi_hub_app_required_health_metrics
    add constraint FK77w1lwexn96qsrj58c3v3ie0w foreign key (required_health_metrics_name) references health_metric;
alter table if exists medi_hub_app_required_health_metrics
    add constraint FKghjsn5kys1x60riw8cnaxcfg3 foreign key (medi_hub_app_app_id) references medi_hub_app;
alter table if exists medi_hub_user_registered_devices
    add constraint FK6qp0b3jdf03kx2f2fd7g0mnxa foreign key (registered_devices_id) references device;
alter table if exists medi_hub_user_registered_devices
    add constraint FK1c8oqpspy7rhdtxf5vkrp5bjs foreign key (medi_hub_user_username) references medi_hub_user;
alter table if exists satelite_metric_satelites
    add constraint FKrln37bj2qnk1g1fyg4etr9pd4 foreign key (satelites_name) references satelite;
alter table if exists satelite_metric_satelites
    add constraint FKjb3j1wai0q8je3mw0ow2c1w1p foreign key (satelite_metric_id) references satelite_metric;
create sequence device_data_seq start with 1 increment by 50;
create sequence device_seq start with 1 increment by 50;
create sequence env_risk_factors_seq start with 1 increment by 50;
create sequence medi_hub_app_seq start with 1 increment by 50;
create sequence satelite_metric_seq start with 1 increment by 50;
create table device (id bigint not null, name varchar(255), register_for_username varchar(255), primary key (id));
create table device_generated_data (device_id bigint not null, generated_data_id bigint not null);
create table device_data (id bigint not null, measured_at timestamp(6), data varchar(255), device_data_name varchar(255), primary key (id));
create table env_risk_factors (id bigint not null, name varchar(255), primary key (id));
create table env_risk_factors_measured_by_metrics (env_risk_factors_id bigint not null, measured_by_metrics_id bigint not null);
create table health_metric (name varchar(255) not null, primary key (name));
create table health_metric_measured_in (measured_in_id bigint not null, for_health_metric_name varchar(255) not null);
create table illness (name varchar(255) not null, primary key (name));
create table illness_heal_metrics_influence (heal_metrics_influence_name varchar(255) not null, illness_name varchar(255) not null);
create table illness_linked_env_risk_factor (correlation_point float(53) not null, env_risk_factor_id bigint not null, illness_name varchar(255) not null, primary key (env_risk_factor_id, illness_name));
create table medi_hub_app (api_key varchar(255), app_id varchar(255) not null, primary key (app_id));
create table medi_hub_app_required_health_metrics (medi_hub_app_app_id varchar(255) not null, required_health_metrics_name varchar(255) not null);
create table medi_hub_user (current_latitude float(53) not null, current_longtitude float(53) not null, username varchar(255) not null, primary key (username));
create table medi_hub_user_registered_devices (registered_devices_id bigint not null unique, medi_hub_user_username varchar(255) not null);
create table satelite (name varchar(255) not null, satelite_url_api varchar(255), primary key (name));
create table satelite_metric (id bigint not null, band_id varchar(255), readable_param_name varchar(255), primary key (id));
create table satelite_metric_satelites (satelite_metric_id bigint not null, satelites_name varchar(255) not null);
alter table if exists device add constraint FKic4d9tc38yujr4jqssyjsk4g7 foreign key (register_for_username) references medi_hub_user;
alter table if exists device_generated_data add constraint FK2p5qk9v12l08bfnuerkpsvxla foreign key (generated_data_id) references device_data;
alter table if exists device_generated_data add constraint FKa56krprwavxbr5uryucgol0f1 foreign key (device_id) references device;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKo0pqve65tm3mkh5h50o8145kl foreign key (measured_by_metrics_id) references satelite_metric;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKqk00w67esoct9yr3ms1gw4o48 foreign key (env_risk_factors_id) references env_risk_factors;
alter table if exists health_metric_measured_in add constraint FK2gyho3sqddjwni6u4i32ead0d foreign key (measured_in_id) references device_data;
alter table if exists health_metric_measured_in add constraint FK50e97nqmima7cw5dl0ddr9ii0 foreign key (for_health_metric_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FK8hduslh06lwo7srrnb9ybxsyl foreign key (heal_metrics_influence_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FKmlxb440w0wys3pediie226e1k foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FK1y8na3t8qy09m1uuscg9jbsfx foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FKq64yr04qlamkijhsv6xch7avo foreign key (env_risk_factor_id) references env_risk_factors;
alter table if exists medi_hub_app_required_health_metrics add constraint FK77w1lwexn96qsrj58c3v3ie0w foreign key (required_health_metrics_name) references health_metric;
alter table if exists medi_hub_app_required_health_metrics add constraint FKghjsn5kys1x60riw8cnaxcfg3 foreign key (medi_hub_app_app_id) references medi_hub_app;
alter table if exists medi_hub_user_registered_devices add constraint FK6qp0b3jdf03kx2f2fd7g0mnxa foreign key (registered_devices_id) references device;
alter table if exists medi_hub_user_registered_devices add constraint FK1c8oqpspy7rhdtxf5vkrp5bjs foreign key (medi_hub_user_username) references medi_hub_user;
alter table if exists satelite_metric_satelites add constraint FKrln37bj2qnk1g1fyg4etr9pd4 foreign key (satelites_name) references satelite;
alter table if exists satelite_metric_satelites add constraint FKjb3j1wai0q8je3mw0ow2c1w1p foreign key (satelite_metric_id) references satelite_metric;
create sequence device_data_seq start with 1 increment by 50;
create sequence device_seq start with 1 increment by 50;
create sequence env_risk_factors_seq start with 1 increment by 50;
create sequence medi_hub_app_seq start with 1 increment by 50;
create sequence satelite_metric_seq start with 1 increment by 50;
create table device (id bigint not null, name varchar(255), register_for_username varchar(255), primary key (id));
create table device_generated_data (device_id bigint not null, generated_data_id bigint not null);
create table device_data (id bigint not null, measured_at timestamp(6), data varchar(255), device_data_name varchar(255), primary key (id));
create table env_risk_factors (id bigint not null, name varchar(255), primary key (id));
create table env_risk_factors_measured_by_metrics (env_risk_factors_id bigint not null, measured_by_metrics_id bigint not null);
create table health_metric (name varchar(255) not null, primary key (name));
create table health_metric_measured_in (measured_in_id bigint not null, for_health_metric_name varchar(255) not null);
create table illness (name varchar(255) not null, primary key (name));
create table illness_heal_metrics_influence (heal_metrics_influence_name varchar(255) not null, illness_name varchar(255) not null);
create table illness_linked_env_risk_factor (correlation_point float(53) not null, env_risk_factor_id bigint not null, illness_name varchar(255) not null, primary key (env_risk_factor_id, illness_name));
create table medi_hub_app (api_key varchar(255), app_id varchar(255) not null, primary key (app_id));
create table medi_hub_app_required_health_metrics (medi_hub_app_app_id varchar(255) not null, required_health_metrics_name varchar(255) not null);
create table medi_hub_user (current_latitude float(53) not null, current_longtitude float(53) not null, username varchar(255) not null, primary key (username));
create table medi_hub_user_registered_devices (registered_devices_id bigint not null unique, medi_hub_user_username varchar(255) not null);
create table satelite (name varchar(255) not null, satelite_url_api varchar(255), primary key (name));
create table satelite_metric (id bigint not null, band_id varchar(255), readable_param_name varchar(255), primary key (id));
create table satelite_metric_satelites (satelite_metric_id bigint not null, satelites_name varchar(255) not null);
alter table if exists device add constraint FKic4d9tc38yujr4jqssyjsk4g7 foreign key (register_for_username) references medi_hub_user;
alter table if exists device_generated_data add constraint FK2p5qk9v12l08bfnuerkpsvxla foreign key (generated_data_id) references device_data;
alter table if exists device_generated_data add constraint FKa56krprwavxbr5uryucgol0f1 foreign key (device_id) references device;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKo0pqve65tm3mkh5h50o8145kl foreign key (measured_by_metrics_id) references satelite_metric;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKqk00w67esoct9yr3ms1gw4o48 foreign key (env_risk_factors_id) references env_risk_factors;
alter table if exists health_metric_measured_in add constraint FK2gyho3sqddjwni6u4i32ead0d foreign key (measured_in_id) references device_data;
alter table if exists health_metric_measured_in add constraint FK50e97nqmima7cw5dl0ddr9ii0 foreign key (for_health_metric_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FK8hduslh06lwo7srrnb9ybxsyl foreign key (heal_metrics_influence_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FKmlxb440w0wys3pediie226e1k foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FK1y8na3t8qy09m1uuscg9jbsfx foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FKq64yr04qlamkijhsv6xch7avo foreign key (env_risk_factor_id) references env_risk_factors;
alter table if exists medi_hub_app_required_health_metrics add constraint FK77w1lwexn96qsrj58c3v3ie0w foreign key (required_health_metrics_name) references health_metric;
alter table if exists medi_hub_app_required_health_metrics add constraint FKghjsn5kys1x60riw8cnaxcfg3 foreign key (medi_hub_app_app_id) references medi_hub_app;
alter table if exists medi_hub_user_registered_devices add constraint FK6qp0b3jdf03kx2f2fd7g0mnxa foreign key (registered_devices_id) references device;
alter table if exists medi_hub_user_registered_devices add constraint FK1c8oqpspy7rhdtxf5vkrp5bjs foreign key (medi_hub_user_username) references medi_hub_user;
alter table if exists satelite_metric_satelites add constraint FKrln37bj2qnk1g1fyg4etr9pd4 foreign key (satelites_name) references satelite;
alter table if exists satelite_metric_satelites add constraint FKjb3j1wai0q8je3mw0ow2c1w1p foreign key (satelite_metric_id) references satelite_metric;
create sequence device_data_seq start with 1 increment by 50;
create sequence device_seq start with 1 increment by 50;
create sequence env_risk_factors_seq start with 1 increment by 50;
create sequence medi_hub_app_seq start with 1 increment by 50;
create sequence satelite_metric_seq start with 1 increment by 50;
create table device (id bigint not null, name varchar(255), register_for_username varchar(255), primary key (id));
create table device_generated_data (device_id bigint not null, generated_data_id bigint not null);
create table device_data (id bigint not null, measured_at timestamp(6), data varchar(255), device_data_name varchar(255), primary key (id));
create table env_risk_factors (id bigint not null, name varchar(255), primary key (id));
create table env_risk_factors_measured_by_metrics (env_risk_factors_id bigint not null, measured_by_metrics_id bigint not null);
create table health_metric (name varchar(255) not null, primary key (name));
create table health_metric_measured_in (measured_in_id bigint not null, for_health_metric_name varchar(255) not null);
create table illness (name varchar(255) not null, primary key (name));
create table illness_heal_metrics_influence (heal_metrics_influence_name varchar(255) not null, illness_name varchar(255) not null);
create table illness_linked_env_risk_factor (correlation_point float(53) not null, env_risk_factor_id bigint not null, illness_name varchar(255) not null, primary key (env_risk_factor_id, illness_name));
create table medi_hub_app (api_key varchar(255), app_id varchar(255) not null, primary key (app_id));
create table medi_hub_app_required_health_metrics (medi_hub_app_app_id varchar(255) not null, required_health_metrics_name varchar(255) not null);
create table medi_hub_user (current_latitude float(53) not null, current_longtitude float(53) not null, username varchar(255) not null, primary key (username));
create table medi_hub_user_registered_devices (registered_devices_id bigint not null unique, medi_hub_user_username varchar(255) not null);
create table satelite (name varchar(255) not null, satelite_url_api varchar(255), primary key (name));
create table satelite_metric (id bigint not null, band_id varchar(255), readable_param_name varchar(255), primary key (id));
create table satelite_metric_satelites (satelite_metric_id bigint not null, satelites_name varchar(255) not null);
alter table if exists device add constraint FKic4d9tc38yujr4jqssyjsk4g7 foreign key (register_for_username) references medi_hub_user;
alter table if exists device_generated_data add constraint FK2p5qk9v12l08bfnuerkpsvxla foreign key (generated_data_id) references device_data;
alter table if exists device_generated_data add constraint FKa56krprwavxbr5uryucgol0f1 foreign key (device_id) references device;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKo0pqve65tm3mkh5h50o8145kl foreign key (measured_by_metrics_id) references satelite_metric;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKqk00w67esoct9yr3ms1gw4o48 foreign key (env_risk_factors_id) references env_risk_factors;
alter table if exists health_metric_measured_in add constraint FK2gyho3sqddjwni6u4i32ead0d foreign key (measured_in_id) references device_data;
alter table if exists health_metric_measured_in add constraint FK50e97nqmima7cw5dl0ddr9ii0 foreign key (for_health_metric_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FK8hduslh06lwo7srrnb9ybxsyl foreign key (heal_metrics_influence_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FKmlxb440w0wys3pediie226e1k foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FK1y8na3t8qy09m1uuscg9jbsfx foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FKq64yr04qlamkijhsv6xch7avo foreign key (env_risk_factor_id) references env_risk_factors;
alter table if exists medi_hub_app_required_health_metrics add constraint FK77w1lwexn96qsrj58c3v3ie0w foreign key (required_health_metrics_name) references health_metric;
alter table if exists medi_hub_app_required_health_metrics add constraint FKghjsn5kys1x60riw8cnaxcfg3 foreign key (medi_hub_app_app_id) references medi_hub_app;
alter table if exists medi_hub_user_registered_devices add constraint FK6qp0b3jdf03kx2f2fd7g0mnxa foreign key (registered_devices_id) references device;
alter table if exists medi_hub_user_registered_devices add constraint FK1c8oqpspy7rhdtxf5vkrp5bjs foreign key (medi_hub_user_username) references medi_hub_user;
alter table if exists satelite_metric_satelites add constraint FKrln37bj2qnk1g1fyg4etr9pd4 foreign key (satelites_name) references satelite;
alter table if exists satelite_metric_satelites add constraint FKjb3j1wai0q8je3mw0ow2c1w1p foreign key (satelite_metric_id) references satelite_metric;
create sequence device_data_seq start with 1 increment by 50;
create sequence device_seq start with 1 increment by 50;
create sequence env_risk_factors_seq start with 1 increment by 50;
create sequence medi_hub_app_seq start with 1 increment by 50;
create sequence satelite_metric_seq start with 1 increment by 50;
create table device (id bigint not null, name varchar(255), register_for_username varchar(255), primary key (id));
create table device_generated_data (device_id bigint not null, generated_data_id bigint not null);
create table device_data (id bigint not null, measured_at timestamp(6), data varchar(255), device_data_name varchar(255), primary key (id));
create table env_risk_factors (id bigint not null, name varchar(255), primary key (id));
create table env_risk_factors_measured_by_metrics (env_risk_factors_id bigint not null, measured_by_metrics_id bigint not null);
create table health_metric (name varchar(255) not null, primary key (name));
create table health_metric_measured_in (measured_in_id bigint not null, for_health_metric_name varchar(255) not null);
create table illness (name varchar(255) not null, primary key (name));
create table illness_heal_metrics_influence (heal_metrics_influence_name varchar(255) not null, illness_name varchar(255) not null);
create table illness_linked_env_risk_factor (correlation_point float(53) not null, env_risk_factor_id bigint not null, illness_name varchar(255) not null, primary key (env_risk_factor_id, illness_name));
create table medi_hub_app (api_key varchar(255), app_id varchar(255) not null, primary key (app_id));
create table medi_hub_app_required_health_metrics (medi_hub_app_app_id varchar(255) not null, required_health_metrics_name varchar(255) not null);
create table medi_hub_user (current_latitude float(53) not null, current_longtitude float(53) not null, username varchar(255) not null, primary key (username));
create table medi_hub_user_registered_devices (registered_devices_id bigint not null unique, medi_hub_user_username varchar(255) not null);
create table satelite (name varchar(255) not null, satelite_url_api varchar(255), primary key (name));
create table satelite_metric (id bigint not null, band_id varchar(255), readable_param_name varchar(255), primary key (id));
create table satelite_metric_satelites (satelite_metric_id bigint not null, satelites_name varchar(255) not null);
alter table if exists device add constraint FKic4d9tc38yujr4jqssyjsk4g7 foreign key (register_for_username) references medi_hub_user;
alter table if exists device_generated_data add constraint FK2p5qk9v12l08bfnuerkpsvxla foreign key (generated_data_id) references device_data;
alter table if exists device_generated_data add constraint FKa56krprwavxbr5uryucgol0f1 foreign key (device_id) references device;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKo0pqve65tm3mkh5h50o8145kl foreign key (measured_by_metrics_id) references satelite_metric;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKqk00w67esoct9yr3ms1gw4o48 foreign key (env_risk_factors_id) references env_risk_factors;
alter table if exists health_metric_measured_in add constraint FK2gyho3sqddjwni6u4i32ead0d foreign key (measured_in_id) references device_data;
alter table if exists health_metric_measured_in add constraint FK50e97nqmima7cw5dl0ddr9ii0 foreign key (for_health_metric_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FK8hduslh06lwo7srrnb9ybxsyl foreign key (heal_metrics_influence_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FKmlxb440w0wys3pediie226e1k foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FK1y8na3t8qy09m1uuscg9jbsfx foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FKq64yr04qlamkijhsv6xch7avo foreign key (env_risk_factor_id) references env_risk_factors;
alter table if exists medi_hub_app_required_health_metrics add constraint FK77w1lwexn96qsrj58c3v3ie0w foreign key (required_health_metrics_name) references health_metric;
alter table if exists medi_hub_app_required_health_metrics add constraint FKghjsn5kys1x60riw8cnaxcfg3 foreign key (medi_hub_app_app_id) references medi_hub_app;
alter table if exists medi_hub_user_registered_devices add constraint FK6qp0b3jdf03kx2f2fd7g0mnxa foreign key (registered_devices_id) references device;
alter table if exists medi_hub_user_registered_devices add constraint FK1c8oqpspy7rhdtxf5vkrp5bjs foreign key (medi_hub_user_username) references medi_hub_user;
alter table if exists satelite_metric_satelites add constraint FKrln37bj2qnk1g1fyg4etr9pd4 foreign key (satelites_name) references satelite;
alter table if exists satelite_metric_satelites add constraint FKjb3j1wai0q8je3mw0ow2c1w1p foreign key (satelite_metric_id) references satelite_metric;
create sequence device_data_seq start with 1 increment by 50;
create sequence device_seq start with 1 increment by 50;
create sequence env_risk_factors_seq start with 1 increment by 50;
create sequence medi_hub_app_seq start with 1 increment by 50;
create sequence satelite_metric_seq start with 1 increment by 50;
create table device (id bigint not null, name varchar(255), register_for_username varchar(255), primary key (id));
create table device_generated_data (device_id bigint not null, generated_data_id bigint not null);
create table device_data (id bigint not null, measured_at timestamp(6), data varchar(255), device_data_name varchar(255), primary key (id));
create table env_risk_factors (id bigint not null, name varchar(255), primary key (id));
create table env_risk_factors_measured_by_metrics (env_risk_factors_id bigint not null, measured_by_metrics_id bigint not null);
create table health_metric (name varchar(255) not null, primary key (name));
create table health_metric_measured_in (measured_in_id bigint not null, for_health_metric_name varchar(255) not null);
create table illness (name varchar(255) not null, primary key (name));
create table illness_heal_metrics_influence (heal_metrics_influence_name varchar(255) not null, illness_name varchar(255) not null);
create table illness_linked_env_risk_factor (correlation_point float(53) not null, env_risk_factor_id bigint not null, illness_name varchar(255) not null, primary key (env_risk_factor_id, illness_name));
create table medi_hub_app (api_key varchar(255), app_id varchar(255) not null, primary key (app_id));
create table medi_hub_app_required_health_metrics (medi_hub_app_app_id varchar(255) not null, required_health_metrics_name varchar(255) not null);
create table medi_hub_user (current_latitude float(53) not null, current_longtitude float(53) not null, username varchar(255) not null, primary key (username));
create table medi_hub_user_registered_devices (registered_devices_id bigint not null unique, medi_hub_user_username varchar(255) not null);
create table satelite (name varchar(255) not null, satelite_url_api varchar(255), primary key (name));
create table satelite_metric (id bigint not null, band_id varchar(255), readable_param_name varchar(255), primary key (id));
create table satelite_metric_satelites (satelite_metric_id bigint not null, satelites_name varchar(255) not null);
alter table if exists device add constraint FKic4d9tc38yujr4jqssyjsk4g7 foreign key (register_for_username) references medi_hub_user;
alter table if exists device_generated_data add constraint FK2p5qk9v12l08bfnuerkpsvxla foreign key (generated_data_id) references device_data;
alter table if exists device_generated_data add constraint FKa56krprwavxbr5uryucgol0f1 foreign key (device_id) references device;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKo0pqve65tm3mkh5h50o8145kl foreign key (measured_by_metrics_id) references satelite_metric;
alter table if exists env_risk_factors_measured_by_metrics add constraint FKqk00w67esoct9yr3ms1gw4o48 foreign key (env_risk_factors_id) references env_risk_factors;
alter table if exists health_metric_measured_in add constraint FK2gyho3sqddjwni6u4i32ead0d foreign key (measured_in_id) references device_data;
alter table if exists health_metric_measured_in add constraint FK50e97nqmima7cw5dl0ddr9ii0 foreign key (for_health_metric_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FK8hduslh06lwo7srrnb9ybxsyl foreign key (heal_metrics_influence_name) references health_metric;
alter table if exists illness_heal_metrics_influence add constraint FKmlxb440w0wys3pediie226e1k foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FK1y8na3t8qy09m1uuscg9jbsfx foreign key (illness_name) references illness;
alter table if exists illness_linked_env_risk_factor add constraint FKq64yr04qlamkijhsv6xch7avo foreign key (env_risk_factor_id) references env_risk_factors;
alter table if exists medi_hub_app_required_health_metrics add constraint FK77w1lwexn96qsrj58c3v3ie0w foreign key (required_health_metrics_name) references health_metric;
alter table if exists medi_hub_app_required_health_metrics add constraint FKghjsn5kys1x60riw8cnaxcfg3 foreign key (medi_hub_app_app_id) references medi_hub_app;
alter table if exists medi_hub_user_registered_devices add constraint FK6qp0b3jdf03kx2f2fd7g0mnxa foreign key (registered_devices_id) references device;
alter table if exists medi_hub_user_registered_devices add constraint FK1c8oqpspy7rhdtxf5vkrp5bjs foreign key (medi_hub_user_username) references medi_hub_user;
alter table if exists satelite_metric_satelites add constraint FKrln37bj2qnk1g1fyg4etr9pd4 foreign key (satelites_name) references satelite;
alter table if exists satelite_metric_satelites add constraint FKjb3j1wai0q8je3mw0ow2c1w1p foreign key (satelite_metric_id) references satelite_metric;
