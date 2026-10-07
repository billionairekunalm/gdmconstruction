"use client";

import React from "react";
import Image from "next/image";

interface TeamSectionProps {
  onOpenBooking: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "owner",
    name: "Gladmore",
    role: "Owner",
    image: "/images/team/owner.jpg",
  },
  {
    id: "clifford",
    name: "Clifford",
    role: "Project Manager",
    image: "/images/team/clifford.jpg",
  },
  {
    id: "moment",
    name: "Moment",
    role: "Safety Manager",
    image: "/images/team/moment.jpg",
  },
  {
    id: "justice",
    name: "Justice",
    role: "Project Engineer",
    image: "/images/team/justice.jpg",
  },
  {
    id: "ronald",
    name: "Ronald",
    role: "Builder",
    image: "/images/team/ronald.jpg",
  },
];

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="team-section" id="team">
      <div className="wrap">
        {/* Section Header */}
        <div className="team-header text-center">
          <div className="team-eyebrow">
            <span>Our Team</span>
          </div>

          <h2 className="team-title">
            Meet Our Team
          </h2>

          <p className="team-subtitle">
            The skilled leadership and craftsmen delivering quality construction, roofing, and renovations across Johannesburg.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card-photo-wrap">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={500}
                  height={500}
                  className="team-card-img"
                />
              </div>

              <div className="team-card-content text-center">
                <h3 className="team-name">{member.name}</h3>
                <p className={`team-role ${member.id === "owner" ? "role-owner" : ""}`}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
