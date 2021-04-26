package kr.scalar.api.analysis.domain;

import javax.persistence.*;

@Entity
@Table(name = "analyses")
public class Analysis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "analysis_id") private long analysisId;
}
