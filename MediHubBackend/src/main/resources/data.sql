
INSERT INTO medi_hub_user (username, current_latitude, current_longtitude) VALUES
                                                                               ('alice', 40.7128, -74.0060),
                                                                               ('bob', 34.0522, -118.2437),
                                                                               ('charlie', 51.5074, -0.1278);

-- Insert devices (IDs from device_seq starting at 1 increment 50)
INSERT INTO device (id, name,register_for_username) VALUES
                                                           (1, 'Heart Rate Monitor', 'alice'),
                                                           (51, 'Blood Pressure Cuff', 'bob'),
                                                           (101, 'Thermometer', 'charlie');


-- Link generated data to devices
INSERT INTO device_generated_data (device_id, generated_data_id) VALUES
                                                                     (1, 1),
                                                                     (51, 51),
                                                                     (101, 101);

-- Insert environmental risk factors
INSERT INTO env_risk_factors (id, name) VALUES
                                            (1, 'Air Pollution'),
                                            (51, 'Water Contamination'),
                                            (101, 'Noise Pollution');

-- Insert satellites
INSERT INTO satelite (name, satelite_url_api) VALUES
                                                  ('SatA', 'http://api.sata.example.com'),
                                                  ('SatB', 'http://api.satb.example.com');

-- Insert satellite metrics
INSERT INTO satelite_metric (id, band_id, readable_param_name) VALUES
                                                                   (1, 'B1', 'PM2.5 Level'),
                                                                   (51, 'B2', 'Water pH'),
                                                                   (101, 'B3', 'Noise Level');

-- Link env risk factors to metrics
INSERT INTO env_risk_factors_measured_by_metrics (env_risk_factors_id, measured_by_metrics_id) VALUES
                                                                                                   (1, 1),
                                                                                                   (51, 51),
                                                                                                   (101, 101);

-- Link satellite metrics to satellites
INSERT INTO satelite_metric_satelites (satelite_metric_id, satelites_name) VALUES
                                                                               (1, 'SatA'),
                                                                               (51, 'SatB'),
                                                                               (101, 'SatB');

-- Insert health metrics
INSERT INTO health_metric (name) VALUES
                                     ('heart_rate'),
                                     ('blood_pressure'),
                                     ('temperature');

-- Insert health metrics measured in device data
INSERT INTO health_metric_measured_in (measured_in_id, for_health_metric_name) VALUES
                                                                                   (1, 'heart_rate'),
                                                                                   (51, 'blood_pressure'),
                                                                                   (101, 'temperature');

-- Insert illnesses
INSERT INTO illness (name) VALUES
                               ('Hypertension'),
                               ('Asthma');

-- Insert illness heal metrics influence
INSERT INTO illness_heal_metrics_influence (heal_metrics_influence_name, illness_name) VALUES
                                                                                           ('blood_pressure', 'Hypertension'),
                                                                                           ('heart_rate', 'Asthma');

-- Link illnesses and env risk factors with correlation points
INSERT INTO illness_linked_env_risk_factor (correlation_point, env_risk_factor_id, illness_name) VALUES
                                                                                                     (0.75, 1, 'Asthma'),
                                                                                                     (0.85, 51, 'Hypertension');

-- Insert medi hub apps
INSERT INTO medi_hub_app (app_id, api_key) VALUES
                                               ('app123', 'key_abc123'),
                                               ('app456', 'key_def456');

-- Insert medi hub app required health metrics
INSERT INTO medi_hub_app_required_health_metrics (medi_hub_app_app_id, required_health_metrics_name) VALUES
                                                                                                         ('app123', 'heart_rate'),
                                                                                                         ('app123', 'blood_pressure'),
                                                                                                         ('app456', 'temperature');

-- Register user devices
INSERT INTO medi_hub_user_registered_devices (registered_devices_id, medi_hub_user_username) VALUES
                                                                                                 (1, 'alice'),
                                                                                                 (51, 'bob'),
                                                                                                 (101, 'charlie');
