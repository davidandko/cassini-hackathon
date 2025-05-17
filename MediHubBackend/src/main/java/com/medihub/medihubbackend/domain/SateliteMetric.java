package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class SateliteMetric {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;

    String readableParamName;
    String bandId;

    @ManyToMany
    List<Satelite> satelites;
}
