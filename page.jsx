// app/page.jsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6"
        >
          Japjot Singh
        </motion.h1>
        <p className="text-xl mb-4 max-w-2xl">
          Senior Data Engineer | Building Scalable Data Systems for Analytics, ML, and Business Impact
        </p>
        <div className="flex space-x-4">
          <a href="mailto:jaysingh2883@gmail.com">
            <Button variant="secondary"><Mail className="mr-2" /> Email</Button>
          </a>
          <a href="https://linkedin.com/in/japjot" target="_blank">
            <Button variant="secondary"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
          <a href="https://github.com/japjot" target="_blank">
            <Button variant="secondary"><Github className="mr-2" /> GitHub</Button>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Core Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Data Engineering",
              items: ["ETL/ELT Pipelines", "CDC", "Data Modeling", "Data Governance", "Lineage"],
            },
            {
              title: "Cloud Platforms",
              items: ["AWS (Glue, Redshift, EMR, Lambda)", "Azure (ADF, Synapse, Purview)", "GCP (BigQuery, Dataflow)"],
            },
            {
              title: "Infrastructure",
              items: ["Airflow", "DBT", "Terraform", "Docker", "CI/CD", "CloudWatch"],
            },
          ].map((skill, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {skill.items.map((i, j) => <li key={j}>• {i}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Impact</h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {[
            {
              company: "Computational Group",
              role: "Senior Data Engineer",
              time: "Sept 2023 – Present",
              impact: [
                "Reduced pipeline failures by 40% with scalable ETL (Python + Spark).",
                "Cut BI latency by 35% via Snowflake optimization & clustering.",
                "Achieved 99% reliable orchestration via AWS Glue, Lambda, Step Functions.",
                "Automated ETL validations (5 hrs → 30 mins) using Airflow + GitHub Actions."
              ],
            },
            {
              company: "ZS Associates",
              role: "Data Engineer",
              time: "Jan 2022 – Aug 2023",
              impact: [
                "Built ADF + Synapse pipelines with 30% lower latency.",
                "Delivered reusable Terraform modules + CI/CD (80% faster setup).",
                "Integrated Purview & DBT for governed pipelines ensuring compliance.",
              ],
            },
            {
              company: "Bain & Company",
              role: "Data Engineer",
              time: "July 2020 – Dec 2021",
              impact: [
                "Developed anomaly detection pipelines improving accuracy by 35%.",
                "Cut AWS infra costs by 30% with Terraform automation.",
                "Reduced SLA breaches by 20% with Python quality checks."
              ],
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 shadow-md rounded-2xl"
            >
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <p className="text-gray-600">{exp.role} • {exp.time}</p>
              <ul className="mt-3 space-y-2 text-gray-700">
                {exp.impact.map((point, i) => <li key={i}>✔ {point}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects with Visuals */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Highlighted Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Real-Time Streaming System",
              desc: "Built Kafka + Spark Streaming pipelines with <1 min latency for operational insights.",
              img: "/projects/streaming.png",
            },
            {
              title: "Governed Data Warehouse",
              desc: "Designed Snowflake star schema with DBT lineage + RBAC, enabling trusted BI for execs.",
              img: "/projects/snowflake.png",
            },
            {
              title: "Infra Automation",
              desc: "Provisioned Redshift/EC2 with Terraform & Boto3, reducing infra setup by 80%.",
              img: "/projects/terraform.png",
            },
            {
              title: "Anomaly Detection",
              desc: "Created Spark + Snowflake pipeline detecting financial anomalies with 35% higher accuracy.",
              img: "/projects/anomaly.png",
            },
          ].map((proj, idx) => (
            <Card key={idx} className="shadow-xl rounded-2xl overflow-hidden">
              <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{proj.title}</h3>
                <p className="text-gray-700">{proj.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-12 px-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <p className="text-lg">M.S. in Computer Science • New York University • Dec 2024</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© 2025 Japjot Singh • Senior Data Engineer</p>
      </footer>
    </main>
  );
}
