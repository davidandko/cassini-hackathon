package com.medihub.medihubbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.net.URL;

@Entity
public class Satelite {
    @Id
    String name;
    URL sateliteUrlApi;
}
