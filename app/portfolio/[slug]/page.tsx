import { notFound } from "next/navigation"
import { projects, getProject } from "@/lib/projects"
import { ProjectDetail } from "@/components/sections/project-detail"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return <ProjectDetail project={project} />
}
