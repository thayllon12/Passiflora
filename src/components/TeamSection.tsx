import React from "react";
import { Users, GraduationCap, Mail, Building, Award, HeartHandshake } from "lucide-react";
import { ScienceProject } from "../types";

interface TeamSectionProps {
  project: ScienceProject;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ project }) => {
  return (
    <section id="equipe" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Corpo de Pesquisadores & Orientação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Equipe Científica & Instituições
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Jovens cientistas, docentes orientadores e laboratórios parceiros dedicados ao desenvolvimento e validação desta pesquisa.
          </p>
        </div>

        {/* 1. Student Researchers */}
        <div className="mb-14">
          <h3 className="text-base font-display font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span>Estudantes Pesquisadores</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.team.researchers.map((student, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-start gap-5"
              >
                <img
                  src={student.avatar}
                  alt={student.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500/40 shrink-0 shadow-md"
                />

                <div className="flex-1 space-y-2">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                      {student.role}
                    </span>
                    <h4 className="text-lg font-display font-bold text-white">
                      {student.name}
                    </h4>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {student.school}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {student.bio}
                  </p>

                  {student.email && (
                    <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-mono">{student.email}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Mentors & Advisors */}
        <div className="mb-14">
          <h3 className="text-base font-display font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Orientação Docente</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.team.mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-start gap-5"
              >
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/40 shrink-0 shadow-md"
                />

                <div className="flex-1 space-y-2">
                  <div>
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                      {mentor.role} • {mentor.title}
                    </span>
                    <h4 className="text-lg font-display font-bold text-white">
                      {mentor.name}
                    </h4>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {mentor.institution}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Institutional Partners & Collaborators */}
        {project.team.collaborators && project.team.collaborators.length > 0 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-display font-bold text-white mb-4 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-purple-400" />
              <span>Apoio Institucional & Laboratórios Parceiros</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.team.collaborators.map((collab, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                >
                  <Building className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="leading-tight">{collab}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
