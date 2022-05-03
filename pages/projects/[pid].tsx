import { useRouter } from 'next/router';
import projects from '../../data/projects';

interface ProjectProps {
  title: string;
}

const Project = ({ title }: ProjectProps) => {
  return <h1>{title}</h1>;
};

export async function getStaticProps(context: any) {
  const project = projects.find((p) => p.slug === context.params.pid);

  if (!project) throw 'Project not found';
  return {
    props: {
      title: project.title,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => `/projects/${p.slug}`),
    fallback: false,
  };
}

export default Project;
