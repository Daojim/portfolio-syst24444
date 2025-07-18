export interface Personal {
  first: string;
  last: string;
  role: string;
  motto: string;
}

export interface Contacts {
  linkedin: string;
  github: string;
}

export interface Technologies {
  techUsed: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  tech5: string;
}

export interface Projects {
  id: number;
  important: boolean;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imageWidth: string;
  description: string;
  projectLink: string;
  buttonLabel: string;
  projectGithub: string;
}
